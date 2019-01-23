import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    componentWillReceiveProps(nextPros) {
        console.log('[Persons.js] componentWillReceiveProps', nextPros);
    }

    // shouldComponentUpdate(nextPros, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate', nextPros, nextState);
    //     return nextPros.persons !== this.props.persons;
    // }

    componentWillUpdate(nextPros, nextState) {
        console.log('[Persons.js] componentWillUpdate', nextPros, nextState);
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] render');
        return (
            this.props.persons.map((person, index) => <Person
                key={index}
                name={person.name}
                age={person.age}
                deleteHandler={() => this.props.handleDeleteClick(index)}
                inputChangeHandler={(e) => this.props.handleInputChange(e, person.id)}
            />)
        )
    }
}

export default Persons;