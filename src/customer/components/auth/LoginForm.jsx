import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from '../../../state/Auth/Action';

  
    


const LoginForm = ({toggleForm , handleClose}) => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store);
  const { loading, error } = useSelector((state) => state);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  
    useEffect(() => {
      if(auth.jwt) {
        dispatch(getUser(auth.jwt));
      }
    }, [auth.jwt, dispatch]);

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(login(userData));
      setOpenSnackbar(true);
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={2000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? "Login failed" : "Login successful!"}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default LoginForm