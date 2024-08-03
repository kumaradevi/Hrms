import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CustomTable from '../../components/common/Table';

function EmployeeReports() {
  const headers = ['Employee ID', 'Name', 'Department', 'Position', 'Hire Date', 'Performance Rating'];
  const data = [
    { id: '001', name: 'John Doe', department: 'IT', position: 'Developer', hireDate: '2022-01-15', rating: '4.2' },
    { id: '002', name: 'Jane Smith', department: 'HR', position: 'Manager', hireDate: '2021-05-01', rating: '4.5' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Employee Reports
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default EmployeeReports;