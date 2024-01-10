import NavigationBar from '../components/NavigationBar';
import React, { useState } from 'react'
import { Table, TableBody, TableCell, Button, TableContainer, TableHead, TableRow, Paper, Chip, Avatar, Stack, Pagination, CardMedia, TextField, InputAdornment, CardContent, Card, Tabs, Tab, Typography, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import highGraph from '../assets/Container3.svg'
import lowGraph from '../assets/Container5.svg'
import ControlSvg from '../assets/Control.svg'
import './Market.css'

const gridData = [
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/8b53/76ad/89bef5775249ca0022f76c2646629a4e?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTDw251SJLXEXdfbWcRD9aMmOZ7tSOLuR8aHppRjmwrtIHgcTjJlgBAbK89BrDd-H1Qx1VvciMT8Lq~dAx10idOIDf1Ej9I0My4BErsOjQ2iFWW5bPTG6tjPIlGI8PHoeux6F28kPe6FoSlSazf~4Sgug9VHpTmDZlAiajuOBNSJNKk2o5P9HUZ14xWj1m4OPb0DK8t3mlf889rS7vmdx77scdFNWmRTSkPLdPfcOZaVvspLv2RtI6j8LuygtbPr6y90sQvx4Hqt2YY09pqMbIP4uoL0xnqOazqX6g-xxKoaxX8DWWuOBjDLcyTKRmEv4kOM4qLv4Uu6ge4XWvvb3g__',
    heading: 'Detox Digital Coin',
    helperText: 'United States',
    paragraph: 'Detox Digital Coin has identified the first in a series of an additional 20 behavioral health centers (BHCs) for acquisition in prime US locations earmarked for renting to qualified substance use disorder and recovery facilitators.',
    button1Label: 'Trade',
    button2Label: 'Details',
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/472e/2854/079c29c53c6ee44722920046b85b12f4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHfcC0I2WrKkCXd0FK~Y~UtTu9QROL9eO7q-Kc9eo7CFwFG7ZRjKklmY9K7FDoYzmxJ~bNTe54AWDawX~N4aAjnbGNoTMaIOqwqAwalVnCT7HBznBKxOH4KyRY4YJD3hWsFx88LN6-GS9EhzwFvlVBib9kYzhFvE~CJBcdCivwRtJGUNe~JcNkuAEZnftYrRiGrotgCb1CHkxz0xEg3GDDS8qRGHgBoBjmhxjnZoQYfAQk3Pw-LGj5PtAixqnlllsKtWhGeg~yFMdwklxC4JDyMm78cdWA~-1d8KkRT-5xN9J9HUgudM0LS3Lil2BsGbOBIWyLDqbnzOMb5vgiN8KQ__',
    heading: 'Red Frog Beach Portfolio',
    helperText: 'Isla Bastimentos, Bocas del Toro, Panama',
    paragraph: 'We are expanding this environmentally sustainable luxury resort that is home to lush rain forests and pristine beaches.',
    button1Label: 'Trade',
    button2Label: 'Details',
  },
  {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/b8e4/8083/a348af0aa5e35bf8ea0d2b6ac4712216?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jzy~MifrOGFRX1IxygoSNvRH1gv-V3ceR9K5EqcTVS2c1iGbSJ5~cAGBKVDev~cKKtDyHTAY7rig4w-UZuBBxaUB-FjkqwILzpULrZUknHCZ6XFfw9Xfb9zuTs47lk1DMml1Mq1eUJNfRrCDN0V~u1Gmla5GAH6NG9P66PAiLWXCMcNsYWwqA0Ta97KROVt3l6o76dDiDQAzz505hwtN1e60h3wguzQAFNHqfTp7ef9Sg-cUe-ez2kgAkmh8dCJCSawLCuBBlKZUPWC1W9MtvVotOSTRudpbUDRFWabbsw~SjEFPfoB24RvhWl6MogiPAXFAGWQ~kj0CHwmRFuy~wQ__',
    heading: 'AirBC Premium',
    helperText: 'Fort Lauderdale, Florida, USA',
    paragraph: 'We are expanding this environmentally sustainable luxury resort that is home to lush rain forests and pristine beaches.',
    button1Label: 'Trade',
    button2Label: 'Details',
  },
];

const listData = [
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '+45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: highGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '+45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: highGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '+45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: highGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '+45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: highGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '+45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: highGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '-45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: lowGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '-45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: lowGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '-45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: lowGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '-45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: lowGraph, action: 'Trade', },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: '-45', volume: "$24.56M", marketCap: '$27.53B', imageUrl: lowGraph, action: 'Trade', },
];

const CardContainer = () => {
  return (
    <Stack direction='row'>
      {gridData.map((card, index) => (
        <Paper elevation={3} style={{ width: '320px', height: '535px', margin: '10px' }} key={index}>
          <div> {/* Wrap the Card in a container */}
            <Card>
              <CardMedia component="img" style={{ height: "200px" }} image={card.imageUrl} alt="Card Image" />
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.helperText}
                </Typography>
                <Typography variant="body1" style={{ height: "100px", overflow: "hidden" }} color="text.secondary" paragraph>
                  {card.paragraph}
                </Typography>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginTop: 10 }}>

                    <Typography variant="body1" color="text.secondary" >
                      Token Name
                    </Typography>
                    <Typography variant="body1"  >
                      PROPC
                    </Typography>
                  </div>

                  <div style={{ marginTop: 10 }}>

                    <Typography variant="body1" color="text.secondary" >
                      Token Price
                    </Typography>
                    <Typography variant="body1"  >
                      $ 2.03
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ marginTop: 10 }}>

                    <Typography variant="body1" color="text.secondary" >
                      Market Cap
                    </Typography>
                    <Typography variant="body1"  >
                      $1.34M
                    </Typography>
                  </div>

                  <div style={{ marginTop: 10 }}>

                    <Typography variant="body1" color="text.secondary" >
                      Projected APR
                    </Typography>
                    <Typography variant="body1"  >
                      4.5%
                    </Typography>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                  <Button variant="contained" style={{ background: "#2E3A5C" }}>
                    {card.button1Label}
                  </Button>
                  <Button variant="outlined" style={{ color: "#2E3A5C", border: "1px solid #2E3A5C" }}>
                    {card.button2Label}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Paper>
      ))}
    </Stack>
  );
};



const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const ModifiedChip = ({ item }) => {

  if (!item || typeof item !== 'string') {
    return null;
  }

  const changeValue = item.replace(/[+-]/, '');
  const isPositive = item.charAt(0) === '+';
  const isNegative = item.charAt(0) === '-';
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

const MarketTable = ({ data }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24h Change</TableCell>
            <TableCell>Volume (24h)</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>24H Trend</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {/* 1st Column */}
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={ControlSvg} alt="Control Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                  <div style={{ marginLeft: '8px', display: 'flex', flexDirection: "column", alignItems: 'center' }}>

                    <span style={{}}>{item.name}</span>
                    <span style={{ fontSize: "13px" }}>{item.helperText}</span>
                  </div>
                </div>
              </TableCell>
              {/* 2nd Column */}
              <TableCell>{item.price}</TableCell>
              {/* 3rd Column */}
              <TableCell>
                <ModifiedChip item={item.change} />
              </TableCell>
              {/* 4th Column */}
              <TableCell>{item.volume}</TableCell>
              <TableCell>{item.marketCap}</TableCell>
              {/* 5th Column */}
              <TableCell>
                <img src={item.imageUrl} alt="Control Icon" style={{ width: '200px', height: '50px', marginRight: '8px' }} />
              </TableCell>
              <TableCell>
                <Typography variant="p" style={{ color: "#2E3A5C" }}>
                  {item.action}
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


function Market() {
  const [value, setValue] = useState(0);
  const [isListView, setIsListView] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSwitchView = (isList) => {
    setIsListView(isList);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <Stack direction="column" spacing={5} style={{ width: "100%" }}>
        <Stack direction="row" style={{ width: "96%" }} justifyContent={'space-between'}>
          <Tabs value={value} onChange={handleChange} >
            <Tab label="Gainers" />
            <Tab label="Losers" />
            <Tab label="New Listing" />
          </Tabs>
          <TabPanel value={value} index={0}>
            {/* Content for Gainer tab */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Content for Losers tab */}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* Content for New Listing tab */}
          </TabPanel>
          <Stack direction="row" spacing={1}>

            <TextField
              variant="outlined"
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained"
              style={{ marginRight: '10px', backgroundColor: "#fff", border: "1px solid #2E3A5C" }}
              className={isListView ? "activebtn" : ""}
              onClick={() => handleSwitchView(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21.5 4H7.5" stroke={isListView ? "white" : "#2E3A5C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5 12H7.5" stroke={isListView ? "white" : "#2E3A5C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5 20H7.5" stroke={isListView ? "white" : "#2E3A5C"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 4.5 2.75)" fill="#2E3A5C" />
                <circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 4.5 10.75)" fill="#2E3A5C" />
                <circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 4.5 18.75)" fill="#2E3A5C" />
              </svg>
            </Button>
            <Button variant="outlined"
              className={!isListView ? "activebtn" : ""}
              onClick={() => handleSwitchView(false)}
              style={{ marginRight: '10px', backgroundColor: "#fff", border: "1px solid #2E3A5C",}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                <path fillRule="evenodd" stroke={!isListView ? "white" : "#2E3A5C"} clipRule="evenodd" d="M4 11.5C2.61929 11.5 1.5 10.3807 1.5 9V4C1.5 2.61929 2.61929 1.5 4 1.5H9C10.3807 1.5 11.5 2.61929 11.5 4V9C11.5 10.3807 10.3807 11.5 9 11.5H4ZM3.5 9C3.5 9.27614 3.72386 9.5 4 9.5L9 9.5C9.27614 9.5 9.5 9.27614 9.5 9V4C9.5 3.72386 9.27614 3.5 9 3.5L4 3.5C3.72386 3.5 3.5 3.72386 3.5 4L3.5 9Z" fill="white" />
                <path fillRule="evenodd" stroke={!isListView ? "white" : "#2E3A5C"} clipRule="evenodd" d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H9C10.3807 22.5 11.5 21.3807 11.5 20V15C11.5 13.6193 10.3807 12.5 9 12.5H4C2.61929 12.5 1.5 13.6193 1.5 15V20ZM4 20.5C3.72386 20.5 3.5 20.2761 3.5 20L3.5 15C3.5 14.7239 3.72386 14.5 4 14.5H9C9.27614 14.5 9.5 14.7239 9.5 15V20C9.5 20.2761 9.27614 20.5 9 20.5H4Z" fill="white" />
                <path fillRule="evenodd" stroke={!isListView ? "white" : "#2E3A5C"} clipRule="evenodd" d="M12.5 20C12.5 21.3807 13.6193 22.5 15 22.5H20C21.3807 22.5 22.5 21.3807 22.5 20V15C22.5 13.6193 21.3807 12.5 20 12.5H15C13.6193 12.5 12.5 13.6193 12.5 15V20ZM15 20.5C14.7239 20.5 14.5 20.2761 14.5 20V15C14.5 14.7239 14.7239 14.5 15 14.5H20C20.2761 14.5 20.5 14.7239 20.5 15V20C20.5 20.2761 20.2761 20.5 20 20.5H15Z" fill="white" />
                <path fillRule="evenodd" stroke={!isListView ? "white" : "#2E3A5C"} clipRule="evenodd" d="M12.5 9C12.5 10.3807 13.6193 11.5 15 11.5H20C21.3807 11.5 22.5 10.3807 22.5 9V4C22.5 2.61929 21.3807 1.5 20 1.5H15C13.6193 1.5 12.5 2.61929 12.5 4V9ZM15 9.5C14.7239 9.5 14.5 9.27614 14.5 9V4C14.5 3.72386 14.7239 3.5 15 3.5L20 3.5C20.2761 3.5 20.5 3.72386 20.5 4V9C20.5 9.27614 20.2761 9.5 20 9.5L15 9.5Z" fill="white" />
              </svg>
            </Button>
          </Stack>
        </Stack>
        <Stack direction="column">
          {isListView ? (
            <MarketTable data={listData} />
          ) : (
            <>
              <CardContainer />
              <CardContainer />
              <CardContainer />
            </>
          )}
        </Stack>
        <Stack alignItems="center">

          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </Stack>
    </>
  )
}

export default Market