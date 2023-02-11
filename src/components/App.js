import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import AlbumSongs from "../Pages/AlbumSongs";

function App(){
  return (
    <Container 
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" 
                element={
                  <PrivateRoute>
                    <Home/>
                  </PrivateRoute>
                }/>
              <Route path="/album-songs" 
                element={
                  <PrivateRoute>
                    <AlbumSongs/>
                  </PrivateRoute>
                }/>
              <Route path="/search" 
                element={
                  <PrivateRoute>
                    <Search/>
                  </PrivateRoute>
                }/>
              <Route path="/dashboard" 
                element={
                  <PrivateRoute>
                    <Dashboard/>
                  </PrivateRoute>
                }/>
              <Route path="/update-profile" 
                element={
                <PrivateRoute>
                  <UpdateProfile/>
                </PrivateRoute>
              }/>
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
    
  )
}
export default App