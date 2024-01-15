import React, { useState } from 'react';
import { Typography, Divider, Grid, Stack, InputAdornment, Box, Container, Select, MenuItem, Button, IconButton, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import bitcoingSvg from '../assets/bitcoin.svg'
import barcodeImg from '../assets/barcode.png'
import { KeyboardArrowDown } from '@mui/icons-material'; // Import the caret down icon
import usFlag from '../assets/us-flag@2x.png'

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.6665 1.66699C9.82555 1.66699 8.33317 3.15938 8.33317 5.00033V6.66699H4.99984C3.15889 6.66699 1.6665 8.15938 1.6665 10.0003V15.0003C1.6665 16.8413 3.15889 18.3337 4.99984 18.3337H8.33317C10.1741 18.3337 11.6665 16.8413 11.6665 15.0003V13.3337H14.9998C16.8408 13.3337 18.3332 11.8413 18.3332 10.0003V5.00033C18.3332 3.15938 16.8408 1.66699 14.9998 1.66699H11.6665ZM11.6665 11.667H14.9998C15.9203 11.667 16.6665 10.9208 16.6665 10.0003V5.00033C16.6665 4.07985 15.9203 3.33366 14.9998 3.33366H11.6665C10.746 3.33366 9.99984 4.07985 9.99984 5.00033V7.11293C10.9962 7.68928 11.6665 8.76652 11.6665 10.0003V11.667ZM3.33317 10.0003C3.33317 9.07985 4.07936 8.33366 4.99984 8.33366H8.33317C9.25365 8.33366 9.99984 9.07985 9.99984 10.0003V15.0003C9.99984 15.9208 9.25365 16.667 8.33317 16.667H4.99984C4.07936 16.667 3.33317 15.9208 3.33317 15.0003V10.0003Z" fill="#667185" />
  </svg>
);

const WithdrawTransfer = () => {
  const [showSecurityVerification, setShowSecurityVerification] = useState(false);

  const handleButtonClick = () => {

    setShowSecurityVerification(!showSecurityVerification);
  };

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
          Transfer Cryptocurrency
        </Typography>

        {/* 2. Box with Border */}
        <Box
          sx={{
            border: '1px solid #ccc',
            padding: 3,
            marginTop: 4,
            width: "38%",
            textAlign: 'center',
            alignItems: "center",
            borderRadius: "8px"
          }}
        >

          {!showSecurityVerification && (
            <>
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

              {/* 5. Enter Amount */}
              <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Enter Amount</Typography>
              <Select value="Ethereum" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
                <MenuItem value="Ethereum" >1.42 (BTC)</MenuItem>
              </Select>

              {/* 5. Select Network */}
              <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Select Network</Typography>
              <Select value="Ethereum" sx={{ width: "100%", border: "1px solid #2E3A5C", borderRadius: "7px", textAlign: "left" }}>
                <MenuItem value="Ethereum" >Ethereum (ERC20)</MenuItem>
              </Select>

              <Typography variant="subtitle1" sx={{ marginTop: 3, textAlign: "left" }} >Send To</Typography>
              <TextField
                placeholder="Enter Address"
                sx={{ width: '100%', border: '1px solid #2E3A5C', borderRadius: '8px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" aria-label="copy">
                        <CopyIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button variant="contained"
                sx={{ marginTop: 2, backgroundColor: "#2E3A5C", color: "#fff", width: "100%", textTransform: "none" }}
                onClick={handleButtonClick}
              >Continue</Button>
            </>
          )}

          {showSecurityVerification && (
            <>
              <div>
                <Typography variant="h6" align="left"
                  style={{
                    color: "#000",
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: "20px",

                  }}>
                  Security Verification
                </Typography>
                <Divider style={{ margin: '16px 0' }} />

                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1" color="text.secondary">Withdraw to:</Typography>
                    <Typography variant="subtitle1" color="text.secondary">You will receive</Typography>
                  </Grid>
                  <Grid item xs={8} style={{ marginTop: "5px" }}>
                    <Typography variant="body1">Ethereum ERC20</Typography>
                    <Stack direction="row">
                      <Typography variant="body1" style={{ fontSize: "15px", width: "100px" }}>1.002 BTC</Typography>
                      <Typography variant="body1" color="text.secondary" style={{ fontSize: "15px", width: "150px" }}>(Fee: 0.0005ETH)</Typography>
                    </Stack>
                  </Grid>
                </Grid>

                <Divider style={{ margin: '16px 0' }} />

                <Typography variant="subtitle1" style={{ marginBottom: '8px' }}>
                  Email Verification Code
                </Typography>

                <Stack direction="row" spacing={2}>
                  <TextField placeholder="Enter 6 digit code" style={{ border: "1px solid #2E3A5C", borderRadius: "5px" }}></TextField>
                  <Button style={{ color: "#2E3A5C", border: "1px solid #2E3A5C", borderRadius: "5px", backgroundColor: "#fff", textTransform: "none", fontWeight: "600", fontSize: "15px" }}>Send Code</Button>
                </Stack>
              </div>
              <Link to="/buy-cryptocurrency">
                <Button variant="contained"
                  sx={{ marginTop: 2, backgroundColor: "#2E3A5C", color: "#fff", width: "100%", height: "45px", textTransform: "none" }}
                >Submit</Button>
              </Link>
            </>
          )}
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


export default WithdrawTransfer;
