import React from 'react';
import { Typography, Container, TextField, Button, Box } from '@mui/material';

function LeaveRequest() {
  const [formData, setFormData] = React.useState({
    startDate: '',
    endDate: '',
    leaveType: '',
    reason: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Leave request:', formData);
    // Implement leave request logic here
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography component="h1" variant="h5" gutterBottom>
        Leave Request
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="startDate"
          label="Start Date"
          name="startDate"
          type="date"
          value={formData.startDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="endDate"
          label="End Date"
          name="endDate"
          type="date"
          value={formData.endDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="leaveType"
          label="Leave Type"
          name="leaveType"
          value={formData.leaveType}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="reason"
          label="Reason"
          name="reason"
          multiline
          rows={4}
          value={formData.reason}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default LeaveRequest;