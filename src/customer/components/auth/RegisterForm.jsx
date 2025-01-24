import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const RegisterForm = ({toggleForm}) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
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
      console.log('Form submitted:', userData);
      // Here you would typically make an API call to your backend
      // Example:
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });
      
      // Clear form after successful submission
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: ''
      });
      
      // Optionally switch to login form after successful registration
      // toggleForm();
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              value={userData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
              value={userData.lastName}
              onChange={handleChange}
            />
          </Grid>
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Role"
                name="role"
                value={userData.role}
                onChange={handleChange}
              >
                <MenuItem value={"ROLE_ADMIN"}>Admin</MenuItem>
                <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
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
              sx={{padding:".8rem 0"}}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center ">
          <p className="m-0 p-0">if you have already account ?</p>
          <Button onClick={toggleForm} className="ml-5" size="small">
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm