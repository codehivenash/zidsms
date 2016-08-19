import Ember from 'ember';
import Faker from 'faker';

var gender = ["Male", "Female"];
var cities = ["Harare", "Gweru", "Masvingo", "Bulawayo", "Chitungwiza", "Gokwe", "Kwekwe"];
// var names = ["Tinashe", "Anesu", "Nyasha", "Tawanda", "Chipo", "Tafadzwa", "Yeukai"]

export default Ember.Route.extend({

	model(){
		return this.store.createRecord('student');
	},
	actions: {
		addStudent(student){			
			student.set('email', Faker.internet.email());
			student.set('gender', Faker.random.arrayElement(gender));
			student.set('dateOfBirth', Faker.date.past());

			student.set('street', '15 Downie Avenue, Belgravia, Harare, Zimbabwe');
			student.set('city', Faker.random.arrayElement(cities));
			student.set('state',Faker.address.state());
			student.set('postCode',Faker.address.zipCode());
			student.set('country', 'Zimbabwe');
			
			student.set('mobileNumber', Faker.phone.phoneNumber());
			student.set('landlineNumber', Faker.phone.phoneNumber());

			student.set('username', 'demo');
			student.set('password', 'demo');

			student.save().then(()=> this.transitionTo('students'));
		},
		cancelAddStudent(student){
			student.rollbackAttributes();
			this.transitionTo('students');
		},
		willtransition(){
			this.controller.get('model').rollbackAttributes();
		}
		
	}
});