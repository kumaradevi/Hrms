import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function Statistics() {
  const demoData = [
    {
        id:1,
      title: "Total Turnover payroll Expenses",
      employeeCount: 150,
      expenses: "$ 150000",
    },
    {
        id:2,
        title:"Overtime Payment",
        employeeCount:50,
        expenses:"$ 30000"
    },
    {
        id:3,
        title:"Turnover Rate",
        employeeCount:22,
        expenses:"$ 50000"
    },
    {
        id:4,
        title:"Average Salary",
        employeeCount:150,
        expenses:"$ 10000"
    }
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        right: 30,
        top:570,
      }}
    >
        <Paper elevation={5}>
      <TableContainer
        sx={{
          width: 400,
          mb:10
        }}
      >
        <TableHead>
          <TableRow >
            <TableCell width={300} sx={{fontWeight:"bold",fontSize:16}}>Title</TableCell>
            <TableCell width={120}  sx={{fontWeight:"bold",fontSize:16}}>Employee Count</TableCell>
            <TableCell  sx={{fontWeight:"bold",fontSize:16}}>Expenses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {demoData &&
            demoData.map((data)=>(
            
              <TableRow key={data.id}>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.employeeCount}</TableCell>
              <TableCell>{data.expenses}</TableCell>
            </TableRow>
            ))}
          
        </TableBody>
      </TableContainer>
      </Paper>
    </Box>
  );
}

export default Statistics;
