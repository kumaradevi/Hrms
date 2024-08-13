import React, { useState } from 'react';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import CustomTable from '../../components/common/Table';
import { jsPDF } from "jspdf";

function PerformanceReports() {
  const [open, setOpen] = useState(false);
  const [reportData, setReportData] = useState({});
  const [tableData, setTableData] = useState([
    {
      employee: 'John Doe',
      reviewPeriod: 'Q2 2023',
      jobKnowledge: 4,
      workQuality: 4,
      attendance: 5,
      communication: 4,
      overallRating: 4.25,
      report: ''
    },
    {
      employee: 'Jane Smith',
      reviewPeriod: 'Q2 2023',
      jobKnowledge: 5,
      workQuality: 4,
      attendance: 4,
      communication: 5,
      overallRating: 4.5,
      report: ''
    },
  ]);

  const headers = [
    'Employee',
    'Review Period',
    'Job Knowledge',
    'Work Quality',
    'Attendance',
    'Communication',
    'Overall Rating',
    'Report'
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    setReportData({
      ...reportData,
      [event.target.name]: event.target.value
    });
  };

  const generateReport = () => {
    // Generate PDF
    const doc = new jsPDF();
    doc.text("Performance Report", 10, 10);
    Object.entries(reportData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 10, 20 + (index * 10));
    });
    doc.save("performance_report.pdf");

    // Update table data
    setTableData(tableData.map(row => ({
      ...row,
      report: 'Generated'
    })));

    handleClose();
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Performance Reports
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={tableData} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Generate Performance Report</DialogTitle>
        <DialogContent>
          {headers.slice(0, -1).map((header, index) => (
            <TextField
              key={index}
              margin="dense"
              name={header.toLowerCase().replace(' ', '_')}
              label={header}
              type="text"
              fullWidth
              variant="standard"
              onChange={handleInputChange}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={generateReport}>Generate</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default PerformanceReports;