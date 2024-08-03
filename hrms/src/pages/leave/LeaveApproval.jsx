import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomTable from '../../components/common/Table';

function LeaveApproval() {
  const headers = [
    'Employee',
    'Start Date',
    'End Date',
    'Leave Type',
    'Status',
    'Actions',
  ];
  const data = [
    {
      employee: 'John Doe',
      startDate: '2023-07-01',
      endDate: '2023-07-05',
      leaveType: 'Vacation',
      status: 'Pending',
      actions: 'Approve/Reject',
    },
    {
      employee: 'Jane Smith',
      startDate: '2023-07-10',
      endDate: '2023-07-12',
      leaveType: 'Sick',
      status: 'Pending',
      actions: 'Approve/Reject',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Leave Approval
      </Typography>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default LeaveApproval;
