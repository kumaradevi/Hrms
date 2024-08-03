import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', avgRating: 3.5 },
  { name: 'Feb', avgRating: 3.8 },
  { name: 'Mar', avgRating: 4.0 },
  { name: 'Apr', avgRating: 3.9 },
  { name: 'May', avgRating: 4.2 },
  { name: 'Jun', avgRating: 4.1 },
];

function PerformanceAnalytics() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Performance Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Average Performance Ratings
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avgRating" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Performance Summary
            </Typography>
            <Typography variant="body1">
              Overall average rating: 3.9
            </Typography>
            <Typography variant="body1">
              Highest performing month: May (4.2)
            </Typography>
            <Typography variant="body1">
              Lowest performing month: January (3.5)
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PerformanceAnalytics;