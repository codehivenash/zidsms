import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			groups: this.store.findAll('group'),
			students: this.store.findAll('student')
		});
	},
	setupController(controller, model){
		controller.set('groups', model.groups);
		controller.set('students', model.students);
	}
});
