import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import CustomTable from '../../components/common/Table';

function EmployeeDirectory() {
  const headers = ['ID', 'Name', 'Department', 'Position', 'Email', 'Actions'];
  const data = [
    { id: 1, name: 'John Doe', department: 'IT', position: 'Developer', email: 'john@example.com', actions: 'Edit' },
    { id: 2, name: 'Jane Smith', department: 'HR', position: 'Manager', email: 'jane@example.com', actions: 'Edit' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Employee Directory
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Employee
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default EmployeeDirectory;