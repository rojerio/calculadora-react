import React, {useState} from 'react';

function Frase() {
    const [state, setState] = useState('minha frase');

    return <>
    <input value={state} 
    onChange={
        (event) => setState(event.target.value)
    }
    />
    <p>
        <strong>seu texto: </strong>
        {state}
        </p>
    </>
}

export default Frase;