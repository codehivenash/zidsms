import Ember from 'ember';
let groupTypes = ['Corporate', 'Diploma', 'Certificate', 'Other'];
let groupStatus = ['Enroll', 'In Progress','Closed'];

export default Ember.Route.extend({
	// groupTypes: ['Corporate', 'Diploma', 'Certificate', 'Other'],
	// groupStatuses: ['Enroll', 'In Progress','Closed'],	
	selectedCorporateType: '',
	model(){
		return this.store.createRecord('group');
	},
	actions: {
		saveGroup(newGroup){
			//new
			newGroup.groupStatus = 'In Progress'
			//Timestamps
			newGroup.groupCreateDate = Date.now();
			newGroup.groupLastEditDate = Date.now();
			newGroup.groupStartDate = Date.now();

			// console.log(newGroup);
			newGroup.save().then(()=> this.transitionTo('groups'));
		},
		cancelAddGroup(model){
			model.rollbackAttributes();
			this.transitionTo('groups');
		},
		// selectedStatus(value){
		// 	this.set('model.groupStatus', value);
		// },
		willtransition(){
			
		}
	}  
});