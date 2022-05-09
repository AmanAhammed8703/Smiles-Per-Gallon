import React from 'react'
import './Base.css'
import {Box, AppBar,Toolbar,IconButton,Typography,Button,Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Base() {
  return (
    <div>
        <Box sx={{flexGrow:1}}>
        <AppBar position="static" >
        <Toolbar className='appbar' >
          <img   className='appbarlogo' src="\images\logo\blacklogo cropped.png" alt="" />
          
          <Typography sx={{flexGrow:1}}>
         
          </Typography>
          <Typography sx={{mt:0.7}} style={{padding:10,fontSize:13}}>
            LOG IN
          </Typography>

          <Button sx={{mt:0.7}} style={{backgroundColor:"#00ADB5"}} variant="contained">Sign Up</Button>
          
        
         
        </Toolbar>
      </AppBar>
      </Box>
      <div className='banner'>
          <div className='dialogue'>

         <h1 style={{margin:0}}>EVERY CAR GUY HAVE <br/>SOMETHING TO SHARE</h1>
          </div>
      </div>
      <div className='container'>

      <Grid container className='sub-banner'>
        <Grid item className='div11' xs={12} sm={6} ms={6}>
        <img src="" alt="" />
        </Grid>
        <Grid item className='div12' xs={12} sm={6} md={6}>

        </Grid>
      </Grid>
      </div>


    </div>
  )
}

export default Base