import React, { Component } from 'react';

// Tasks JSON
import exampleTask from './tasks/example.json';

// Components
import Compiler from './components/compilerTask'
import Form from './components/form';

class App extends Component {

  state = {
    tasks: exampleTask
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
    return <div>
      <Form datos={this.createTask}/>
      <Compiler example={this.state.tasks} delete={this.deleteTask} done={this.doneTask}/>
    </div>
  }
}

export default App;
