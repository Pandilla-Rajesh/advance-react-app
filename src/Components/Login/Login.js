import React, { useEffect } from 'react'
import TimeStart from '../TimeStart/TimeStart'
import ReUseCounter from '../Counter/Counter'
import AboutReact from '../AboutReact/AboutReact'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'
import { Link } from 'react-router-dom'

const Login = ()=>{

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
                        <Form className='info-form'>
                                <InputGroup className='mb-4 border rounded-2'>
                                    <InputGroupText className='bg-transparent border border-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                                    class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    </InputGroupText>
                                    <FormControl placeholder='Username or E-mail' className='bg-transparent border border-0' />
                                </InputGroup>
                                <InputGroup className='mb-1 border rounded-2'>
                                    <InputGroupText className='bg-transparent border border-0 p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                    </svg>
                                    </InputGroupText>
                                    <FormControl placeholder='Password' className='bg-transparent border border-0' />
                                </InputGroup>
                                <div className='d-flex align-items-end justify-content-end mb-4'>
                                    <Link to="" className='text-decoration-none'>
                                        <small className='text-white fst-italic fw-bolder'>Forgot password?</small>
                                    </Link>
                                </div>
                                <div className='p-0'>
                                    <Button variant='success' className='w-100'>Login</Button>
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