import React, { Component } from 'react';

// CSS
import './../styles/form.css'

export default class Form extends Component {

    state = {
        title: '',
        description: '',
        priority: ''
    }

    prevent = e => {
        e.preventDefault();
        this.props.datos(this.state.title, this.state.description, this.state.priority)
        this.setState({
            title: '',
            description: ''
        })
    }

    enviarDatos = e => {
        if(e.target.name === 'title') {
            this.setState({
                title: e.target.value
            })
        } else if(e.target.name === 'description') {
            this.setState({
                description: e.target.value
            })
        } else if(e.target.name === 'priority') {
            this.setState({
                priority: e.target.value
            })
        }
    }

    render() {
        return (
            <form className="form-father" onSubmit={this.prevent}>
                <h1>Añadir tasks</h1>
                <input type="text" placeholder="Escribe el titulo de tu task" required name="title" onChange={this.enviarDatos} value={this.state.title}/>
                <textarea placeholder="Escribe la descripcion de la task" required name="description" onChange={this.enviarDatos} value={this.state.description}></textarea>
                <div className="group-input">
                    <label>Prioridad:</label>
                    <select name="priority" onChange={this.enviarDatos} required>
                        <option value="">Seleccione una prioridad</option>
                        <option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                    </select>
                </div>
                <input type="submit" />
            </form>
        )
    }
}