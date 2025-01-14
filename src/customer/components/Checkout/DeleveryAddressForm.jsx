import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import AddressCart from '../Addresscart/AddressCart';

const DeleveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log("Address Submitted:", Object.fromEntries(data.entries()));
  };

  return (
    <div>
      <Typography variant="h5" sx={{ mt: 4, mb: 0, textAlign: 'center' }}>
        Delivery Address
      </Typography>

      <Grid container spacing={4}>
        {/* Left Column: Address Selection */}

        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md "
          style={{ overflowY: 'auto', maxHeight: '500px' }}
        >

          <div className="p-5 border-b cursor-pointer ">

            <AddressCart />
            <Button
                    sx={{
                      margin: '10px auto 0',
                      display: 'block',
                      textAlign: 'center',
                      color: 'white', // Makes button text white
                    }}
                    variant="contained"
                    size="large"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
          </div>
        </Grid>

        {/* Right Column: Address Form */}
        <Grid item xs={12} lg={7}>
          <Box
            className="border rounded-s-md shadow-md p-5 mt-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900"

          >
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
                    sx={{ input: { color: 'white' } }} // Sets input text color to white
                    InputLabelProps={{
                      style: { color: 'white' }, // Sets label text color to white
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="family-name"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="street-address"
                    sx={{
                      '& .MuiInputBase-input': {
                        color: 'white', // This applies white color to the input text
                      },
                    }}
                    multiline
                    rows={4}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />

                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="address-level2"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Region"
                    fullWidth
                    autoComplete="address-level1"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal Code"
                    fullWidth
                    autoComplete="postal-code"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete="tel"
                    sx={{ input: { color: 'white' } }}
                    InputLabelProps={{
                      style: { color: 'white' },
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: '10px auto 0',
                  display: 'block',
                  textAlign: 'center',
                  color: 'white', // Makes button text white
                }}
                variant="contained"
                size="large"
                type="submit"
              >
                Deliver Here
              </Button>
            </form>
          </Box>
        </Grid>

      </Grid>
    </div>
  );
};

export default DeleveryAddressForm;
