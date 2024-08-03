import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CustomTable from '../../components/common/Table';

function LeaveReports() {
  const headers = ['Employee', 'Leave Type', 'Start Date', 'End Date', 'Status', 'Days Taken'];
  const data = [
    { employee: 'John Doe', leaveType: 'Vacation', startDate: '2023-07-01', endDate: '2023-07-05', status: 'Approved', daysTaken: 5 },
    { employee: 'Jane Smith', leaveType: 'Sick', startDate: '2023-07-10', endDate: '2023-07-12', status: 'Approved', daysTaken: 3 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Leave Reports
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default LeaveReports;