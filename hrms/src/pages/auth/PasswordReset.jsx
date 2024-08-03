import React from 'react';
import { Typography, Container } from '@mui/material';
import Form from '../../components/common/Form';

function PasswordReset() {
  const fields = [
    { name: 'email', label: 'Email Address', type: 'email' },
  ];

  const handleSubmit = (data) => {
    console.log('Password reset request:', data);
    // Implement password reset logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Reset Password
      </Typography>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
}

export default PasswordReset;