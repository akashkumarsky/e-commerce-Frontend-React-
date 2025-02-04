import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddressCart from '../Addresscart/AddressCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../state/Order/Action';

const DeliveryAddressForm = ({ handleNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    dispatch({ type: "SET_SELECTED_ADDRESS", payload: address });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      mobile: data.get("phoneNumber"),
    };
    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
    // handleNext();
  };

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address:item, jwt, navigate }));
    handleNext();
  };


 
  

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={5}>
        <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll">
          {auth.user?.addresses.map((item) => (
            <div key={item.id} className="p-5 py-7 border-b cursor-pointer">
              <div onClick={() => handleSelectAddress(item)}>
                <AddressCart address={item} />
              </div>
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => handleCreateOrder(item)}
                >
                  Deliver Here
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} lg={7}>
        <Box className="border rounded-md shadow-md p-5">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {[
                { id: "firstName", label: "First Name", autoComplete: "given-name" },
                { id: "lastName", label: "Last Name", autoComplete: "family-name" },
                { id: "address", label: "Address", autoComplete: "shipping address", multiline: true, rows: 4 },
                { id: "city", label: "City", autoComplete: "shipping address-level2" },
                { id: "state", label: "State/Province/Region" },
                { id: "zip", label: "Zip / Postal code", autoComplete: "shipping postal-code" },
                { id: "phoneNumber", label: "Phone Number", autoComplete: "tel" }
              ].map(({ id, label, autoComplete, multiline, rows }) => (
                <Grid item xs={12} sm={id === "address" ? 12 : 6} key={id}>
                  <TextField
                    required
                    id={id}
                    name={id}
                    label={label}
                    fullWidth
                    autoComplete={autoComplete}
                    multiline={multiline}
                    rows={rows}
                    sx={{
                      '& .MuiInputLabel-root': { color: 'white' },
                      '& .MuiInputBase-input': { color: 'white' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' }
                    }}
                  />
                </Grid>
              ))}
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{ padding: ".9rem 1.5rem" }} size="large" type="submit" variant="contained" color="primary">
                  Save Address
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeliveryAddressForm;
