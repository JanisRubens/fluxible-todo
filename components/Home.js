import React from 'react';
import test from '../actions/todosActions';
import Todos from './Todos'

class Home extends React.Component {
    render() {
		console.log(test.component2());
        return (
            <div>
                <h2>HELLO THERE!</h2>
                <Todos></Todos>
            </div>
        );
    }
}

export default Home;
