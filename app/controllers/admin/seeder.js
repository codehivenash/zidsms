import Ember from 'ember';
import Faker from 'faker';

export default Ember.Controller.extend({
	students: [],
	groups: [],
	// authors: [],

	actions: {
		generateGroups(){
			const count = parseInt(this.get('groupsCounter'));

			for (let i = 0; i < count; i++) {
				this.store.createRecord('group').randomize().save().then(()=>{
					if (i === count - 1){
						//reset the counter
						this.set('groupsCounter', 0);

						//Set the libDone Generating
						this.set('groupsDone', true);
					}
				});
			}
		},
		deleteGroups(){
			this.set('groupsDelDone', true);
			this._destroyAll(this.get('groups'));
		},

		generateStudents(){
			const count = parseInt(this.get('studentsCounter'));

			for (let i = 0; i < count; i++) {
				const group = this._selectRandomGroup();
				this.store.createRecord('student')
				.randomize(group)
				.save()
				.then(()=>{
					if (i === count - 1){
						//reset the counter
						this.set('studentsCounter', 0);

						//Set the libDone Generating
						this.set('studentsDone', true);
					}
				});
				group.save()
			}
		},
		deleteStudents(){
			this.set('studentsDelDone', true);
			this._destroyAll(this.get('students'));
		}
	},
	
	// Private Methods
	_destroyAll(records){
		records.forEach((item)=>{
			item.destroyRecord();
		});
	},

	_selectRandomGroup(){
		const groups = this.get('groups');
		const groupsCounter = groups.get('length');

		//Create a new array from IDs
		const groupIds = groups.map((grou)=> { return grou.get('id');});
		const randomNumber = Faker.random.number(groupsCounter - 1);

		const randomGroup = groups.findBy('id', groupIds[randomNumber]);

		return randomGroup;
	}
});