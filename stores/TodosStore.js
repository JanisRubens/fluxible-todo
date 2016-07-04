//import createStore from 'fluxible/addons/createStore';
//
//export default createStore({
//	storeName: 'TodosStore',
//	handlers: {
//		'TASKS_RECEIVED': 'handleReceivedTasks'
//	},
//
//	initialize: function () {
//		this.tasks = [];
//	},
//
//	handleReceivedTasks: function (payload) {
//		console.log("FROM storo:",payload.tasks);
//		this.tasks = payload.tasks;
//		this.emitChange();
//	},
//	getTasks: function () {
//		return this.tasks;
//	},
//	dehydrate: function () {
//		return {
//			tasks: this.tasks
//		};
//	},
//	rehydrate: function (state) {
//		console.log("state:",state);
//		this.tasks = state.tasks;
//	}
//});

import createStore from 'fluxible/addons/createStore';

var TodosStore = createStore({  
    storeName: "TodosStore",  
    handlers: {  
        "TASKS_RECEIVED": "handleTasksReceived"  
    },  
    initialize: function(dispatcher) {  
        this.tasks = {};  
    },  
    handleTasksReceived: function(payload) { 
        this.tasks = payload.tasks;  
        this.emitChange();
		console.log(this.emitChange());
    },  
    getTasks: function() {  
        return this.tasks;  
    },  
    dehydrate: function() {  
        return {  
            tasks: this.tasks  
        };  
    },  
    rehydrate: function(state) {  
        this.tasks = state.tasks;  
    }  
});  
module.exports = TodosStore;