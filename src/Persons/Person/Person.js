import React, { Component } from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
    }

    render() {
        console.log('[Person.js] render');
        return (
            <div>
                <p onClick={this.props.deleteHandler}>
                    I'm {this.props.name} and I'm {this.props.age} years old
            </p>
                <input type="text" value={this.props.name} onChange={this.props.inputChangeHandler} />
            </div>
        )
    }
}

export default Person;