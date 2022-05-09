import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "./OtpLogIn.css"
import { UserData } from '../../context/userData';
import userApi from '../../constants/axiosUser';
import { Grid, TextField, Button, Typography } from '@mui/material';

function OtpLogIn() {
  const [mobileNumber, setMobileNumber] = useState("")
  const navigate = useNavigate()
  const { setUser } = useContext(UserData)
  const submitMobile = () => {
    setUser({ mobileNumber: mobileNumber, action: "login" })
    userApi.post('/otpLogin', { mobileNumber: mobileNumber }).then(() => {
      navigate('/otp')
    })
  }
  return (
    <div >
      <Grid container className="otpMainGrid">
        <Grid item xs={12} md={6} className="otpChildGrid1" >
          <img className='otpLoginLogo' src="\images\logo\Smiles_Per_Gallon-removebg.png" alt="logo" />

        </Grid >
        <Grid item xs={12} md={6} className='otpChildGrid2' >
          <Grid item xs={12} sm={12}>

            <Grid item xs={12}>

              <Typography variant='h3' className="otpLogInName">Log In</Typography>
            </Grid>

            <Grid item xs={12}>

              <TextField sx={{ mt: 3 }} className='otpLoginInput' id="outlined-basic" label="Mobile Number" variant="outlined" onChange={(e) => setMobileNumber(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <Button sx={{ mt: 3 }} style={{ backgroundColor: "#00ADB5" }} className='otpLoginInputButton' variant="contained" onClick={submitMobile}>send OTP</Button>

            </Grid>
            <Grid>

              <Button sx={{ mt: 1 }} style={{ backgroundColor: "#222831", fontSize: "10px" }} className='otpLoginSignUpButton' variant="contained" >Sign Up?</Button>

            </Grid>

          </Grid>

        </Grid >
      </Grid>


    </div>
  )
}

export default OtpLogIn  