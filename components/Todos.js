/*globals document*/

import React from 'react';
import TodosStore from '../stores/TodosStore';
import { connectToStores } from 'fluxible-addons-react';

class Todos extends React.Component {
    render() {

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
