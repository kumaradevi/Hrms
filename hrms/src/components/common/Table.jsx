import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

function CustomTable({ headers, data }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell key={header}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}  >
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}
                </TableCell>
              ))}
              <Stack direction={'row'} gap={4} sx={{justifyContent:"center",alignItems:"center",mt:1}}>
              <Button variant='contained'>Edit</Button>
            
              <Button variant='contained'>delete</Button>
              </Stack>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;