import React from 'react';
import { Typography, Stack, Box, Container, Select, MenuItem, Button, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bitcoingSvg from '../assets/bitcoin.svg'
import creditCardSvg from '../assets/credit-card.svg'
import { KeyboardArrowDown } from '@mui/icons-material'; // Import the caret down icon
import usFlag from '../assets/us-flag@2x.png'


const BuyCryptocurrency = () => {
  return (
    <Stack direction="column" width="100%">
      <Stack m={5} direction="row" justifyContent="space-between">
        <Link to="/">
          <Button style={returnbtn}>
            <ArrowBackIcon style={arrowIconStyle} />
            Return to Home
          </Button>
        </Link>
        <Button color="inherit" >
          <img src={usFlag} alt="US Flag" style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
          <Typography variant="p" ml={1} color="text.secondary">Eng
            <KeyboardArrowDown />
          </Typography>
        </Button>
      </Stack>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        {/* 1. Typography */}
        <Typography variant="h5" style={{
          color: "#000",
          fontSize: "24px",
          fontWeight: "700",
          lineHeight: "20px"
        }}>
          Buy Cryptocurrency
        </Typography>

        {/* 2. Box with Border */}
        <Box
          sx={{
            border: '1px solid #ccc',
            padding: 3,
            marginTop: 4,
            width: '35%',
            textAlign: 'center',
            alignItems: "center",
            borderRadius: "8px"
          }}
        >
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>Select Cryptocurrency</Typography>

          <Select
            value="BTC"
            sx={{
              marginTop: 1,
              '& .MuiSelect-select.MuiSelect-select': {
                paddingLeft: '25px', // Make space for the custom icon
              },
              '& .MuiSelect-selectMenu': {
                display: 'flex',
                alignItems: 'center',
              },
              width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px"
            }}
          >
            <MenuItem value="BTC">
              <Stack direction="row">

                <img src={bitcoingSvg} style={{ marginRight: '8px', width: "20px" }} />
                BitCoin BTC

              </Stack>
            </MenuItem>
          </Select>

          <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >You Pay</Typography>
          <Select value="usd" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
            <MenuItem value="usd" >160.00 (USD)</MenuItem>
          </Select>

          <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Amount Receive</Typography>
          <Select value="btc" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
            <MenuItem value="btc" >3.77 (BTC)</MenuItem>
          </Select>

          <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Payment Method</Typography>

          <Select value="method" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
            <MenuItem value="method" >
              <Stack direction="row" spacing={5}>

                <img src={creditCardSvg} style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                Credit Card
              </Stack>
            </MenuItem>
          </Select>


          <Stack direction="row" spacing={2} mt={2}>
            {/* <Link to='/withdraw-transfer'> */}
            <Button variant="contained" sx={{ marginTop: 2, color: "#2E3A5C", border: "1px solid #2E3A5C", borderRadius: "5px", backgroundColor: "#fff", width: "50%", textTransform: "none" }}>Reset</Button>
            {/* </Link> */}

            {/* <Link to='/'> */}
            <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#2E3A5C", color: "#fff", width: "50%", textTransform: "none" }}>Buy Now</Button>
            {/* </Link> */}
          </Stack>

        </Box>


      </Container>
    </Stack>
  );
};

const returnbtn = {
  borderRadius: '6px',
  border: '1.5px solid #2E3A5C',
  background: '#FFF',
  color: "#2E3A5C"
}

const arrowIconStyle = {
  background: '#FFF',
  color: "#2E3A5C"
}


export default BuyCryptocurrency;
