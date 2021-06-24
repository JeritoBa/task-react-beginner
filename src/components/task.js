import React, { Component } from 'react';

// CSS
import './../styles/task.css'

export default class Task extends Component {

    general() {
        if(this.props.example.priority === 'Baja') {
            return {backgroundColor: this.props.example.done ? "rgba(7, 187, 88, 0.589)" : "rgba(215, 216, 219, 0.671)",
                border: this.props.example.done ? "rgba(10, 216, 103, 0.671) 3px solid" : "#e1e1e1 2px solid" }
        } else if(this.props.example.priority === 'Media') {
            return {backgroundColor: this.props.example.done ? "rgba(7, 187, 88, 0.589)" : 'rgba(204, 218, 16, 0.781)',
                border: this.props.example.done ? "rgba(10, 216, 103, 0.671) 3px solid" : 'rgba(204, 218, 16, 0.781)'} 
        } else if(this.props.example.priority === 'Alta') {
            return {backgroundColor: this.props.example.done ? "rgba(7, 187, 88, 0.589)" : 'rgba(216, 31, 18, 0.781)',
                border: this.props.example.done ? "rgba(10, 216, 103, 0.671) 3px solid" : "rgba(216, 31, 18, 0.781)"}
        }
    }

    render() {
        const {example} = this.props;
        
        return (
            <div style={this.general()} className="task">
                <span>Prioridad: {example.priority}</span>
                <h1>{example.title}</h1>
                <p>{example.description}</p>
                <div className="group-input">
                    <label htmlFor="submit">Completar Tarea: </label>
                    <input type="checkbox" id="submit" onClick={this.props.done.bind(this, example.id)}/>
                </div>
                <div className="group-input">
                    <label htmlFor="delete">Eliminar Tarea: </label>
                    <button id="delete" onClick={this.props.delete.bind(this, example.id)}>X</button>
                </div>
            </div>
        )
    }
}