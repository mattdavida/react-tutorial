import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asdf3', name: 'Matt', age: '31' },
      { id: 'era3', name: 'Manu', age: '29' },
      { id: 'tgbhaetr43', name: 'Michelle', age: '26' }
    ],
    showPersons: false
  };

  deletePersonHandler(index) {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons });
  }

  nameChangedHandler(event, id) {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  togglePersonsHandler() {
    this.setState({ showPersons: !this.state.showPersons });
  }

  getClasses() {
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return classes.join(' ');
  }

  getPersons() {
    return (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={this.deletePersonHandler.bind(this, index)}
              changed={event => this.nameChangedHandler(event, person.id)}
              key={person.id}
            />
          );
        })}
      </div>
    );
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = this.getPersons();
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={this.getClasses()}>this is really working</p>
        <button className="button" onClick={this.togglePersonsHandler.bind(this)}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
