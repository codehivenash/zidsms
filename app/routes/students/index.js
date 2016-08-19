import Ember from 'ember';

export default Ember.Route.extend({
	model(){	
		return this.store.findAll('student');
	},
	setupController(controller, model){
		controller.set('all', model);
		// controller.set('certificate', model.students);
		controller.set('certificate', model.filterBy('studentType', 'Certificate'));
		controller.set('diploma', model.filterBy('studentType', 'Diploma'));
		controller.set('corporate', model.filterBy('studentType', 'Corporate'));
		controller.set('other', model.filterBy('studentType', 'Other'));
	}
});

