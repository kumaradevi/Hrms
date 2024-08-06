import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Alert, Paper, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockResetIcon from '@mui/icons-material/LockReset';

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    
    // Simulating password reset functionality
    if (email) {
      // In a real implementation, you would call your API here
      setMessage('If an account exists for ' + email + ', an email will be sent with further instructions.');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setError('Please enter a valid email address.');
    }
  };

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
        <LockResetIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'center',
            mb: 2,
          }}
        >
          Reset Password
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, textAlign: 'center' }}>
          Enter your email address and we'll send you instructions to reset your password.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'primary.main' },
                '&:hover fieldset': { borderColor: 'primary.dark' },
                '&.Mui-focused fieldset': { borderColor: 'primary.dark' },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, borderRadius: 2 }}
          >
            Reset Password
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button onClick={() => navigate('/login')} variant="text">
              Back to Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default PasswordReset;