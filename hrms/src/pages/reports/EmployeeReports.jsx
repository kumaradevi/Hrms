import React, { useState } from 'react';
import { Typography, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import CustomTable from '../../components/common/Table';
import { jsPDF } from "jspdf";

function EmployeeReports() {
  const [open, setOpen] = useState(false);
  const [reportData, setReportData] = useState({});
  const [tableData, setTableData] = useState([
    {
      id: '001',
      name: 'John Doe',
      department: 'IT',
      position: 'Developer',
      hireDate: '2022-01-15',
      rating: '4.2',
      report: ''
    },
    {
      id: '002',
      name: 'Jane Smith',
      department: 'HR',
      position: 'Manager',
      hireDate: '2021-05-01',
      rating: '4.5',
      report: ''
    },
  ]);

  const headers = [
    'Employee ID',
    'Name',
    'Department',
    'Position',
    'Hire Date',
    'Performance Rating',
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
    doc.text("Employee Report", 10, 10);
    Object.entries(reportData).forEach(([key, value], index) => {
      doc.text(`${key}: ${value}`, 10, 20 + (index * 10));
    });
    doc.save("employee_report.pdf");

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
        Employee Reports
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mb: 2 }}>
        Generate Report
      </Button>
      <CustomTable headers={headers} data={tableData} />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Generate Report</DialogTitle>
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

export default EmployeeReports;

// npm install jspdf