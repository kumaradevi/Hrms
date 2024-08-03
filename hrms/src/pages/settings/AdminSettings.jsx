import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  Switch,
  FormControlLabel,
} from '@mui/material';

function AdminSettings() {
  const [formData, setFormData] = useState({
    companyName: '',
    adminEmail: '',
    allowRegistration: true,
    enableNotifications: true,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin settings update:', formData);
    // Implement admin settings update logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Admin Settings
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="companyName"
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="adminEmail"
          label="Admin Email"
          name="adminEmail"
          autoComplete="email"
          value={formData.adminEmail}
          onChange={handleChange}
        />
        <FormControlLabel
          control={
            <Switch
              checked={formData.allowRegistration}
              onChange={handleChange}
              name="allowRegistration"
            />
          }
          label="Allow User Registration"
        />
        <FormControlLabel
          control={
            <Switch
              checked={formData.enableNotifications}
              onChange={handleChange}
              name="enableNotifications"
            />
          }
          label="Enable Email Notifications"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update Admin Settings
        </Button>
      </Box>
    </Container>
  );
}

export default AdminSettings;
