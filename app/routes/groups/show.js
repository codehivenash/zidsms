import Ember from 'ember';

export default Ember.Route.extend({
	parentController: Ember.computed(function(){
		return this.controllerFor('groups');
	}),
	setupController: function (controller, model){
		this._super(controller,model);
		this.get('parentController').set('title', model.get('groupTitle'));

		// controller.set('buttonLabel', 'Create');
	}
});