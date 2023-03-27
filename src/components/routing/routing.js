import React from 'react'
import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'
import { aboutus, home } from './routingConsts'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
const Routing = () => {
    return (
        <Routes>
            <Route path={home} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={aboutus} element={<AboutUs />} />
            </Route>
        </Routes>
    )
}

export default Routing
