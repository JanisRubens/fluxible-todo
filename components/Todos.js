/*globals document*/

import React from 'react';
import TodosStore from '../stores/TodosStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import TodosActions from '../actions/todosActions';

class Todos extends React.Component {
    render() {
		//TodosActions.getAllTasks();
		console.log(TodosActions.component2());
        return (
            <div>
				TODOS
            </div>
        );
    }

//    componentDidUpdate(prevProps, prevState) {
//        const newProps = this.props;
//        if (newProps.pageTitle === prevProps.pageTitle) {
//            return;
//        }
//        document.title = newProps.pageTitle;
//    }
}

export default connectToStores(
    Todos,
    [TodosStore],
    function (context, props) {
        var todosStore = context.getStore(TodosStore);
        return {
            tasks: todosStore.getTasks()
        };
    }
);
