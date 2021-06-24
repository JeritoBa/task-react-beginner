import React, { Component } from 'react';

// Tasks JSON
import exampleTask from './tasks/example.json';

// Components
import Compiler from './components/compilerTask'
import Form from './components/form';

// CSS
import './styles/style.css'

class App extends Component {

  state = {
    tasks: exampleTask,
    priority: ''
  }

  createTask = (title, description, priority) => {
    const task = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false,
      priority: priority
    }

    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  deleteTask = id => {
    const task = this.state.tasks.filter(task => task.id !== id)
    this.setState({
      tasks: task
    })
  }

  doneTask = id => {
    const task = this.state.tasks.filter(task => {
      if(task.id === id) {
        task.done = !task.done
      }
      return task
    })
    this.setState({
      tasks: task
    })
  }

  render() {
    return <div className="father">
      <div className="form">
        <Form datos={this.createTask}/>
      </div>
      <div className="father-tasks">
        <h1>Tasks</h1>
        <div className="conductor">
          <Compiler example={this.state.tasks} delete={this.deleteTask} done={this.doneTask} />
        </div>
      </div>
    </div>
  }
}

export default App;
