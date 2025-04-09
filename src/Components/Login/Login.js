import React, { useEffect, useState } from 'react'
import TimeStart from '../TimeStart/TimeStart'
import ReUseCounter from '../Counter/Counter'
import AboutReact from '../AboutReact/AboutReact'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { Link, useNavigate } from 'react-router-dom'

const Login = ()=>{

  const resetForm = {
    userName:'',
    password:''
  }

  const [login, setLogin] = useState({...resetForm})
  const navigate = useNavigate()
  const [error, setError] = useState({})
  const handleChange=(e)=>{
    const {name, value} = e.target

    if(name === 'userName' && value.length > 10) return;
    if(name === 'password' && value.length > 8) return

    setLogin({...login, [name]: value})
    console.log(login, 'user details')
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const errors = {}
    alert(JSON.stringify(login, null, 2))

    if(!login.userName.trim()){
        errors.userName = 'Please enter username'
    }else if(login.userName < 10){
        errors.userName = 'please enter maximum 10 characters'
    }else if(!/^[a-zA-Z0-9_@]/.test(login.userName)){
        errors.userName = 'Username can only contain letters, numbers, underscore, and @'
    }

    if(!login.password.trim()){
        errors.password = 'please enter password'
    }else if(login.password.length < 10){
        errors.password = 'please enter password'
    }else if(!/[!@&*#0-9:{}]/.test(login.password)){
        errors.password = 'Password must contain at least one special character'
    }

    if(Object.keys(errors).length === 0){
        navigate('/home')
    }else{
        setError(errors)
    }
    setLogin(resetForm)

  }

    return(
        <section className='info-login'>
            <div className='container info-log-screen'>
                <div className='row d-flex align-items-center justify-content-center h-100'>
                    <div className='col-md-4'>
                        <div>
                        <div className='d-flex align-items-center justify-content-center flex-column'>
                            <h1 className='text-white'>Login</h1>
                            <h6 className='mb-5'>Please eneter you Login and Password</h6>
                        </div>
                        <Form className='info-form' onSubmit={handleSubmit}>
                                <InputGroup className={`border rounded-2 ${error.userName ? 'mb-2' : 'mb-4'}`}>
                                    <InputGroupText className='bg-transparent border border-0'>
                                         <i class="bi bi-person-fill"></i>
                                    </InputGroupText>
                                    <FormControl placeholder='Username or E-mail' onChange={handleChange} value={login.userName}
                                   autoComplete='off' className='bg-transparent border border-0' name='userName' />
                                </InputGroup>
                                <p>{error.userName && <small className='text-white'>{error.userName}</small>}</p>
                                <InputGroup className={`border rounded-2 ${error.password ? 'mb-2' : 'mb-4'}`}>
                                    <InputGroupText className='bg-transparent border border-0'>
                                        <i class="bi bi-eye-fill"></i>
                                    </InputGroupText>
                                    <FormControl placeholder='Password' type='password' name='password' onChange={handleChange} 
                                    value={login.password}
                                    className='bg-transparent border border-0' />
                                </InputGroup>
                                <p>{error.password && <small className='text-white'>{error.password}</small>}</p>
                                <div className='d-flex align-items-end justify-content-end mb-4'>
                                    <Link to="" className='text-decoration-none'>
                                        <small className='text-white fst-italic fw-bolder'>Forgot password?</small>
                                    </Link>
                                </div>
                                <div className='p-0'>
                                    <Button variant='success' type='submit' className='w-100'>Login</Button>
                                </div>
                        </Form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Login