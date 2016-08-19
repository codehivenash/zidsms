import Ember from 'ember';

// let students = [{
//   id: 1,
//   firstName: 'Victor',
//   middleName: 'Farnwell',
//   lastName: 'Pindergress',
//   email: 'nash@codehive.co',
//   gender: 'male',
//   dateOfBirth: '2012-04-23T18:25:43.511Z',
//   address: '15 Downie Avenue, Belgravia, Harare, Zimbabwe',
//   city: 'Harare',
//   state: 'Mashonaland',
//   zipCode: 'N/A',
//   mobileNumber: 783426547,
//   landlineNumber: 700383,
//   username: 'fandango',
//   password: 'password'
// },
// {
//   id: 2,
//   firstName: 'Earnest',
//   middleName: 'Dillridge',
//   lastName: 'Collingsworth',
//   email: 'earnest@codehive.co',
//   gender: 'male',
//   dateOfBirth: '2012-04-23T18:25:43.511Z',
//   address: '15 Downie Avenue, Belgravia, Harare, Zimbabwe',
//   city: 'Harare',
//   state: 'Mashonaland',
//   zipCode: 'N/A',
//   mobileNumber: 783426547,
//   landlineNumber: 700383,
//   username: 'fandango',
//   password: 'password'
// },
// {
//   id: 3,
//   firstName: 'Fillamon',
//   middleName: 'Elders',
//   lastName: 'Collingsworth',
//   email: 'earnest@codehive.co',
//   gender: 'male',
//   dateOfBirth: '2012-04-23T18:25:43.511Z',
//   address: '15 Downie Avenue, Belgravia, Harare, Zimbabwe',
//   city: 'Harare',
//   state: 'Mashonaland',
//   zipCode: 'N/A',
//   mobileNumber: 783426547,
//   landlineNumber: 700383,
//   username: 'fandango',
//   password: 'password'
// },
// {
//   id: 4,
//   firstName: 'Buckwell',
//   middleName: 'Fouldron',
//   lastName: 'Berkshire',
//   email: 'earnest@codehive.co',
//   gender: 'male',
//   dateOfBirth: '2012-04-23T18:25:43.511Z',
//   address: '15 Downie Avenue, Belgravia, Harare, Zimbabwe',
//   city: 'Harare',
//   state: 'Mashonaland',
//   zipCode: 'N/A',
//   mobileNumber: 783426547,
//   landlineNumber: 700383,
//   username: 'fandango',
//   password: 'password'
// }];
export default Ember.Route.extend({
	
	actions: {
		removeStudent(student){

			let confirmation = confirm("Do you want to Delete the ${}");
			if(confirmation){
				student.destroyRecord().then(()=> this.transitionTo('students'));
			}
			
		}

	}
});
