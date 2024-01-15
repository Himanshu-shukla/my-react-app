import React from 'react';
import { Typography, Stack, Box, Container, Select, MenuItem, Button, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bitcoingSvg from '../assets/bitcoin.svg'
import barcodeImg from '../assets/barcode.png'
import { KeyboardArrowDown } from '@mui/icons-material'; // Import the caret down icon
import usFlag from '../assets/us-flag@2x.png'


const Deposit = () => {
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
          Deposit Cryptocurrency
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
          {/* 3. Select Coin */}
          <Typography variant="subtitle1" style={{ textAlign: "left" }}>Select Coin</Typography>

          {/* 4. Dropdown with Icon */}
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

          {/* 5. Select Network */}
          <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Select Network</Typography>
          <Select value="Ethereum" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
            <MenuItem value="Ethereum" >Ethereum (ERC20)</MenuItem>
          </Select>
          <Box
            sx={{
              border: '1px solid #2E3A5C',
              padding: 2,
              marginTop: 2,
              width: '100%',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: "8px",
              alignItems: "center"
            }}
          >
            <img src={barcodeImg} alt="Coin Image" style={{ width: '100px', height: '100px', marginBottom: '8px' }} />
            <Stack direction="row" >

              <Typography variant="body2" sx={{ fontSize: '12px', marginTop: "16px" }}>1NTmomQ4aipipDchHKH6Ju5eBnhyy5y2uy</Typography>
              <Button variant="text" sx={{ marginTop: 1, fontWeight: "500", border: "none", color: "#2E3A5C", outline: "none" }}>Copy</Button>
            </Stack>
          </Box>
          <Link to='/withdraw-transfer'>

            <Button variant="contained" sx={{ marginTop: 2, backgroundColor: "#2E3A5C", color: "#fff", width: "100%", textTransform: "none" }}>Save and Share Address</Button>
          </Link>

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


export default Deposit;
