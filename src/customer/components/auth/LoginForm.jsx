import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, login } from '../../../state/Auth/Action';

const LoginForm = ({toggleForm, handleClose}) => {
  const dispatch = useDispatch();
  const { loading, error, jwt, user } = useSelector((state) => state.auth);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

    useEffect(() => {
      if(jwt) {
        dispatch(getUser(jwt));
      }
    }, [jwt, dispatch]);

  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoginError(null); // Clear previous error
      try {
        const response = await dispatch(login(userData)); // Dispatch login action
    
        // Check if the response contains a user with firstName
        if (response?.user?.firstName!==null) {
          setLoginSuccess(true);
          
          setTimeout(() => {
            handleClose(); // Close the form/modal
          }, 2000);
        } else  {
          // User's firstName not found, show error
          setLoginSuccess(false);
          setLoginError('Login failed: Email or password incorrect');
        
        }
      } catch (error) {
        // Catch any unexpected errors
        setLoginSuccess(false);
        setLoginError('An unexpected error occurred. Please try again.');
        
      }
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
      <React.Fragment >
        <form className="w-full" onSubmit={handleSubmit}>
        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}
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