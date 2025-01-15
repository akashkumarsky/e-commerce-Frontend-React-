import React from 'react';
import { Box, Button, Typography, Card, CardContent, CardActions, Divider } from '@mui/material';

const AddressCart = () => {
  const addresses = [
    {
      id: 1,
      name: 'Akash kumar',
      addressLine1: '2nd main road up 2 cross',
      addressLine2: 'Sri sai teja Man PG',
      city: 'Bengaluru',
      state: 'karnataka',
      zip: '56037',
      phone: '7004972052',
    }
  ];

  const handleSelect = (id) => {
    console.log(`Address with ID ${id} selected.`);
  };

  const handleEdit = (id) => {
    console.log(`Edit address with ID ${id}`);
  };

  return (
    <div className=''>
            <Box>
                
      {addresses.map((address) => (
        
        <Card key={address.id} sx={{ mb: 2  }}>
            
          <CardContent className='bg-gray-900 text-white border-2'>
            <Typography variant="h6">{address.name}</Typography>
            <Typography variant="body2">
              {address.addressLine1}
              {address.addressLine2 && `, ${address.addressLine2}`}
            </Typography>
            <Typography variant="body2">
              {address.city}, {address.state} {address.zip}
            </Typography>
            <Typography variant="body2">Phone: {address.phone}</Typography>
          </CardContent>
          
  

        </Card>
      ))}
    </Box>
    </div>

  );
};

export default AddressCart;
