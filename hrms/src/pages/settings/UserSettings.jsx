import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';

function UserSettings() {
  const [formData, setFormData] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User settings update:', formData);
    // Implement user settings update logic here
  };

  return (
    <Container component="main" maxWidth="xs" >
      <Typography component="h1" variant="h5">
        User Settings
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="currentPassword"
          label="Current Password"
          type="password"
          id="currentPassword"
          value={formData.currentPassword}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="newPassword"
          label="New Password"
          type="password"
          id="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmNewPassword"
          label="Confirm New Password"
          type="password"
          id="confirmNewPassword"
          value={formData.confirmNewPassword}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update Settings
        </Button>
      </Box>
    </Container>
  );
}

export default UserSettings;
