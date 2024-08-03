import React from 'react';
import { Typography, Container } from '@mui/material';
import Form from '../../components/common/Form';

function LeaveRequest() {
  const fields = [
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'endDate', label: 'End Date', type: 'date' },
    { name: 'leaveType', label: 'Leave Type' },
    { name: 'reason', label: 'Reason' },
  ];

  const handleSubmit = (data) => {
    console.log('Leave request:', data);
    // Implement leave request logic here
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Leave Request
      </Typography>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
}

export default LeaveRequest;