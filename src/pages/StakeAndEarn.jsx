import React from 'react'
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import logoImg from '../assets/icon.png'
import img from '../assets/Image.png'
import {
  Paper,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack
} from '@mui/material';
import { Link } from 'react-router-dom';


const FirstComponent = () => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16 }}>
      <Grid container spacing={3}>
        {/* Top Left Section */}
        <Stack direction="row" spacing={2} mt={3} ml={4}>
          <img src={logoImg} alt="Image" style={{ width: '40px', height: "40px" }} />
          <Typography variant="h5">JUNA</Typography>
        </Stack>

        {/* Three Columns Section */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {/* Column 1 */}
            <Grid item xs={2}>
              <Typography variant="subtitle1">Estimated APR%</Typography>
              <Typography variant="h4" style={{ color: 'green' }}>
                15%
              </Typography>
            </Grid>

            {/* Column 2 */}
            <Grid item xs={8}>
              <Typography variant="subtitle1">Lock Duration (Days)</Typography>
              <div>
                <Chip
                  label="30 Days"
                  style={{ backgroundColor: '#E7F6EC', color: '#036B26', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="60 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="90 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="180 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="365 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
              </div>
            </Grid>

            {/* Column 3 */}
            <Grid item xs={2}>
              <Button variant="outlined" style={{ backgroundColor: "#2E3A5C", color: "#fff", border: "1px solid #2E3A5C" }}>
              <Link to="/stack-earn2" style={{ color: 'white', textDecoration: 'none' }}>
                  Stake
                </Link>
                
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const SecondComponent = () => {
  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Lock Duration (Days)</TableCell>
              <TableCell>Estimated Annual Percent Rate</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <img src={img} alt="Image" style={{ width: 50, borderRadius: '50%' }} />
                POMP
              </TableCell>
              <TableCell>
                <Chip
                  label="30 Days"
                  style={{ backgroundColor: '#E7F6EC', color: '#036B26', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="60 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="90 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="180 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="365 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
              </TableCell>
              <TableCell style={{ color: '#036B26' }}>1.25%</TableCell>
              <TableCell>
                 <Link to="/stack-earn2">Stake</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={img} alt="Image" style={{ width: 50, borderRadius: '50%' }} />
                POMP
              </TableCell>
              <TableCell>
                <Chip
                  label="30 Days"
                  style={{ backgroundColor: '#E7F6EC', color: '#036B26', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="60 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="90 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="180 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="365 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
              </TableCell>
              <TableCell style={{ color: '#036B26' }}>1.25%</TableCell>
              <TableCell>
                 <Link to="/stack-earn2">Stake</Link>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <img src={img} alt="Image" style={{ width: 50, borderRadius: '50%' }} />
                POMP
              </TableCell>
              <TableCell>
                <Chip
                  label="30 Days"
                  style={{ backgroundColor: '#E7F6EC', color: '#036B26', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="60 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="90 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="180 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
                <Chip
                  label="365 Days"
                  style={{ color: '#000', fontWeight: "700", marginLeft: '8px', marginTop: '8px', height: "22px" }}
                />
              </TableCell>
              <TableCell style={{ color: '#036B26' }}>1.25%</TableCell>
              <TableCell>
              <Link to="/stack-earn2">Stake</Link>
              </TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

function StakeAndEarn() {

  return (
    <>
      <NavigationBar></NavigationBar>
      <Stack style={{width:"95%"}}>
        <Header leftText="Home" rightText="Staking"></Header>
        <Stack style={{ width: "95%", margin: "15px" }}>
          <Typography mt={5} style={{
            color: "#000",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "20px",
          }}>Stake and Earn</Typography>
          <FirstComponent />
          <Typography m={2} style={{
            color: "#000",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "20px",
          }}>Stake Tokenized Assets</Typography>
          <SecondComponent />
        </Stack>
      </Stack>

    </>
  );
}

export default StakeAndEarn