import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Label } from 'recharts';
import { Box } from '@mui/material';

export default function ChartPayroll() {
  return (
    <Box sx={{
        position:"absolute",
        left:340,
        top:570,
    }}>
    <BarChart
  xAxis={[{ scaleType: 'band', data: ['Avg Salary', 'Total Payroll over Time', 'Payroll Deductions'] }]}
  series={[
    { name: 'IT', data: [50000, 200000, 15000] , stack:'A', label:'IT' },        // IT Department
    { name: 'Analysts', data: [55000, 210000, 16000],stack:'B', label:"Analysts" },  // Analysts Department
    { name: 'Admin', data: [45000, 180000, 14000] ,stack:"C",label:"Admin"},     // Admin Department
  ]}
  width={540}
  height={300}
  barLabel="value"
/>
</Box>
  );
}
