

export default function getAllTasks (context, payload) { 
	context.service.read('todos', {}, {}, function(err, tasks) {
		if (err) {
			console.log(err);
		} else {
			console.log(arguments);
			context.dispatch('TASKS_RECEIVED', {  
				tasks: tasks
			});
		}
	});
};