import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';

function EmployeeProfile() {
  const employee = {
    name: 'John Doe',
    position: 'Software Developer',
    department: 'IT',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    hireDate: '2022-01-01',
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Employee Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Name:</Typography>
            <Typography variant="body1">{employee.name}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Position:</Typography>
            <Typography variant="body1">{employee.position}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Department:</Typography>
            <Typography variant="body1">{employee.department}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Email:</Typography>
            <Typography variant="body1">{employee.email}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Phone:</Typography>
            <Typography variant="body1">{employee.phone}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="subtitle1">Hire Date:</Typography>
            <Typography variant="body1">{employee.hireDate}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default EmployeeProfile;