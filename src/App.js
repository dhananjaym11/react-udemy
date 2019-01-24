import React, { Component } from 'react';

import Header from './Header/Header';
import Persons from './Persons/Persons';
import './App.css';

export const AuthContext = React.createContext(false);

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
      showPersons: false,
      isAuthenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  static getDerivedStateFromProps(nextPros, prevState) {
    console.log('[App.js] getDerivedStateFromProps', nextPros, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextPros, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextPros, nextState);
    return nextState.showPersons !== this.state.showPersons ||
      nextState.persons !== this.state.persons ||
      nextState.isAuthenticated !== this.state.isAuthenticated;
  }

  componentWillUpdate(nextPros, nextState) {
    console.log('[App.js] componentWillUpdate', nextPros, nextState);
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  toggleHandler = () => {
    this.setState((prevState) => {
      return {
        showPersons: !prevState.showPersons
      }
    })
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
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
          onLogin={this.loginHandler}
          onChange={this.toggleHandler} />
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
