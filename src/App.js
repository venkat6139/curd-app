import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Add from './components/Add/add'
import Edit from './components/Edit'
import { ProtectedRoute } from './Services/ProtectedRoute'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<ProtectedRoute/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Add/>}/>
      <Route path='/edit' element={<Edit/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App