import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Documentation() {
  const documentationSections = [
    {
      title: 'Getting Started',
      items: ['System Requirements', 'Installation Guide', 'First-time Login'],
    },
    {
      title: 'User Guide',
      items: [
        'Dashboard Overview',
        'Employee Management',
        'Leave Management',
        'Payroll Processing',
        'Performance Reviews',
      ],
    },
    {
      title: 'Administrator Guide',
      items: [
        'System Configuration',
        'User Management',
        'Access Control',
        'Data Backup and Recovery',
      ],
    },
    {
      title: 'Troubleshooting',
      items: [
        'Common Issues and Solutions',
        'Error Message Reference',
        'Contacting Support',
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Documentation
      </Typography>
      {documentationSections.map((section, index) => (
        <Box key={index} mb={3}>
          <Typography variant="h6" gutterBottom>
            {section.title}
          </Typography>
          <List>
            {section.items.map((item, itemIndex) => (
              <ListItem key={itemIndex}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default Documentation;
