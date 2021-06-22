import React, { Component } from 'react';
import Task from './task'

class Compiler extends Component {
    render() {
        return this.props.example.map(task => <Task example={task} key={task.id} delete={this.props.delete} done={this.props.done} />) // Retornamos componentes
    }
}

export default Compiler