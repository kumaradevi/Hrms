import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function Dashboard({ title, items }) {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 140,
              }}
            >
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {item.title}
              </Typography>
              <Typography component="p" variant="h4">
                {item.value}
              </Typography>
              <Typography color="text.secondary" sx={{ flex: 1 }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;