import React, {Component} from 'react'
import {task} from './task'

class TaskList extends Component{
    render(){
        return (
            <div className="task-list">
                {this.props.tasks.map()}
            </div>
        )
    }

    renderTask(task, index){
        return <Task name={task.name} isCompleted={task.isCompleted}/>
    }
}

export {TaskList}
