import { Alert, Button, Grid, Snackbar, TextField } from '@mui/material'
import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div>

      <React.Fragment className=" shadow-lg ">
        <form className="w-full" >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
                autoComplete="given-name"
                type="password"
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
            <Button onClick={() => Navigate("/register")} className="ml-5" size="small">
              Register
            </Button>
          </div>
        </div>
        
      </React.Fragment>

    </div>
  )
}

export default LoginForm