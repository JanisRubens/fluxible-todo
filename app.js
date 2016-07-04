import Fluxible from 'fluxible';
import Application from './components/Application';
import ApplicationStore from './stores/ApplicationStore';
import RouteStore from './stores/RouteStore';
import TodosStore from './stores/TodosStore';

const fetchr = require('fluxible-plugin-fetchr');


// create new fluxible instance
const app = new Fluxible({
    component: Application
});

const fetchrInstance = fetchr({
    xhrPath: '/api'
});

app.plug(fetchrInstance);

// register stores
app.registerStore(RouteStore);
app.registerStore(ApplicationStore);
app.registerStore(TodosStore);

module.exports = app;
