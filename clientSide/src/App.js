import { Routes , Route  } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import { connect } from 'react-redux';
import { useState } from 'react';
// const mapStateToProps =(state)=>{
//   console.log(state.userLogin)
// return{
//   userLogin:state.userLogin
// }
// }

function App(props) {
  const [user , setLoginUser] = useState({})
  const [signupUser , setSignupUser] = useState({})
    return (
      <>
      <Routes>
        <Route path='/' element={user && user._id ?<Dashboard/> : <Login setLoginUser={setLoginUser} />} /> 
        <Route path="/signup" element={signupUser && signupUser._id ? <Login/> : <Signup setSignupUser={setSignupUser} />}/>
      </Routes>
      </>
  
    );
  }

// export default connect(mapStateToProps)(App);
export default App;
