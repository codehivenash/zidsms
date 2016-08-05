import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('students', function(){
    this.route('certificate');
    this.route('corporates');
    this.route('diploma');
    this.route('other');
  	this.route('individual');

    this.route('show', {path: '/:student_id/show'});
    this.route('new');
  	this.route('edit', {path: '/:student_id/edit'});
    // this.route('delete', { path: '/:student_id/delete'});

   
  });



  this.route('dashboard');
  this.route('marks', function(){
    this.route('index');
  });
  this.route('fees');
  this.route('account');
  this.route('payments');
  this.route('message');
});

export default Router;
