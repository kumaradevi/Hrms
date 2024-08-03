import React from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

function MaintenancePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress size={60} sx={{ mb: 4 }} />
      <Typography variant="h4" gutterBottom>
        System Maintenance
      </Typography>
      <Typography variant="body1" align="center" sx={{ maxWidth: 600 }}>
        We're currently performing scheduled maintenance on our HR Management System. 
        We apologize for any inconvenience this may cause. 
        The system will be back online shortly. Thank you for your patience.
      </Typography>
    </Box>
  );
}

export default MaintenancePage;