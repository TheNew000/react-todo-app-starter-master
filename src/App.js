import React, {Component} from 'react';
import './App.css';
import {CreateTask} from './componenets/create-task';
import {TaskList} from './componenets/task-list';
import {Task} from './componenets/task';

const tasks = [
    {
        name: 'Normal Task',
        isCompleted: false
    },
    {
        name: 'Completed Task',
        isCompleted: true
    }
];

class App extends Component {

    render() {
        return (
            <div className="todo-app">

                <h1>To Do List</h1>
                <CreateTask />

                <TaskList tasks={tasks}>

                    <Task name="Normal Task" className="task" />
                    <Task name="Completed Task" className="task completed" />
                    <Task name="Editing Task" className="task editing" />

                </TaskList>

            </div>
        );
    }

}

export default App;
