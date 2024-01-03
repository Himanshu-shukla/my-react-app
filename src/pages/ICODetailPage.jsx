import React, { useState } from 'react';
import { styled } from "@mui/system";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import NavigationBar from "../components/NavigationBar"
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import TelegramIcon from '@mui/icons-material/Telegram';
import CloseIcon from '@mui/icons-material/Close';
import './ICODetailPage.css'

const useStyles = styled((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB', // Set the text color
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#2E3A5C', // Set the background color
    backgroundColor: '#F9FAFB', // Set the text color
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    marginLeft: 0,
    marginRight: 20,
    width: '20%',
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  widePaper: {
    margin: theme.spacing(2),
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    height: "fit-content"
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: "50%"
  },
  badgesRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  tag: {
    marginRight: theme.spacing(1),
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  tagText: {
    color: theme.palette.common.white,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginTop: theme.spacing(2),
    borderRadius: "6px",
    border: "1.5px solid  #2E3A5C",
    background: "#FFF",
  },
  button: {
    marginTop: theme.spacing(2),
    color: "#fff",
    border: "1.5px solid #2E3A5C",
    borderRadius: "6px",
    backgroundColor: "#2E3A5C",
    textTransform: "none"
  },
  icon: {
    color: "#fff",
    border: "1.5px solid #2E3A5C",
    borderRadius: "6px",
    backgroundColor: "#2E3A5C",
    marginRight: theme.spacing(1),
    width: "35px"
  },
  rightContainer: {
    border: '1px solid #2E3A5C', // Border color
    paddingLeft: theme.spacing(3),
    borderRadius: "10px",
    width: "50%"
  },
  headingToken: {
    marginTop: theme.spacing(2),

  },
  counterText: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  buybtn: {
    borderRadius: "6px",
    background: " #2E3A5C",
    color: "#fff",
    width: "90%"
  },
  newText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    letterSpacing: "-0.32px",
    marginTop: theme.spacing(4),
  },
  slider: {
    marginTop: theme.spacing(2),
  },
}));

const ButtonRow = () => {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <Button variant="contained" className={classes.icon} >
        <PublicIcon />

      </Button>
      <Button variant="contained" className={classes.icon} >
        <TelegramIcon />

      </Button>
      <Button variant="contained" className={classes.icon} >
        <CloseIcon />

      </Button>
      <Button variant="contained" className={classes.icon}>
        <GitHubIcon />

      </Button>
    </div>
  );
};

const TwoPapers = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left Paper */}
      <Paper style={{ flex: '1', padding: '20px', borderRadius: "10px" }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              NAME
            </Typography>
            <Typography variant="body1" align="right">
              Animalia
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              SYMBOL
            </Typography>
            <Typography variant="body1" align="right">
              ANIM
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              ADDRESS
            </Typography>
            <Typography variant="body1" align="right">
              E28aE7C526E8aEe4EC5EaE878eDB
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              TOTAL SUPPLY
            </Typography>
            <Typography variant="body1" align="right">
              87 000 000 ANIM
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Paper style={{ flex: '1', padding: '20px', borderRadius: "10px" }}>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              BLOCKCHAIN
            </Typography>
            <Typography variant="body1" align="right">
              Ethereum
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              FUND RISING GOAL
            </Typography>
            <Typography variant="body1" align="right">
              $56,990
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              TOKEN PRICE
            </Typography>
            <Typography variant="body1" align="right">
              1 USDT = 100 ANM
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1" align="left">
              MINIMUM BUY
            </Typography>
            <Typography variant="body1" align="right">
              0.2 ETH
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

const CustomPaper = () => {
  return (
    <Paper style={{ width: '75%', padding: '20px', }}>
      <Typography variant="h5" gutterBottom>
        Animalia
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        United States
      </Typography>
      <Typography variant="body1" paragraph>
        Animalia is a glimpse into the future of animal agriculture, where technology and compassion work together to create a more sustainable, ethical, and delicious food system. Join us on this journey towards a kinder, smarter way to raise animals.
      </Typography>
      <Typography variant="body1" paragraph>
        This is just a starting point. Animalia is a constantly evolving project, and we invite you to be part of the conversation. Share your ideas, concerns, and hopes for the future of animal agriculture. Let's work together to build a better future for animals, farmers, and our planet.
      </Typography>
      <Typography variant="body1" paragraph>
        From feeding and watering to cleaning and waste removal, robots take care of the time-consuming and physically demanding tasks, freeing up farmers to focus on animal welfare and strategic management.
      </Typography>
      <Typography variant="body1" paragraph>
        Advanced sensors and cameras collect real-time data on individual animals, allowing AI algorithms to detect early signs of illness, stress, or distress. This proactive approach leads to preventative care and improved animal well-being.      </Typography>
    </Paper>
  );
};

function ICODetailPage() {
  const classes = useStyles();
  return (
    <>
      <NavigationBar />
      <Stack direction="column" spacing={4}>

        <Paper className={classes.widePaper}>
          {/* Left Container */}
          <div className={classes.leftContainer}>
            <div className={classes.badgesRow}>
              <Chip label="RWA" className={classes.tag} color="primary" />
              <Chip label="KYC Verified" className={classes.tag} color="secondary" />
              <Chip label="Audited" className={classes.tag} color="error" />
              <Chip label="Public" className={classes.tag} color="success" />
            </div>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="left">

              <Avatar className={classes.avatar} />
              <Typography variant="h6" >Animalia</Typography>
            </Stack>
            <Typography style={{ marginTop: "7px" }} variant="body1">Introducing Animalia, a revolutionary smart farm project that harnesses the power of artificial intelligence and robotics to create a more sustainable, ethical, and efficient future for animal agriculture.</Typography>
            <div>
              <Stack spacing={20} direction="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Blockchain</Typography>
                <Typography variant="body2" align="right">
                  ETHEREUM
                </Typography>
              </Stack>
              <Stack spacing={20} direction="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">Fund Raising Goal</Typography>
                <Typography variant="body2" align="right">
                  $650,000
                </Typography>
              </Stack>
              <Stack spacing={20} direction="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">TOKEN PRICE</Typography>
                <Typography variant="body2" align="right">
                  1 USDT = 100 ANM
                </Typography>
              </Stack>
              <Stack spacing={20} direction="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2">MINIMUM BUY</Typography>
                <Typography variant="body2" align="right">
                  0.2 ETH
                </Typography>
              </Stack>
              {/* Add three more rows like the above */}
            </div>
            <ButtonRow />
            <Button variant="contained" color="primary" className={classes.button}>
              Whitepaper
            </Button>
          </div>

          {/* Right Container */}
          <div className={classes.rightContainer}>
            <Typography variant="body1" className={classes.headingToken}>Token Sale ENDS in</Typography>
            <Typography className={classes.counterText}>20 :: 10 :: 34 :: 07</Typography>
            <Stack direction="row" spacing={9}>

              <Typography className={classes.smallText}>Days   </Typography>
              <Typography className={classes.smallText}>Hours</Typography>
              <Typography className={classes.smallText}>Minutes</Typography>
              <Typography className={classes.smallText}>Seconds</Typography>
            </Stack>
            <Typography className={classes.newText}>Raised 200,00 of $1,500,000</Typography>

            <div className={classes.slider}>
              <Slider value={50} />
            </div>
            <Button variant="contained" className={classes.buybtn}>
              Buy Token Now
            </Button>
          </div>
        </Paper>
        <TwoPapers />
        <CustomPaper />
      </Stack>

    </>
  )
}

export default ICODetailPage