import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function PasswordResetConfirmation() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Password Reset Confirmation
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          An email has been sent with instructions to reset your password.
        </Typography>
      </Box>
    </Container>
  );
}

export default PasswordResetConfirmation;
