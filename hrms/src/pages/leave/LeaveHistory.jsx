import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomTable from '../../components/common/Table';

function LeaveHistory() {
  const headers = ['Employee', 'Start Date', 'End Date', 'Leave Type', 'Status'];
  const data = [
    { employee: 'John Doe', startDate: '2023-06-01', endDate: '2023-06-05', leaveType: 'Vacation', status: 'Approved' },
    { employee: 'Jane Smith', startDate: '2023-06-10', endDate: '2023-06-12', leaveType: 'Sick', status: 'Rejected' },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Leave History
      </Typography>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default LeaveHistory;