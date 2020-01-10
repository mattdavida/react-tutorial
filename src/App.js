import React, { Component } from 'react';
import './App.css';
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
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
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={this.togglePersonsHandler.bind(this)}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
