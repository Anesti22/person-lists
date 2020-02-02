import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {id: 'hi1',name: 'Nesti', age: 31},
            {id: 'hi2',name: 'John', age: 32},
            {id: 'hi3',name: 'Jane', age: 26}
        ],
        otherState: 'Some other thing',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.persons.findIndex(p => {
            return p.id = id;
        });

        const person = {
            ...this.state.persons[personIndex]
        }

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;

        this.setState({ persons: persons})
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;

        this.setState({
            showPersons: !doesShow
        });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        const style = {
            backgroundColor: 'green',
            fontSize: '23px',
            color: 'white'
        }

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event)=> this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
        }

        return (
            <div className='App'>
                <h1>Hi i'm a React App!!!</h1>
                <button
                style={style}
                onClick={this.togglePersonHandler} className="bg-blue-500 hover:bg-blue-700 text-white py-2">Toggle Persons</button>
                {persons}
             </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m a React App!!!')); <- THIS IS THE JS COMPILED VERSION
    }
}

export default App;
