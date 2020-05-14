import React from 'react';


function Clock() {
    return (
        <div>
            <p>Hola la hora exacta es: </p>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Clock