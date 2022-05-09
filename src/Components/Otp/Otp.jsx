import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid, TextField, Button, Typography } from '@mui/material';
import userApi from '../../constants/axiosUser';

import { UserData } from '../../context/userData';
function Otp() {
    const navigate = useNavigate()
    const [counter, setCounter] = useState(30)
    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState("")
    const { user } = useContext(UserData)
    // const {otpLog}=useContext(otpLogIn)
    useEffect(() => {

        counter > 0 && setTimeout(() => {

            setCounter(counter - 1)
        }
            , 1000
        )
    }
        , [counter, otpError])

    const submitOtp = () => {

        user.otp = otp
        userApi.post('/verifyOTP', user).then((response) => {
            console.log(response.data);
            const userToken = response.data.userToken
            console.log(userToken);
            localStorage.setItem("userData", JSON.stringify(userToken))
            navigate('/home')
        }).catch((err) => {
            console.log("Invalid OTP");
            setOtpError("Invalid OTP");
        })

    }
    const resendOtp = () => {
        if (user.action === "signup") {

            userApi.post('/signup', user).then((response) => {
                const Number = response.data.mobileNumber
                console.log(response.data)
                console.log("hello")
                setCounter(30)

            })
        } else {
            userApi.post('/otpLogin', { mobileNumber: user.mobileNumber }).then(() => {
                console.log("resend success");
                setCounter(30)
            })
        }
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

                            <Typography variant='h4' className="otpLogInName">{user.action === "login" ? "Log In" : "Sign Up"}</Typography>
                        </Grid>
                        <p style={{ color: "red", fontSize: 14 }}>{otpError}</p>
                        <Grid item xs={12}>

                            <TextField sx={{ mt: 3 }} className='otpLoginInput' id="outlined-basic" label="Enter OTP" variant="outlined" onChange={(e) => setOtp(e.target.value)} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button sx={{ mt: 3 }} style={{ backgroundColor: "#00ADB5" }} className='otpLoginInputButton' variant="contained" onClick={submitOtp}>verify &{user.action === "login" ? "Log In" : "Sign Up"}</Button>

                        </Grid>
                        <Grid>
                            {counter > 0 ? <p style={{ float: "left" }}>Resend OTP in: 00:{counter < 10 ? "0" + counter : counter}s</p> : ""}
                            {counter === 0 ? <p style={{ float: "left" }} onClick={resendOtp}><u>Resend  OTP</u></p> : ""}


                        </Grid>

                    </Grid>

                </Grid >
            </Grid>


        </div>
    )
}

export default Otp