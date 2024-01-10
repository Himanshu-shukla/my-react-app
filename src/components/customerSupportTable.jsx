import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CustomerSupportTable = () => {
  const rows = [
    { id: "Account Assistance", name: 'Oct 15, 2023 | 09:32AM', category: 'In Progress' },
    { id: "Account Assistance", name: 'Oct 15, 2023 | 09:32AM', category: 'Success' },
    { id: "Account Assistance", name: 'Oct 15, 2023 | 09:32AM', category: 'In Progress' },
    { id: "Account Assistance", name: 'Oct 15, 2023 | 09:32AM', category: 'In Progress' },
  ];

  const getChipColor = (category) => {
    return category === 'Success' ? '#036b26' : '#04326b';
  };

  return (
    <div >
      <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <Typography variant="h5">Customer Support</Typography>
        <Button variant="contained" style={{ color: "#fff", background: "#2E3A5C" }}>
          Open New Ticket
        </Button>
      </Stack>
      <Paper style={{ margin: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ticket Title</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Manage</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  <Chip label={row.category} style={{ backgroundColor: getChipColor(row.category), color: '#ffffff' }} />
                </TableCell>
                <TableCell>
                  <Link to="/account-assistant">
                    <IconButton>
                      <VisibilityOffIcon />
                    </IconButton>
                  </Link>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CustomerSupportTable;
