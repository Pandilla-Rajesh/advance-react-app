import React, { useEffect, useState } from 'react'

function TimeStart(){

    const [time, setTime] = useState(0)
    const [isRuning, setIsRuning] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isstop, setIsStop] = useState(false)

    useEffect(()=>{
        if(isRuning){

            const interval = setInterval(()=>{
                setTime((prev) => prev + 1)
                setCurrentDate(new Date())
               
            }, 100)
            
            return()=>clearInterval(interval)
        }else{
            setTime(0)
        }
        console.log(`${isRuning ? 'ur start' : 'ur stop'}`)

    }, [isRuning])

    useEffect(()=>{
        setTime((prev) => prev + 1)
        setCurrentDate(new Date())
        console.log(`Timer is ${isstop ? 'time stop' : 'time start'}`)

    }, [isstop])

    return(
        <>
           <div className='container'>
            <h1>React time slots</h1>
                <h2>Time: Slot {time}</h2>
                <h3>Date {currentDate.toLocaleString()}</h3>
                <div>
                    <button className='btn btn-success' onClick={()=>setIsRuning(!isRuning)}>
                        {isRuning ? 'start' : 'stop'}
                    </button>
                </div>

                <div>
                    <h1>Time:{time}</h1>
                    <h2>date format: {currentDate.toLocaleString()}</h2>
                    <button className='btn btn-primary' onClick={()=>setIsStop(!isstop)}>
                        {isstop ? 'stop' : 'start'}
                    </button>
                </div>

           </div>
        </>
    )
}

export default TimeStart
