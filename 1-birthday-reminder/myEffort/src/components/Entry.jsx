import React from 'react';

function Entry(props) {


    return (
        <div className="birthday-person">
            <figure className="photo">
                <img src={props.img} alt="Birthday-Person-Pic"/>
            </figure>
            <div className="info">
                <span className="name">{props.name}</span>
                <span className="age">{props.age} years</span>
            </div>
        </div>
    );
}

export default Entry;