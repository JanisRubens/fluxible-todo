import createStore from 'fluxible/addons/createStore';

export default createStore({
    storeName: 'TodosStore',
    handlers: {
        'TASKS_RECEIVED': 'handleReceivedTasks'
    },
    handleReceivedTasks: function (payload) {
        this.currentPageName = payload.tasks;
        this.emitChange();
    },
    getTasks: function () {
        return this.tasks;
    },
    dehydrate: function () {
        return {
            currentTasks: this.currentTasks
        };
    },
    rehydrate: function (state) {
        this.currentTasks = state.currentTasks;
    }
});