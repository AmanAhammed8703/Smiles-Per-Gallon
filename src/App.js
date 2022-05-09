
import './App.css';
import LoginPage from './Pages/Login/LoginPage';
import SignUpPage from './Pages/SignUp/SignUpPage';
import OtpLogInPage from './Pages/OtpLogIn/OtpLogInPage';
import OtpPage from './Pages/otp/OtpPage';
import BasePage from './Pages/BaseView/BasePage';
import HomePage from './Pages/Home/HomePage';
import { UserData } from './context/userData';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  
  return (
    
    <div className="App">
      <UserData.Provider value={{user,setUser}} >
     
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/otplogin" element={<OtpLogInPage/>}/>
        <Route path="/otp" element={<OtpPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/" element={<BasePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        
        
      </Routes>
      </BrowserRouter>
      
     
    </UserData.Provider>
    </div>
  );
}

export default App;
