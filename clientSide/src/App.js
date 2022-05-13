import { Routes , Route  } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Home from './components/Home';
import Menu from './components/Menu';
import Restaurent from './components/Restaurent';
import { useState } from 'react';

function App(props) {
   return (
      <>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='/dashboard' element={<Dashboard /> } /> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/restaurent" element={<Restaurent/>}/>
        <Route path="/admin" element={<Restaurent/>}/>
      </Routes>
      </>
  
    );
  }

// export default connect(mapStateToProps)(App);
export default App;
