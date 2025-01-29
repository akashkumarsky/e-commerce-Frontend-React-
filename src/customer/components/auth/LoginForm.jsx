import { Alert, Button, Grid, Snackbar, TextField, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from '../../../state/Auth/Action';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginForm = ({ toggleForm, handleClose }) => {
  const dispatch = useDispatch();
  const { loading, error, jwt, user } = useSelector((state) => state.auth);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    if (error) {
      setLoginError(error);
      setOpenSnackbar(true);
    }
  }, [error]);

  useEffect(() => {
    if (jwt) {
      setLoginSuccess(true);
      setOpenSnackbar(true);
      setTimeout(() => {
        handleClose(); // Close the form/modal
      }, 2000);
      dispatch({ type: 'CLEAR_AUTH_ERROR' }); // Clear error state
    }
  }, [jwt, handleClose, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError(null); // Clear previous error
    try {
      const response = await dispatch(login(userData));
      console.log('Login Response:', response); // Debugging

      if (response?.payload?.user?.firstName) {
        setLoginSuccess(true);
        setOpenSnackbar(true);
        setTimeout(() => {
          handleClose(); // Close the form/modal
        }, 2000);
      } else {
        setLoginError('Login failed: Email or password incorrect');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Login Error:', error);
      setLoginError(error.message || 'An unexpected error occurred. Please try again.');
      setOpenSnackbar(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
       <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={loginSuccess ? 'success' : 'error'}>
          {loginSuccess ? 'Login successful!' : loginError}
        </Alert>
      </Snackbar>
      <React.Fragment>
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
                type={showPassword ? 'text' : 'password'}
                value={userData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
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
            <p className="m-0 p-0">Don't have an account?</p>
            <Button onClick={toggleForm} className="ml-5" size="small">
              Register
            </Button>
          </div>
        </div>
      </React.Fragment>

     
    </div>
  );
};

export default LoginForm;