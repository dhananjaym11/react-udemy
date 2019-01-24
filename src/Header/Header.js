import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        <button onClick={props.onChange}>Toggle Persons</button>
        <button onClick={props.onLogin} >Login</button>
    </div>
)

export default Header;