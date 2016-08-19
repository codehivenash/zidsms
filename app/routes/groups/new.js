import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		this.store.createRecord('group');
	},
	actions: {
		saveGroup(group){
			group.save.then(()=>{
				this.transitionTo('groups');
			});
		}
	}
});