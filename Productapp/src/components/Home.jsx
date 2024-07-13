import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data using fetch
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Title</TableCell>
            <TableCell align='center'>Category</TableCell>
            <TableCell align='center'>Price</TableCell>
            <TableCell align='center'>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='center'>
                {row.title}
              </TableCell>
              <TableCell align='center'>{row.category}</TableCell>
              <TableCell align='center'>${row.price}</TableCell>
              <TableCell align='center'>
                <img src={row.image} alt={row.title} width="100" height="100" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}