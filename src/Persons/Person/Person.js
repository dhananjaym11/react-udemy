import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../../App';

class Person extends Component {
    constructor(props) {
        super(props);
        this.personHeader = React.createRef();
        console.log('[Person.js] constructor', props);
    }

    componentWillMount() {
        console.log('[Person.js] componentWillMount');
    }

    componentDidMount() {
        debugger
        console.log('[Person.js] componentDidMount');
        console.log(this.refs.inputTag.value);
        console.log(this.personHeader.current.innerHTML);
    }

    render() {
        console.log('[Person.js] render');
        return (
            <>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : ''}
                </AuthContext.Consumer>
                <p ref={this.personHeader} onClick={this.props.deleteHandler}>
                    I'm {this.props.name} and I'm {this.props.age} years old
                </p>
                <input
                    ref="inputTag"
                    type="text"
                    value={this.props.name}
                    onChange={this.props.inputChangeHandler} />
            </>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    deleteHandler: PropTypes.func,
    inputChangeHandler: PropTypes.func
}

export default Person;