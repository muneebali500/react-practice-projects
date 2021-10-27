import React, { useState } from 'react';
import Entry from './Entry';
import data from '../data';

function App() {

    const clearStyle = {
        display: `none`
    }

    const [clear, setClear] = useState(); 
    
    function clearList() {
        setClear(clearStyle);
    }

    return (
        <div className="section">
            <div className="container">
                <h2 className="heading">{!clear ? data.length : `0`} Birthdays Today</h2>
                <div className="person-container" style={clear}>
                    {data.map(person => 
                        <Entry
                            key={person.id} 
                            img={person.image} 
                            name={person.name} 
                            age={person.age} 
                    />)}
                </div>
                <button onClick={clearList}>Clear All</button>
            </div>
        </div>
    );
}

export default App;