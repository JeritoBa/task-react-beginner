import React, { Component } from 'react';

export default class Task extends Component {

    style() {
        return {
            backgroundColor: this.props.example.done ? "#000" : "green"
        }
    }

    render() {

        const {example} = this.props

        return (
            <div style={this.style()}>
                <span>{example.priority}</span>
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