import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userApi from '../../constants/axiosUser';
import './Login.css';

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [logError, setLogError] = useState("")

  const submitLogIn = () => {
    const userData = {
      email,
      password
    }
    userApi.post('/login', userData).then((response) => {
      navigate('/home')
    }).catch((err) => {
      setLogError("Invalid username or password")
    })

  }
  return (
    <div >
      <Grid container className="mainGrid">
        <Grid item xs={12} md={6} className="childGrid1" >
          <img className='loginLogo' src="\images\logo\Smiles_Per_Gallon-removebg.png" alt="logo" />

        </Grid >
        <Grid item xs={12} md={6} className='childGrid2' >
          <Grid item xs={12} sm={12}>

            <Grid item xs={12}>

              <Typography variant='h3' className="logInName">Log In</Typography>
            </Grid>
            <p style={{ color: "red", fontSize: 14 }}>{logError}</p>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='loginInput' id="outlined-basic" label="Email Id" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='loginInput' id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button sx={{ mt: 3 }} style={{ backgroundColor: "#00ADB5" }} className='loginInputButton' variant="contained" onClick={submitLogIn}>Log In</Button>
            </Grid>
            <Grid>
              <Button sx={{ mt: 1 }} style={{ backgroundColor: "#222831", fontSize: "10px" }} className='loginOtpButton' variant="contained">Log In with OTP?</Button>
              <Button sx={{ mt: 1 }} style={{ backgroundColor: "#222831", fontSize: "10px" }} className='loginSignUpButton' variant="contained" onClick={() => navigate('/signup')}>Sign Up?</Button>

            </Grid>

          </Grid>

        </Grid >
      </Grid>


    </div>
  )
}

export default Login