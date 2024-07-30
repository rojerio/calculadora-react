import React, {useState} from 'react';

function Calculadora() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState('');

    return <>
        <input 
            type="number"
            value={num1} 
            onChange={
                (event) => setNum1(parseFloat(event.target.value))
            }
        />
        <input 
            type="number"
            value={num2} 
            onChange={
                (event) => setNum2(parseFloat(event.target.value))
            }
        />
        <div>
            <button onClick={() => setResultado(num1 + num2)}>+</button>
            <button onClick={() => setResultado(num1 - num2)}>-</button>
            <button onClick={() => setResultado(num1 * num2)}>*</button>
            <button onClick={() => setResultado(num1 / num2)}>/</button>
        </div>
        <p>{resultado}</p>
    </>
}

export default Calculadora;