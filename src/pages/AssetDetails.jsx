import React from 'react'
import NavigationBar from '../components/NavigationBar';
import { Stack, Chip, Grid, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


const AssetTableComponent = () => {
  // Example data
  const data = [
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '+45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '+45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '-45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '+5%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '-20.45', change24h: '-45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '+5%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '-20.45', change24h: '-45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '-20.45', change24h: '-45%', action: 'Trade' },
    { name: 'PROPC', helperText: 'Propchain', availableAmount: '787323.09', price: '$2.03', unrealisedPNL: '+18.98', change24h: '+5%', action: 'Trade' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Available amount</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Unrealised PNL</TableCell>
            <TableCell>24h Change</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Stack>
                  <Typography>
                    {row.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {row.helperText}
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell>{row.availableAmount}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell style={{ color: row.unrealisedPNL.charAt(0) === '+' ? 'green' : 'red' }}>
                {row.unrealisedPNL}
              </TableCell>
              <TableCell>
                <Chip
                  icon={
                    row.change24h.charAt(0) === '-' ? (
                      <ArrowDownwardIcon style={{ color: '#9E0A05', fontSize: '15px' }} />
                    ) : (
                      <ArrowUpwardIcon style={{ color: '#036B26', fontSize: '15px' }} />
                    )
                  }
                  label={row.change24h}
                  style={{
                    backgroundColor: row.change24h.charAt(0) === '-' ? '#FBEAE9' : '#E7F6EC',
                    color: row.change24h.charAt(0) === '-' ? '#9E0A05' : '#036B26',
                    marginTop: '8px',
                    height: '22px',
                  }}
                />
              </TableCell>
              <TableCell>
                <Typography variant="p" >
                  {row.action}
                </Typography>
                <Typography ml={3} variant="p" color="text.secondary">
                  Details
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


function AssetDetails() {
  return (
    <>
      <NavigationBar />
      <Stack direction="column" style={{ width: "70%" }}>
        <Stack direction="row" spacing={85} justifyContent="space-between" alignItems="center" >
          <Typography variant="h5" style={{ fontWeight: "700" }}> Wallet</Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" style={{ background: "#2E3A5C" }}>Deposit</Button>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }}>Withdraw</Button>
          </Stack>
        </Stack>
        <Stack direction="row" mt={2} style={{ padding: "15px" }}>
          {/* 1st Card */}
          <Card style={{ width: '50%', height: '155px', background: "#4ba673", color: "#fff", borderRadius: "7px" }}>
            <CardContent>
              <Stack direction="row" spacing={1} justifyContent="space-between">
                <Typography variant="body2" >
                  Available Balance
                </Typography>
                <IconButton style={{ color: "#fff", position: "relative", top: "35px", right: "20px" }}>
                  <VisibilityIcon style={{ fontSize: "35px" }} />
                </IconButton>
              </Stack>
              <Typography variant="h5">$ 140,000.00</Typography>
              <Chip
                icon={<ArrowUpwardIcon style={{ width: "15px", height: "18px", backgroundColor: '#E7F6EC', color: '#036B26' }} />}
                label="5.26%"
                style={{ backgroundColor: '#E7F6EC', color: '#036B26', marginTop: '8px', height: "22px" }}
              />
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card style={{ width: 'calc(50% - 5px)', height: '155px' }}>
            <CardContent>
              <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">
                  KYC Lv. 1
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip
                    label="Upgrade to Increase Limit"
                    style={{ fontSize: "10px", backgroundColor: '#E7F6EC', color: '#036B26', height: "25px", width: "205px" }}
                  />
                </Stack>
              </Stack>

              <Grid container ml={2} justifyContent="space-between" alignItems="center" marginTop={7}>
                <Grid item >
                  <Stack >
                    <Typography variant="p" style={{ fontSize: "10px" }}>Trade Fee Rate</Typography>
                    <Typography fontWeight="700" variant="h5">0.2%</Typography>
                  </Stack>
                </Grid>
                <Grid item mr={5} style={{ textAlign: 'right' }}>
                  <Stack >
                    <Typography variant="p" style={{ fontSize: "10px" }}>Withdraw Limit Per Day</Typography>
                    <Typography fontWeight="700" variant="h5">100 K</Typography>
                  </Stack>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Stack>
        <Stack direction="row" justifyContent={'space-between'}>

        <Typography mt={3} style={{ fontWeight: "700" }} variant='h5'> Your Assets</Typography>
      
        </Stack>
        <AssetTableComponent />
      </Stack>
    </>
  );
}

export default AssetDetails