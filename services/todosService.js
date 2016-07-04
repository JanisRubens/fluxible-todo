/*Service is the same as API, this is the place where i would IMPORT the DB schema and manipulate with it.*/
const tempData = {
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

export default {

	name: "todos",
	create: function(req, resource, params, body, config, callback) {
		const uniqid = Date.now(); //temporary solution.
		const newTodo = {
			completed: params.completed,
			description: params.description
		}
		tempData[uniqid] = newTodo;
		callback(null, newTodo);

	},
	read: function(req, resource, params, config, callback) {
		callback(null, tempData );
	},
	update: function(req, resource, params, body, config, callback) {
		var id = params.id;
		if ( typeof(tempData[id]) !== "undefined" ) {
			tempData[id] = {
				completed: params.completed,
				description: params.description
			}
			callback( null, tempData );
		} else {
			const err = new Error(' Cant update');
			callback( err );
		}
	},
	delete: function(req, resource, params, config, callback) {
		var id = params.id;
		if ( typeof(tempData[id]) !== "undefined" ) {
			delete tempData[id];
			callback(null, tempData);
		}
	}

};