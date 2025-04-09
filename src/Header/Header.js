import React, { useEffect, useState } from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () =>{

    const [issticky, setIsSticky] = useState(false)

    useEffect(()=>{
        
        const scrollHandle=()=>{
            setIsSticky(window.scrollY>50)
        }

        window.addEventListener('scroll', scrollHandle)

        return()=>{
            window.removeEventListener('scroll', scrollHandle)
        }
    }, [])

    return(
        <section className='info-header'>
            <Navbar expand='lg' className={`bg-dark fixed-top ${issticky ? 'scrolled' : ''}`}>
                <Container>
                    <a href="#" className='text-decoration-none text-white fw-bolder display-3'>RP</a>
                    <button type='button' className='navbar-toggler bg-white' data-bs-toggle="collapse"
                    data-bs-target="#navMenu" aria-expanded="false">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse info-nav' id='navMenu'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                               <Link className='nav-link' to="/home">Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/apimodals">API Calls</Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </Navbar>
        </section>
    )
}
export default Header