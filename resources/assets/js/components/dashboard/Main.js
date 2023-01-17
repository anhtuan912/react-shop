import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import NewProduct from './pages/NewProduct'

const Main = () => (
    <main>
        <Routes>
            <Route exact path='/dashboard/' component={Home}/>
            <Route exact path='/dashboard/products' component={Products}/>
            <Route exact path='/dashboard/new-product' component={NewProduct}/>
        </Routes>
    </main>
)

export default Main
