import React, { useState } from 'react'

export default function ReUseCounter(){
    const{counter, incrementCounter, decrementCounter, reset} = Counter()
    return(
       <section>
         <h1>ReUse Counter Incerement and Decrement : {counter}</h1>
        <div>
            <ul className='list-inline'>
                <li className='list-inline-item'>
                    <button onClick={incrementCounter} className='btn btn-success'>Incerement</button>
                </li>
                <li className='list-inline-item'>
                    <button onClick={decrementCounter} className='btn btn-danger'>Decrement</button>
                </li>
                <li className='list-inline-item'>
                    <button onClick={reset} className='btn btn-warning'>Reset</button>
                </li>
            </ul>
        </div>
       </section>
    )
}

const Counter = () =>{

    const [counter, setCounter] = useState(0)

    const incrementCounter=()=>{
        setCounter((prev) => prev + 1)
    }

    const decrementCounter=()=>{
        setCounter((prev) => prev - 1)
    }

    const reset=()=>{
        setCounter(0)
    }

    return{counter, incrementCounter, decrementCounter, reset}
}