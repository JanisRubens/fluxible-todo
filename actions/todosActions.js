import axios from 'axios';

class TodosActions {

	getAllTasks(context, payload, callback) { 
		console.log(context, payload, callback);
		axios.get('/todos/all')
			.then(function (response) {
			console.info(response.data.tasks);
			const tasks = response.data.tasks
			context.dispatch('TASKS_RECEIVED', {  
				tasks: tasks
			});
			callback();  
		})
			.catch(function (error) {
			console.info(error);
		});
	}; 

	component2() {
		return 'patato';
	}
};

export default new TodosActions();


