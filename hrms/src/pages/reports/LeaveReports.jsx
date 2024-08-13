import React, { useState } from 'react';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import CustomTable from '../../components/common/Table';
import { jsPDF } from "jspdf";

function LeaveReports() {
  const [open, setOpen] = useState(false);
  const [reportData, setReportData] = useState({});
  const [tableData, setTableData] = useState([
    {
      employee: 'John Doe',
      leaveType: 'Vacation',
      startDate: '2023-07-01',
      endDate: '2023-07-05',
      status: 'Approved',
      daysTaken: 5,
      report: ''
    },
    {
      employee: 'Jane Smith',
      leaveType: 'Sick',
      startDate: '2023-07-10',
      endDate: '2023-07-12',
      status: 'Approved',
      daysTaken: 3,
      report: ''
    },
  ]);

  const headers = [
    'Employee',
    'Leave Type',
    'Start Date',
    'End Date',
    'Status',
    'Days Taken',
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
    doc.text("Leave Report", 10, 10);
    Object.entries(reportData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 10, 20 + (index * 10));
    });
    doc.save("leave_report.pdf");

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
        Leave Reports
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={tableData} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Generate Leave Report</DialogTitle>
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

export default LeaveReports;