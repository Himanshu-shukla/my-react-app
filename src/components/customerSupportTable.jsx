import React from 'react';
import Paper from '@material-ui/core/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

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
    <div style={{width:"75%"}}>
      <Stack direction="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <Typography variant="h5">Customer Support</Typography>
        <Button variant="contained" style={{color:"#fff", background:"#2E3A5C"}}>
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
                  <IconButton>
                    <VisibilityOffIcon />
                  </IconButton>
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
