import axios from 'axios';


var tempData = {
	"1": {
		completed: "true",
		description: "I sometimes wish we could think of a better practice task"
	},
	"17": {
		completed: "false",
		description: "FizzBuzz is also overrated.."
	},
	"221": {
		completed: "true",
		description: "quack quack quack.. said the little duckling!"
	}
}

module.exports = {
	name: "all",
	read: function(req, resource, params, config, callback) {
//		console.log('HALLLLo');
//		axios.get('/todos/all')
//			.then(function (response) {
//			const tasks = response.data.tasks
//			console.log(tasks);
//			
//		})
//			.catch(function (error) {
//			console.info("ERRROR:", error);
//		});
		console.log(arguments);
		callback(null,  tempData);  
	}
}

//
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