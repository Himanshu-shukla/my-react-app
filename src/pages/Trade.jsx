import NavigationBar from '../components/NavigationBar';
import React, { useState } from 'react'
import Modal from 'react-modal';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container, Grid, Paper, Stack, Box, Tabs, Tab, TextField, useTheme, Button, InputAdornment, Input , ButtonGroup } from '@mui/material';
import { Avatar, Chip, Typography } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Table, TableBody, TableCell, TableContainer, useMediaQuery, TableHead, TableRow } from '@mui/material';
import { CandlestickChart, TrendingUp, Camera, Settings } from '@mui/icons-material';
import { styled } from "@mui/system";
import ControlSvg from '../assets/Control.svg'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import chartImg from '../assets/chart.png';
import chartImg1 from '../assets/chart2.png';
import picon from '../assets/picon.png';
import Header from '../components/Header';

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

const PageTabs = () => {
  return (
    <Paper style={{ margin: "20px", height: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      {/* Button 1 */}
      <Button variant="contained" style={{ boxShadow: "none", color: "#2E3A5C", background: "#fff" }}>
        <Avatar sx={{ width: 32, height: 32, marginRight: 2 }}>
          <img src={picon} alt="PROPC" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
        </Avatar>
        <Typography variant="button">PROPC</Typography>
        <CloseIcon style={{ marginLeft: 8 }} />
      </Button>

      {/* Button 2 */}
      <Button variant="contained" style={{ boxShadow: "none", color: "#2E3A5C", background: "#fff" }}>
        <AddIcon />
      </Button>
    </Paper>
  );
};

const OrderTable = () => {
  return (
    <Paper elevation={3} style={{ height: 'auto', padding: 20, marginTop: 25 }}>
      {/* Order Heading */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" style={{ fontSize: "16px", fontWeight: "600" }}>Order</Typography>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9.75 8.24961L15.9 2.09961" stroke="#2E3A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 5.1V1.5H12.9" stroke="#2E3A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V9.75" stroke="#2E3A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>

      {/* Table 1 */}
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{ padding: "2px 2px" }}><Typography color="text.secondary" style={{ fontSize: "12px" }}>Price(USDT)</Typography></TableCell>
              <TableCell style={{ padding: "2px 2px" }}><Typography color="text.secondary" style={{ fontSize: "12px" }}>Amount(PROPC)</Typography></TableCell>
              <TableCell style={{ padding: "2px 2px" }}><Typography color="text.secondary" style={{ fontSize: "12px" }}>Total(PROPC)</Typography></TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#EB6D71',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#EB6D71',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#EB6D71',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#EB6D71',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Heading */}
      <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" style={{ fontSize: "16px", fontWeight: "600" }}>2.38</Typography>
        <Typography color="text.secondary">≈ 3.37 USD</Typography>
      </Box>

      {/* Table 2 */}
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell style={{
                color: '#4BB0A0',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#4BB0A0',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#4BB0A0',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{
                color: '#4BB0A0',
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>43.114</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3396.4537</TableCell>
              <TableCell style={{
                fontFamily: 'Inter',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal',
              }}>3,397.1437
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const SellComponent = () => {
  const [tabValue, setTabValue] = React.useState(1); // 0 for Buy, 1 for Sell
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper style={{ padding: 20, marginTop: 20 }} >
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="Buy"
          style={{
            borderRadius: '8px 0px 0px 8px',
            color: "#2E3A5C",
            width: isSmallScreen ? '50%' : "140px"
          }}
        />
        <Tab
          label="Sell"
          style={{
            borderRadius: '0px 8px 8px 0px',
            background: '#EF5350',
            color: "#fff",
            width: isSmallScreen ? '50%' : "140px"
          }}
        />
      </Tabs>
      {tabValue === 1 && (
        <div>
          <Tabs
            orientation={isSmallScreen ? 'vertical' : 'horizontal'}
            variant={isSmallScreen ? 'fullWidth' : 'scrollable'}
            value={0}
            textColor="#2E3A5C"
          >
            <Tab label="Limit" />
            <Tab label="Market" />
            <Tab label="Stop Limit" />
          </Tabs>
          <TextField label="Price (USDT)" fullWidth variant="outlined" margin="normal" />
          <TextField label="Quantity (PROPC)" fullWidth variant="outlined" margin="normal" />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }} onClick={() => console.log('25%')}>
              25%
            </Button>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }} onClick={() => console.log('50%')}>
              50%
            </Button>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }} onClick={() => console.log('75%')}>
              75%
            </Button>
            <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }} onClick={() => console.log('100%')}>
              100%
            </Button>
          </div>
          <TextField label="Volume (USDT)" fullWidth variant="outlined" margin="normal" />
          <Button variant="contained" color="primary" fullWidth style={{
            borderRadius: '2px 2px 2px 2px',
            background: '#EF5350',
            color: "#fff",
          }}>
            SELL PROPC
          </Button>
        </div>
      )}
    </Paper>
  );
};

const CustomModal = ({ isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState('Trending');

  const tabs = ['Favourite', 'Trending', 'New Listing'];
  const buttons = ['All', 'USTD', 'ETH', 'USDC'];

  const modelData = [
    { name: 'PROPC', price: '$2.03', change: '+45' },
    { name: 'PROPC', price: '$2.03', change: '+45' },
    { name: 'PROPC', price: '$2.03', change: '+45' },
    { name: 'AnotherCoin', price: '$5.25', change: '-10' },
    { name: 'AnotherCoin', price: '$5.25', change: '-10' },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '475px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          right: '25%',
          top: '25%', 
        },
      }}
    >
      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        style={{ width: '100%', padding: '10px', border: '1px solid #2E3A5C', borderRadius: '3px' }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      {/* Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        {tabs.map(tab => (
          <div
            key={tab}
            style={{ cursor: 'pointer', borderBottom: activeTab === tab ? '2px solid blue' : 'none' }}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <Stack direction="row" spacing={2}>
        {buttons.map(button => (
          <Button key={button} style={{ border: "1px solid gray", borderRadius: "8px", color: "#2E3A5C" }}>{button}</Button>
        ))}
      </Stack>

      <TableContainer component={Paper} style={{ padding: '12px' }}>
        <Table style={{ minWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {modelData.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ControlSvg} alt="Control Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                  {item.name}
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <ModifiedChip label={item.change} />
                  <div>{/* Up Arrow or Chip component */}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Modal>
  );
};

const ModifiedChip = ({ label }) => {

  if (!label || typeof label !== 'string') {
    return null;
  }

  const changeValue = label.replace(/[+-]/, '');
  const isPositive = label.charAt(0) === '+';
  const isNegative = label.charAt(0) === '-';
  const hasIcon = isPositive || isNegative;

  return (
    <Chip
      icon={hasIcon && (
        isPositive ? (
          <ArrowUpwardIcon style={{ width: "18px", backgroundColor: '#E7F6EC', color: '#036B26' }} />
        ) : (
          <ArrowDownwardIcon style={{ width: "18px", backgroundColor: '#FBEAE9', color: '#9E0A05' }} />
        )
      )}
      label={`${changeValue}%`}
      style={{
        backgroundColor: isPositive ? '#E7F6EC' : (isNegative ? '#FBEAE9' : '#F0F2F5'),
        color: isPositive ? '#036B26' : (isNegative ? '#9E0A05' : '#344054'),
      }}
    />
  );
};

const LeftContainer = ({ openModal }) => {
  return (
    <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', padding: 5 }}>
      <Avatar >
        <img src={picon} alt="PROPC" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
      </Avatar>
      <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginLeft: 20, justifyContent: "space-around" }}>
        <Typography variant="body1">PROPC</Typography>
        <Button onClick={openModal} style={{outline:"none"}}>
          <ArrowDropDown />
        </Button>

        <Typography ml={2} variant="body1" fontWeight="bold">
          $2.38
        </Typography>
        <ModifiedChip label="+45%" />
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

  const [activeButton, setActiveButton] = useState('candlestick');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <Grid container spacing={3}>
      {/* Left container (2/3 width) */}
      <Stack ml={5} mt={6}>
        <Paper style={{ padding: 5 }}>
          {/* Button Group on the left */}
          <Stack direction="row" spacing={15} justifyContent="space-between">

            <div style={{ display: "flex", gap: "8px" }}>
              <button style={{
                width: "46px", height: "36px",
                backgroundColor: activeButton === 'candlestick' ? '#2E3A5C' : '#fff',
                padding: "2px 3px",
                borderRadius: '6px',
                border: "solid 1px #2E3A5C",
                color: activeButton === 'candlestick' ? '#fff' : '#2E3A5C',
              }}
                onClick={() => handleButtonClick('candlestick')}
              >
                <CandlestickChart />
              </button>
              <button style={{
                width: "46px", height: "36px",
                backgroundColor: activeButton === 'trendingUp' ? '#2E3A5C' : '#fff',
                padding: "2px 3px",
                borderRadius: '6px',
                border: "solid 1px #2E3A5C",
                color: activeButton === 'trendingUp' ? '#fff' : '',
              }}
                onClick={() => handleButtonClick('trendingUp')}
              >
                <TrendingUp />
              </button>
              <button style={{
                width: "46px", height: "36px",
                backgroundColor: activeButton === 'camera' ? '#2E3A5C' : '#fff',
                padding: "2px 3px",
                borderRadius: '6px',
                border: "solid 1px #2E3A5C",
                color: activeButton === 'camera' ? '#fff' : '',
              }}
                onClick={() => handleButtonClick('camera')}
              >
                <Camera />
              </button>
              <button style={{
                width: "46px", height: "36px",
                backgroundColor: activeButton === 'setting' ? '#2E3A5C' : '#fff',
                padding: "2px 3px",
                borderRadius: '6px',
                border: "solid 1px #2E3A5C",
                color: activeButton === 'setting' ? '#fff' : '',
              }}
                onClick={() => handleButtonClick('setting')}
              >
                <Settings />
              </button>
            </div>
            {/* <div >
              <Button style={{
                width: "30px", height: "30px",
                padding: "8px 12px",

                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <CandlestickChart />
              </Button>
              <Button style={{
                width: "30px", height: "30px",
                padding: "8px 12px",
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
            </div> */}
            <div style={{ display: "flex", gap: "8px" }} >
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                backgroundColor: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                color: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>12 H
                </span>
              </button>
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>1 D
                </span>
              </button>
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>3 D
                </span>
              </button>
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>1 W
                </span>
              </button>
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>1 M
                </span>
              </button>
              <button style={{
                padding: '0',
                width: '46px',
                height: '36px',
                color: "#2E3A5C",
                border: "solid 1px #2E3A5C",
                backgroundColor: "#fff"
              }}>
                <span style={{ fontSize: "15px" }}>1 Y
                </span>
              </button>
            </div>
          </Stack>
        </Paper>

        <Paper elevation={3} style={{
          padding: '20px',
          textAlign: 'center',
          color: '#2E3A5C',
          marginTop: "15px"
        }}>
          <img
            src={activeButton === 'candlestick' ? chartImg : chartImg1}
            alt="Your Image"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </Paper>
        <Paper elevation={3} style={{ marginTop: 25 }}>
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <Stack>
              <Typography variant="p" color="text.secondary" style={{ fontWeight: "400", fontSize: "12px" }}>Total Token Supply</Typography>
              <Typography variant="h6" style={{ fontWeight: "600", fontSize: "17px" }}>880K PROPC</Typography>
            </Stack>
            <Stack>
              <Typography variant="p" color="text.secondary" style={{ fontWeight: "400", fontSize: "12px" }}>Market Cap</Typography>
              <Typography variant="h6" style={{ fontWeight: "600", fontSize: "17px" }}>$1.34M</Typography>
            </Stack>
            <Stack>
              <Typography variant="p" color="text.secondary" style={{ fontWeight: "400", fontSize: "12px" }}>Liquidity</Typography>
              <Typography variant="h6" style={{ fontWeight: "600", fontSize: "17px" }}>$200K</Typography>
            </Stack>
            <Stack>
              <Typography variant="p" color="text.secondary" style={{ fontWeight: "400", fontSize: "12px" }}>Total Holders</Typography>
              <Typography variant="h6" style={{ fontWeight: "600", fontSize: "17px" }}>5.1K</Typography>
            </Stack>
            <Stack>
              <Typography variant="p" color="text.secondary" style={{ fontWeight: "400", fontSize: "12px" }}>Blockchain</Typography>
              <Typography variant="h6" style={{ fontWeight: "600", fontSize: "17px" }}>Ethereum (ERC20)</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>

      <Grid item xs={4}>
        <SellComponent />
        <OrderTable />
      </Grid>
    </Grid>
  );
};

function Trade() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <Stack direction="column" style={{ width: "80%", margin: "0 auto" }}>
      <Header leftText="Trade" rightText="PROPC-USDT" />
      <PageTabs />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper style={{ height: 50 }}>
              <LeftContainer openModal={openModal} />
              <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
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

export default Trade