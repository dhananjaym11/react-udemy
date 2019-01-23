import React, { Component } from 'react';

import Header from './Header/Header';
import Persons from './Persons/Persons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor', props);

    this.state = {
      persons: [
        { id: 1, name: 'a', age: 10 },
        { id: 2, name: 'b', age: 20 },
        { id: 3, name: 'c', age: 30 },
      ],
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextPros, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextPros, nextState);
    return nextState.showPersons !== this.state.showPersons ||
      nextState.persons !== this.state.persons;
  }

  componentWillUpdate(nextPros, nextState) {
    console.log('[App.js] componentWillUpdate', nextPros, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  toggleHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  handleDeleteClick = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({
      persons: persons
    })
  }

  handleInputChange = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const persons = [...this.state.persons];
    persons[personIndex].name = e.target.value;
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            handleDeleteClick={this.handleDeleteClick}
            handleInputChange={this.handleInputChange}
          />
        </div>
      )
    }

    return (
      <div className="App">
        <button onClick={() => this.setState({ showPersons: true })}>Show Persons</button>
        <Header
          title={this.props.title}
          onChange={this.toggleHandler} />

        {persons}
      </div>
    );
  }
}

export default App;
