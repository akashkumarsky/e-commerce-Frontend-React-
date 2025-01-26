import { Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, register } from '../../../state/Auth/Action'

const RegisterForm = ({toggleForm}) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const auth = useSelector((store) => store.auth);
  const [openSnackbar, setOpenSnackbar] = useState(false);


  // Fix useEffect syntax
  useEffect(() => {
    if(auth.jwt) {
      dispatch(getUser(auth.jwt));
    }
  }, [auth.jwt, dispatch]);

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
      await dispatch(register(userData));
      setOpenSnackbar(true);
      setUserData({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: ''
      });
      setTimeout(() => {
        toggleForm();
      }, 2000);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={8000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Registration successful! Please login.
        </Alert>
      </Snackbar>
    </div>
  )
}

export default RegisterForm