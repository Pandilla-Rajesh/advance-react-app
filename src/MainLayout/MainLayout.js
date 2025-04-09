import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function MainLayout(){

    return(
        <>
          <main>
            <header>
                 <Header/>   
            </header>  

                <Outlet/>

          </main>
        </>
    )
}

export default MainLayout