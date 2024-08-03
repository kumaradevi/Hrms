import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CustomTable from '../../components/common/Table';

function PerformanceReports() {
  const headers = ['Employee', 'Review Period', 'Job Knowledge', 'Work Quality', 'Attendance', 'Communication', 'Overall Rating'];
  const data = [
    { employee: 'John Doe', reviewPeriod: 'Q2 2023', jobKnowledge: 4, workQuality: 4, attendance: 5, communication: 4, overallRating: 4.25 },
    { employee: 'Jane Smith', reviewPeriod: 'Q2 2023', jobKnowledge: 5, workQuality: 4, attendance: 4, communication: 5, overallRating: 4.5 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Performance Reports
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default PerformanceReports;