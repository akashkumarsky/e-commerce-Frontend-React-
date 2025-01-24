import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material'
import React, { useState } from 'react'

const LoginForm = ({toggleForm}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Login form submitted:', userData);
      // Here you would typically make an API call to your backend
      // Example:
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });
      
      // Clear form after successful submission
      setUserData({
        email: '',
        password: ''
      });
      
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <React.Fragment className="shadow-lg">
        <form className="w-full" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="current-password"
                type="password"
                value={userData.password}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <div className="flex justify-center flex-col items-center">
          <div className="py-3 flex items-center">
            <p className="m-0 p-0">don't have account ?</p>
            <Button onClick={toggleForm} className="ml-5" size="small">
              Register
            </Button>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default LoginForm