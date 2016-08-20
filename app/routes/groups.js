import Ember from 'ember';

export default Ember.Route.extend({
	parentController: Ember.computed(function(){
		return this.controllerFor('groups');
	}),
	setupController(controller,model){
		this._super(controller,model);
		this.get('parentController').set('title' , 'Management');
	}
});

