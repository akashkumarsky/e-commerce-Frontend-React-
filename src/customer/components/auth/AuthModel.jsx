import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LoginUserForm from './LoginForm';
import RegisterUserForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


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

export default function AuthModel({ handleClose, open }) {

  const location = useLocation();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (auth.user) handleClose();
  }, [auth.user]);

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
    >
      <Box className="rounded-md" sx={style}>
        {location.pathname === "/login" ? (
          <LoginUserForm />
        ) : (
          <RegisterUserForm />
        )}
      </Box>

    </Modal>



  );
}