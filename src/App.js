import React from 'react'
import Dashboard from "./Components/Dashboard/Dashboard"
import Classes from './Components/Classes/Classes'
import Products from './Products/Products'
import AboutUs from './Components/AboutUs/AboutUs'
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import Register from './Components/Register/Register'
import Profile from './Components/Profile/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tests from "./Components/Tests/Tests";
import QA from './Components/QA/QA'
// import { AuthProvider } from './AuthContext/AuthContext';
import { AuthProvider } from './AuthContext/AuthContext';
function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/products" element={<Products />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Tests />} />
            <Route path="/qa" element={<QA />} />
          </Routes>

        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App