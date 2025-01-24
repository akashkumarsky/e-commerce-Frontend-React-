import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModel({ open,handleClose }) {
  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
    >
      <Box className="rounded-md" sx={style}>

        {/* <LoginForm /> */}

        <RegisterForm />

      </Box>
    </Modal>



  );
}