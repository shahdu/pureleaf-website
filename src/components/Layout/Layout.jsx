import React from 'react'

import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

export const Layout = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
