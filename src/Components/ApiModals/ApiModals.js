import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

function ApiModals(){

    const [todos, setToDos] = useState([])
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(false)

    // custom-api//
        useEffect(()=>{
            setLoading(true)
            fetch('https://jsonplaceholder.typicode.com/todos').then((res => res.json()))
            .then(result=>{
                setToDos(result)
                console.log(result, 'data fetched')
            }).catch((err)=>{
                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        }, [])
    // end //

    const getCountry=async()=>{
        setLoading(true)
        try{
            const conall = await fetch('https://restcountries.com/v3.1/all')
            const res = await conall.json()
            console.log(res, 'country data list')
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const getProduct=async()=>{
        
        setLoading(true)
        try{

            const prodata = await axios.get('https://dummyjson.com/products')
            console.log(prodata.data.products, 'get product list')

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getCountry()
    }, [])

    useEffect(()=>{
        getProduct()
    }, [])

    return(
        <>
            <h1>Welcome to API Modals</h1>
        </>
    )
}

export default ApiModals