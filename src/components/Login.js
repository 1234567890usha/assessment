import React,{ useState } from 'react'
import { Grid, TextField,Button } from '@mui/material'
import image from '../assets/Group 24.svg'
import image2 from '../assets/Rectangle 2.png'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import Home from './Home';
const Login = ({ formData }) => {
    const { username, password } = formData;
    
    const[status,setStatus]=useState(false);
    const [data,setData]=useState({
        username:"",
        password:"",
      })
      const handleInputChange = (e)=>{
        setData({ ...data, [e.target.id]: e.target.value });
      }
      const handleLogin = () => {
        // Compare username and password from formData and local state
        if (formData.username === data.username && formData.password === data.password) {
          // Perform desired action, such as redirecting
         console.log("success");
        setStatus(true);
            
        } else {
          // Handle incorrect credentials
          alert('Invalid username or password');
        }
      };
  return (
    <div className='content'>
        <Grid container>
        <div className="grid-wrapper">
            <div className='first-grid-wrapper'>
            <Grid item lg={6} xs={12}  md={6}>
                <Grid container className='wrap'>
                    <Grid item lg={8}>
                <h1>Sign in to</h1>
                <h4>Lorem Ipsum is simply</h4>
                <p>If you don't have an account register</p>
                <p>You can <Link to='/Signup' style={{ color: '#4D47C3', textDecoration: 'none' }}>register here!</Link></p>
                </Grid>
                <Grid item lg={4} className="sub-wrap">
                    <div></div>
                    <img src={image2}alt="logo" />
                </Grid>
                </Grid>
            </Grid>
            </div>
           <div className='second-grid-item'>
            <Grid item lg={6} xs={12} md={6}>
        <Grid container spacing={2} justifyContent="flex-start">
            <Grid item><h3>Sign in</h3></Grid>
          <Grid item xs={12} lg={12} >
            <TextField 
              id='username'
              label="Enter Email or Username"
              variant='outlined'
              title='Username'
              placeholder='Enter Email or Username'
              InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
              fullWidth
              onChange={ handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              id='password'
              label="Password"
              variant='outlined'
              title='Password'
              placeholder='Password'
              type="password"
              fullWidth
              InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
              onChange={ handleInputChange}
            />
          </Grid>
          <Grid item>
          <div className='forgot'>
    <div>
    </div>
    <div>
        Forgot password?
    </div>
    </div>
    </Grid>
    
        </Grid>
        <Grid container spacing={2} justifyContent="center">
        <Grid item lg={12} xs={12}>
    <Button onClick={handleLogin} variant="contained" style={{ backgroundColor: '#4D47C3' }} fullWidth><Link style={{ color: 'white', textDecoration: 'none' }} to="/Home">Login</Link></Button>
    </Grid>
    <Grid item lg={12} xs={12}>
    or continue with 
    </Grid>
    <Grid item lg={12} xs={12}>
    <img src={image}alt='iphone'/>
    </Grid>
        </Grid>
    </Grid>
    </div>
    </div>
        </Grid>
        {status && <Home />}
    </div>
  )
}

export default Login