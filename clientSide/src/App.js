import { Routes , Route  } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Profile from './components/Profile';
import Home from './components/Home';
import Menu from './components/Menu';
import Restaurent from './components/Restaurent';
import { useState } from 'react';
import Admin from './components/Admin';
function App(props) {
  const [role , setRole] = useState(null)
   return (
      <>
     { console.log(role)}
      <Routes>
        <Route path='/' element={<Login setRole={setRole} />} /> 
        <Route path='/dashboard' element={<Dashboard role={role} /> } /> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/restaurent" element={<Restaurent/>}/>
        <Route path="/admin" element={role?<Admin/>:null}/>
      </Routes>
      </>
  
    );
  }

// export default connect(mapStateToProps)(App);
export default App;
