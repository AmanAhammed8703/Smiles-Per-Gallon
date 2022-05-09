import React, { useState, createContext, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import userApi from '../../constants/axiosUser';
import './SignUp.css'
import { Grid, TextField, Button, Typography } from '@mui/material';
import { UserData } from '../../context/userData';
function SignUp() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const { setUser } = useContext(UserData)
  const [existError, setExistError] = useState("")


  useEffect(() => {

  }, [existError])



  const submitSignUp = () => {
    const signUpData = {
      userName,
      email,
      mobileNumber,
      password,
      confirmPassword,
      action: "signup"

    }

    setUser(signUpData)
    userApi.post('/signup', signUpData).then((response) => {
      const Number = response.data.mobileNumber
      console.log(response.data)
      console.log("hello")
      navigate('/otp')
    }).catch((err) => {
      console.log("User Exist");
      setExistError("User exists in same email id or mobile number!")
    })
  }


  return (

    <div>
      <Grid container className="signUpMainGrid" >
        <Grid item xs={12} md={6} className="signUpChildGrid1" >
          <img className='signUpLogo' src="\images\logo\Smiles_Per_Gallon-removebg.png" alt="logo" />

        </Grid >
        <Grid item xs={12} md={6} className='signUpChildGrid2' >
          <Grid item xs={12} sm={12}>

            <Grid item xs={12}>

              <Typography variant='h4' className="signUpName">Sign Up</Typography>
            </Grid>
            <Grid item xs={12}>

              <p style={{ color: "red", fontSize: 14 }}>{existError}</p>
              <TextField sx={{ mt: 3 }} className='signUpInput' id="outlined-basic" label="User Name" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='signUpInput' id="outlined-basic" label="Email Id" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='signUpInput' id="outlined-basic" label="Mobile Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='signUpInput' id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='signUpInput' id="outlined-basic" label="Confirm Password" variant="outlined" onChange={(e) => setConfirmPassword(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button sx={{ mt: 3 }} style={{ backgroundColor: "#00ADB5" }} className='signUpInputButton' variant="contained" onClick={submitSignUp}>Send Otp</Button>

            </Grid>
            <Grid>

              <Button sx={{ mt: 1 }} style={{ backgroundColor: "#222831", fontSize: "10px" }} className='signUpLoginButton' variant="contained" onClick={() => navigate('/login')}>Log In?</Button>

            </Grid>

          </Grid>

        </Grid >
      </Grid>

    </div>


  )
}

export default SignUp