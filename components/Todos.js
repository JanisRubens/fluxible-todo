/*globals document*/

import React from 'react';
import TodosStore from '../stores/TodosStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import TodosActions from '../actions/todosActions';

class Todos extends React.Component {
	
    render() {
console.log(this.props.tasks);

        return (
            <div>
				TODOS
            </div>
        );
    }
}

export default connectToStores(
    Todos,
    [TodosStore],
    function (context, props) {
        //var todosStore = 
        return {
            tasks: context.getStore(TodosStore).getTasks()
        };
    }
);
