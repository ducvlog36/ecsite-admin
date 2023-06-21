/* eslint-disable */
import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  
  render() {
    const isAuthenticated = localStorage.getItem('user') !== null; // Kiểm tra thông tin người dùng trong localStorage

    return (
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
              <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/404" element={<Page404 />} />
              <Route path="/500" element={<Page500 />} />
              <Route path="*" element={isAuthenticated ? <DefaultLayout /> : <Navigate to="/login" />} />
          </Routes>
      </Suspense>
  </BrowserRouter>
    )
  }
}

export default App
