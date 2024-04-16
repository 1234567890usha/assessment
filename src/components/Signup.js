import React,{useState} from 'react'
import { Grid, TextField,Button } from '@mui/material'
import image from '../assets/Group 24.svg'
import image2 from '../assets/Rectangle 2.png'
import './Login.css';
import { Link } from 'react-router-dom';

const Signup = ({formData, onFormChange}) => {
    
  return (
    <div className='content'>
    <Grid container>
    <div className="grid-wrapper">
        <div className='first-grid-wrapper'>
        <Grid item lg={6} xs={12}  md={6}>
            <Grid container className='wrap'>
                <Grid item lg={8}>
            <h1>Sign  Up     to</h1>
            <h4>Lorem Ipsum is simply</h4>
            <p>If you already have an account </p>
            <p>You can <Link to='/' style={{ color: '#4D47C3', textDecoration: 'none' }}>Login here!</Link></p>
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
    <Grid container spacing={1} justifyContent="flex-start">
        <Grid item><h3>Sign Up</h3></Grid>
      <Grid item xs={12} lg={12} >
        <TextField 
          
          label="Enter Email"
          variant='outlined'
          title='Username'
          placeholder='Enter Email'
          InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} lg={12} >
        <TextField 
          id='username'
          label="Create Username"
          variant='outlined'
          title='Username'
          placeholder='Create Username'
          InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
          fullWidth
          value={formData.username} onChange={(e) => onFormChange('username',e.target.value)}
        />
      </Grid>
      <Grid item xs={12} lg={12} >
        <TextField 
          
          label="Contact number"
          variant='outlined'
          title='number'
          placeholder='contact number'
          InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
          fullWidth
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
          value={formData.password} onChange={(e) => onFormChange('password',e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField 
          label="Confirm password"
          variant='outlined'
          title='Password'
          placeholder=' Confirm Password'
         
          fullWidth
          InputProps={{ style: { backgroundColor: '#F0EFFF' } }}
        />
      </Grid>
    </Grid>
    <Grid container spacing={2} justifyContent="center">
    <Grid item lg={12} xs={12}>
    <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" style={{ backgroundColor: '#4D47C3' }} fullWidth>Register</Button>
                  </Link>
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
</div>
  )
}

export default Signup