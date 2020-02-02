import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1 onClick={props.click}>I'm a {props.name} and i'm {props.age} years old</h1>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}
export default Person;
