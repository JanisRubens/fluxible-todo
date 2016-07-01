//import axios from 'axios';
//
//class TodosActions {
//
//	getAllTasks(context, payload, callback) { 
//		console.log("from getALL TASKS === >",context, payload, callback);
//		axios.get('/todos/all')
//			.then(function (response) {
//			console.info(response.data.tasks);
//			const tasks = response.data.tasks
//			context.dispatch('TASKS_RECEIVED', {  
//				tasks: tasks
//			});
//			callback();  
//		})
//			.catch(function (error) {
//			//console.info("ERRROR:", error);
//		});
//	}; 
//
//	component2() {
//		return 'patato';
//	}
//};
//
//export default new TodosActions();
//
//

//THIS IS THE WORKING ONE

//import axios from 'axios';
//
//function getAllTasks (context, payload, callback) { 
//	axios.get('/todos/all')
//		.then(function (response) {
//		const tasks = response.data.tasks
//		context.dispatch('TASKS_RECEIVED', {  
//			tasks: tasks
//		});
//		callback();  
//	})
//		.catch(function (error) {
//		console.info("ERRROR:", error);
//	});
//};
//
//export default getAllTasks;

function getAllTasks (context, payload, callback) { 
	console.log(arguments);
	console.log("INSIDE ACTION");
	context.service.read('all', {}, {}, function(err, tasks) {
		if (err) {
			callback(err);
		} else {
			console.log(arguments);
			context.dispatch('TASKS_RECEIVED', {  
				tasks: tasks
			});
			callback();  
		}
	});
	//	})
	//		.catch(function (error) {
	//		console.info("ERRROR:", error);
	//	});
};

export default getAllTasks;