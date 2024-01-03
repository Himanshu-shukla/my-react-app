import NavigationBar from '../components/NavigationBar';
import React from 'react'
import { Container, Grid, Paper, Stack, Button, ButtonGroup } from '@mui/material';
import { Avatar, Chip, Typography } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { CandlestickChart, TrendingUp, Camera, Settings } from '@mui/icons-material';
import { styled } from "@mui/system";

const useStyles = styled((theme) => ({
  btn: {
    width: "40px",
    height: "40px",
    marginLeft: 10,
    marginRight: 10,
    color: "#2E3A5C",
    border: "solid 1px #2E3A5C",
    backgroundColor: "#fff"
  }
}));



const LeftContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', padding: 5 }}>
      <Avatar />
      <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginLeft: 20, justifyContent: "space-around" }}>
        <Typography variant="body1">PROPC</Typography>
        <ArrowDropDown />

        <Typography ml={2} variant="body1" fontWeight="bold">
          $2.38
        </Typography>
        <Chip ml={1} size="small" label="5.26% (1D)" style={{ backgroundColor: "#E7F6EC", color: "#036B26" }} />
      </div>
    </div>
  );
};

const RightContainer = () => {
  const blockStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
  };

  return (
    <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
      <Stack direction="row" spacing={4} style={blockStyles}>
        <Stack direction="column">
          <Typography variant="body1" style={{ fontSize: "10px" }}>24h Low</Typography>
          <Typography variant="body2" fontWeight="bold">
            3.106385
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" style={{ fontSize: "10px" }}>24h Low</Typography>
          <Typography variant="body2" fontWeight="bold">
            2.01
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" style={{ fontSize: "10px" }} >24h Volume(USDT)</Typography>
          <Typography variant="body2" fontWeight="bold">
            30,849.85
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="body1" style={{ fontSize: "10px" }}>24h Volume(USDT)</Typography>
          <Typography variant="body2" fontWeight="bold">
            2,338,586.86
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

const TwoStackedContainers = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {/* Left container (2/3 width) */}
      <Grid item xs={8}>
        <Paper style={{ height: 200, padding: 20 }}>
          {/* Button Group on the left */}
          <Stack direction="row" justifyContent="space-between">

            <div >
              <Button style={{
                width: "30px", height: "30px",
                padding: "8px, 12px",

                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <CandlestickChart />
              </Button>
              <Button style={{
                width: "30px", height: "30px",
                padding: "8px, 12px",
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <TrendingUp />
              </Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 5,
                marginRight: 5,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <Camera />
              </Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 5,
                marginRight: 5,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <Settings />
              </Button>
            </div>
            <div >
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 5,
                marginRight: 5,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>12 H</Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 10,
                marginRight: 10,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>1 D</Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 10,
                marginRight: 10,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>3 D</Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 10,
                marginRight: 10,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>1 W</Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 10,
                marginRight: 10,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>1 M</Button>
              <Button style={{
                width: "30px", height: "30px",
                marginLeft: 10,
                marginRight: 10,
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>1 Y</Button>
            </div>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper style={{ height: 200, padding: 20 }}>
          {/* Button Group on the right */}

        </Paper>
      </Grid>
    </Grid>
  );
};

function P2PTrading() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Stack direction="column" style={{ width: "80%" }}>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper style={{ height: 50 }}>
                <LeftContainer />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper style={{ height: 50 }}>
                <RightContainer />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <TwoStackedContainers />
      </Stack>
    </>
  );
}

export default P2PTrading