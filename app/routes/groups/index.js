import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return Ember.RSVP.hash({
			groups: this.store.findAll('group'),
		});
	},
	setupController(controller, model){
		controller.set('all', model.groups);
		controller.set('certificate', model.groups.filterBy('groupType', 'Certificate'));
		controller.set('diploma', model.groups.filterBy('groupType', 'Diploma'));
		controller.set('corporate', model.groups.filterBy('groupType', 'Corporate'));
		controller.set('other', model.groups.filterBy('groupType', 'Other'));
	}
});

