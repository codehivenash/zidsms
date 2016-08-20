import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Faker from 'faker';
import Ember from 'ember';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

let genderTypes = ['male', 'female'];


export default Model.extend({
  
  firstName: attr('string'),
  // middleName: attr('string'),
  lastName: attr('string'),
  
  fullName: Ember.computed('firstName', 'lastName', function(){
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  email: attr('string'),
  gender: attr('string'),
  dateOfBirth: attr('string'),
  currentGroup: attr('string'),

  //relationshiped data

  street: attr('string'),
  city: attr('string'),
  state: attr('string'),
  postCode: attr('string'),
  country: attr('string'),
  mobileNumber: attr('string'),
  landlineNumber: attr('number'),
  username: attr('string'),
  password: attr('string'),

  aValue: Ember.computed('group', function(){
    return this.get('group').get('groupType');
  }),
  // aValue: Ember.computed.filterBy( 'group' , 'groupType' , 'Cetificate' ),

  //Associations
  group: belongsTo('group', { async: true}),
  studentType: attr('string'),
  // Ember.computed('group', function(){
  //   return this.get('group').get('groupType');
  // }),

  //We will add messages, payments, fees, profile later on. 

  randomize(group){
    //Personal
    this.set('firstName', Faker.name.firstName());
    this.set('lastName', Faker.name.lastName());

    this.set('dateOfBirth', Faker.date.past());
    this.set('gender', Faker.random.arrayElement(genderTypes));

    //Contact
    this.set('email', Faker.internet.email());
    this.set('mobileNumber', Faker.phone.phoneNumber());
    this.set('landlineNumber', Faker.phone.phoneNumber());
    
   
    //Address
    this.set('street', Faker.address.streetAddress());
    this.set('city', Faker.address.city());
    this.set('state', Faker.address.state());
    this.set('postCode', Faker.address.zipCode());
    this.set('country', Faker.address.country());
    

    this.set('username', 'demo');
    this.set('password', 'demo');

    this.set('studentType', group.get('groupType'));
    this.set('group', group);
    
    return this;
  },

  // _bookTitle(){
  //   return `${Faker.commerce.productName()} Cook Book`;
  // },

  _randomYear(){
    return new Date(this._getRandomArbitrary(1900, 2015));
  },

  _getRandomArbitrary(min, max){
    return Math.random() * (min-max) + min;
  }

  // randomize(){
  //   this.set('email', Faker.company.companyName() + ' Library');
  //   this.set('gender', Faker.lorem.paragraph());

  //   this.set('dateOfBirth', Faker.random.arrayElement(groupTypes));
  //   this.set('street', Faker.address.streetAddress());
  //   this.set('city', Faker.phone.phoneNumber());
  //   this.set('state', Faker.date.future());
  //   this.set('postCode', Faker.date.future());
  //   this.set('country', Faker.date.future());
  //   this.set('mobileNumber', Faker.date.future());
  //   this.set('landlineNumber', Faker.date.future());
  //   this.set('username', Faker.date.future());
  //   this.set('password', Faker.date.future());
    
  //   return this;
  // }
});
