import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
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

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
    >
     <Box className="rounded-md" sx={style}>
        {isLogin ? (
          <LoginForm toggleForm={toggleForm} handleClose={handleClose} />
        ) : (
          <RegisterForm toggleForm={toggleForm} />
        )}
      </Box>
    </Modal>



  );
}