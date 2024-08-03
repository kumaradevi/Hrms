import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import CustomTable from '../../components/common/Table';

function DepartmentManagement() {
  const headers = ['ID', 'Name', 'Manager', 'Employee Count', 'Actions'];
  const data = [
    {
      id: 1,
      name: 'IT',
      manager: 'John Doe',
      employeeCount: 15,
      actions: 'Edit',
    },
    {
      id: 2,
      name: 'HR',
      manager: 'Jane Smith',
      employeeCount: 8,
      actions: 'Edit',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Department Management
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add New Department
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default DepartmentManagement;
