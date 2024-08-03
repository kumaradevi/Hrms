import React from 'react';
import { Typography, Container } from '@mui/material';
import Form from '../../components/common/Form';

function PerformanceReview() {
  const fields = [
    { name: 'employee', label: 'Employee' },
    { name: 'reviewPeriod', label: 'Review Period' },
    { name: 'jobKnowledge', label: 'Job Knowledge', type: 'number' },
    { name: 'workQuality', label: 'Work Quality', type: 'number' },
    { name: 'attendance', label: 'Attendance', type: 'number' },
    { name: 'communication', label: 'Communication', type: 'number' },
    { name: 'comments', label: 'Comments', multiline: true },
  ];

  const handleSubmit = (data) => {
    console.log('Performance review:', data);
    // Implement performance review submission logic here
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography component="h1" variant="h5">
        Performance Review
      </Typography>
      <Form fields={fields} onSubmit={handleSubmit} />
    </Container>
  );
}

export default PerformanceReview;