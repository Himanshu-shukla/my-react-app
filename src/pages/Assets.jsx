import React from 'react'
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
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
                <Link to="/asset-detail">
                  <Typography ml={3} variant="p" color="text.secondary">
                    Details
                  </Typography>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};


function Assets() {
  return (
    <>
      <NavigationBar />
      <Stack direction="column" style={{ width: "75%", margin: "0 auto" }}>
      <Header leftText="Assets" />
      <Stack direction="row" mt={4} spacing={1} justifyContent="space-between" alignItems="center">
        <Typography variant="h5" style={{ fontWeight: "700" }}> Wallet</Typography>
        <Stack direction="row" spacing={1}>
          <Link to="/deposit" style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{ background: "#2E3A5C" }}>Deposit</Button>
          </Link>
          <Link to="/withdraw-transfer" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }}>Withdraw</Button>
          </Link>
        </Stack>
      </Stack>
      <Grid container spacing={2} mt={2}>
        {/* 1st Card */}
        <Grid item xs={12} md={6}>
          <Card style={{ width: '100%', height: '155px', background: "#4ba673", color: "#fff", borderRadius: "7px" }}>
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
        </Grid>

        {/* 2nd Card */}
        <Grid item xs={12} md={6}>
          <Card style={{ width: '100%', height: '155px' }}>
            <CardContent>
              <Stack direction="row" spacing={20} alignItems="center" >
                <Typography variant="body2" color="text.secondary">
                  KYC Lv. 1
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Chip
                    label="Upgrade to Increase Limit"
                    style={{ fontSize: "10px", backgroundColor: '#E7F6EC', color: '#036B26', height: "25px", width: "100%" }}
                  />
                </Stack>
              </Stack>

              <Grid container spacing={1} justifyContent="space-between" alignItems="center" mt={2}>
                <Grid item xs={12} md={6}>
                  <Stack>
                    <Typography variant="p" style={{ fontSize: "10px" }}>Trade Fee Rate</Typography>
                    <Typography fontWeight="700" variant="h5">0.2%</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack>
                    <Typography variant="p" style={{ fontSize: "10px" }}>Withdraw Limit Per Day</Typography>
                    <Typography fontWeight="700" variant="h5">100 K</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Stack direction="row" justifyContent="space-between" mt={3}>
        <Typography style={{ fontWeight: "700" }} variant='h5'> Your Assets</Typography>
      </Stack>

      <AssetTableComponent />
    </Stack>
    </>
  );
}

export default Assets