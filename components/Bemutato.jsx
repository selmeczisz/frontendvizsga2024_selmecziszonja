import React from 'react'
import { Navbar } from '../components/Navbar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {Fooldal} from '../components/Fooldal'
import{Scifi} from '../components/Scifi'
import {Humor} from '../components/Humor'
export const Bemutato = () => {
  return (
    <div>
            <Navbar/>
            <BrowserRouter>
     <Routes>
                <Route path='/' element={<Fooldal/>}/>
                <Route path='/scifi' element={<Scifi />}/>
                <Route path='/humor' element={<Humor />}/>
        </Routes></BrowserRouter>
    </div>
  )
}
