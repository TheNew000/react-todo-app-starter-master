import React, {Component} from 'react'
import classNames from 'classnames'

class Task extends Component{

    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        };
    }
    render(){
        const classes = classNames({
            'task': true,
            'completed': this.props.isCompleted,
            'editing': this.state.isEditing
        });
        return (
            <div className={this.props.className}>
                <input type="checkbox"/>
                <label>
                    <span onDoubleClick={() ==> this.toggleEditMode(true)}>{this.props.name}</span>
                    <input type="text" value={this.props.name} onBlur={() ==> this.toggleEditMode(false)}/>
                </label>
                <button type="button">Delete</button>
            </div>
        )
    }

    toggleEditMode(state){
        this.setState({isEditing: state})
    }
}

export {Task}
