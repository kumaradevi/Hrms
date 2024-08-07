import React from 'react';
import { Typography, Container, Paper, Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function PasswordResetConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const email = location.state?.email || '';

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(3),
          backgroundColor: '#f8f9fa',
          borderRadius: theme.spacing(2),
        }}
      >
        <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
        <Typography variant="h5" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
          Password Reset Email Sent
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textAlign: 'center' }}>
          If an account exists for {email}, an email will be sent with further instructions to reset your password.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/login')}
          sx={{ mt: 2 }}
        >
          Return to Login
        </Button>
      </Paper>
    </Container>
  );
}

export default PasswordResetConfirmation;