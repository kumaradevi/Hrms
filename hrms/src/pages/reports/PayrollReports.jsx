import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import CustomTable from '../../components/common/Table';

function PayrollReports() {
  const headers = [
    'Employee',
    'Pay Period',
    'Gross Pay',
    'Deductions',
    'Net Pay',
  ];
  const data = [
    {
      employee: 'John Doe',
      payPeriod: 'June 2023',
      grossPay: '$5000',
      deductions: '$1000',
      netPay: '$4000',
    },
    {
      employee: 'Jane Smith',
      payPeriod: 'June 2023',
      grossPay: '$6000',
      deductions: '$1200',
      netPay: '$4800',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payroll Reports
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={data} />
    </Box>
  );
}

export default PayrollReports;
