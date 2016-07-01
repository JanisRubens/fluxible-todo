class TodosActions {

//	httpGetAsync(theUrl)
//	{
//		var xmlHttp = new XMLHttpRequest();
//		xmlHttp.onreadystatechange = function() { 
//			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//				return xmlHttp.responseText;
//		}
//		xmlHttp.open("GET", theUrl, true); // true for asynchronous 
//		xmlHttp.send(null);
//	}

	getAllTasks(context, payload, callback) { 
		console.log(context, payload, callback);
		//const tasks = this.httpGetAsync('/todos/all');
		context.dispatch('TASKS_RECEIVED', {  
			tasks: tasks
		});
		callback();  
	}; 

	component2() {
		return 'patato';
	}
};

export default new TodosActions();


