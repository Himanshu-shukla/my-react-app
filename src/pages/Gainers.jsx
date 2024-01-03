import NavigationBar from '../components/NavigationBar';
import React, { useState } from 'react';
import { Tabs, Tab, Card, Divider, Grid, IconButton, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { Table, TableBody, TableCell, Button, TableContainer, TableHead, TableRow, Paper, Chip, Avatar } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';
import ControlSvg from '../assets/Control.svg'
import ContainerSvg from '../assets/Container.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VisibilityIcon from '@mui/icons-material/Visibility';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const cardData = [
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

const cardData2 = [
  {
    heading: 'Card 1 Heading',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    languages: ['Telegram', 'X', 'Reddit', 'YouTube', 'LinkedIn', 'Facebook', 'Instagram', 'Bitcoin', 'Medium'],
  },
  {
    heading: 'Card 2 Heading',
    paragraph: 'Another paragraph for Card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];


const TopCards = () => {
  return (
    <Stack direction="row" mt={2} style={{ padding: "15px" }}>
      {/* 1st Card */}
      <Card style={{ width: 'calc(50% * 2 + 5px)', height: '155px', background: "#4ba673", color: "#fff", borderRadius: "7px" }}>
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
            icon={<ArrowUpwardIcon />}
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
              PROPC
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                24 H
              </Typography>
              <KeyboardArrowDownIcon color="primary" />
            </Stack>
          </Stack>

          <Grid container spacing={1} justifyContent="space-between" alignItems="center" marginTop={7}>
            <Grid item xs={3}>
              <Typography fontWeight="700" variant="h4">$2.38</Typography>

            </Grid>
            <Grid item xs={5} style={{ textAlign: 'right' }}>
              <Chip
                icon={<ArrowUpwardIcon fontSize='10px' />}
                label="5.26%"
                style={{ fontSize: "10px", backgroundColor: '#E7F6EC', color: '#036B26', marginLeft: "35px", height: "22px", width: "65px" }}
              />
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'right' }}>
              <StarIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* 3rd Card */}
      <Card style={{ width: 'calc(50% - 5px)', height: '155px' }}>
        <CardContent>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <Typography variant="body2" color="text.secondary">
              PROPC
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                24 H
              </Typography>
              <KeyboardArrowDownIcon color="primary" />
            </Stack>
          </Stack>

          <Grid container spacing={1} justifyContent="space-between" alignItems="center" marginTop={7}>
            <Grid item xs={3}>
              <Typography fontWeight="700" variant="h4">$2.38</Typography>

            </Grid>
            <Grid item xs={5} style={{ textAlign: 'right' }}>
              <Chip
                icon={<ArrowUpwardIcon fontSize='10px' />}
                label="5.26%"
                style={{ fontSize: "10px", backgroundColor: '#E7F6EC', color: '#036B26', marginLeft: "35px", height: "22px", width: "65px" }}
              />
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'right' }}>
              <StarIcon />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

const CardContainer2 = () => {
  return (
    <Stack direction="row" mt={7} ml={1}>

      <Paper elevation={3} style={{ display: 'flex', gap: '10px', padding: '10px', width: "50%" }}>
        <Card  >
          <CardContent>
            <Typography variant="h6" style={{ fontSize: "16px", fontWeight: "700" }} component="div">
              Join Our Community
            </Typography>
            <Typography variant="body1" style={{ fontSize: "12px" }} paragraph>
              The  Juna Global Community is home to millions of users from 200+
              countries with support 20+ languages.
            </Typography>
            <Stack direction="column" spacing={2}>
              <Divider />
              <Typography>English Community</Typography>

              <Stack direction="row" spacing={1} alignItems="center" marginTop={1}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0C18.63 0 24 5.37 24 12Z" fill="url(#paint0_linear_394_23532)" />
                  <defs>
                    <linearGradient id="paint0_linear_394_23532" x1="15.517" y1="3.793" x2="9.517" y2="17.7928" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#37AEE2" />
                      <stop offset="1" stop-color="#1E96C8" />
                    </linearGradient>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_394_23536)">
                    <path d="M6.68884 6.1936L15.3559 17.7796H17.3185L8.65145 6.1936H6.68884Z" fill="black" />
                    <path d="M11.9866 0.131836C5.43937 0.131836 0.131897 5.43931 0.131897 11.9865C0.131897 18.5337 5.43937 23.8412 11.9866 23.8412C18.5338 23.8412 23.8413 18.5337 23.8413 11.9865C23.8413 5.43931 18.5338 0.131836 11.9866 0.131836ZM14.8928 18.7052L10.9471 13.4294L6.06346 18.7052H4.80818L10.3862 12.6794L4.84321 5.26781H9.11538L12.7492 10.1267L17.2466 5.26781H18.5019L13.3101 10.8769L19.165 18.7052H14.8928Z" fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_394_23536">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_394_23540)">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FF4500" />
                    <path d="M19.9828 12.1144C19.9828 11.1416 19.1961 10.3691 18.2375 10.3691C17.7655 10.3691 17.3361 10.555 17.0215 10.8555C15.8199 9.99709 14.1745 9.43922 12.3433 9.36775L13.1444 5.61949L15.7481 6.17735C15.7769 6.83549 16.3204 7.36482 16.9929 7.36482C17.6796 7.36482 18.2375 6.80695 18.2375 6.12002C18.2375 5.43335 17.6796 4.87549 16.9929 4.87549C16.5065 4.87549 16.0772 5.16162 15.8769 5.57655L12.9729 4.96135C12.8871 4.94695 12.8012 4.96135 12.7439 5.00429C12.6724 5.04722 12.6295 5.11869 12.6153 5.20455L11.7281 9.38189C9.86841 9.43922 8.19455 9.99709 6.97855 10.8699C6.66388 10.5694 6.23455 10.3835 5.76255 10.3835C4.78975 10.3835 4.01721 11.1702 4.01721 12.1288C4.01721 12.844 4.44628 13.4448 5.04735 13.7168C5.01855 13.8883 5.00441 14.06 5.00441 14.2462C5.00441 16.9355 8.13748 19.1246 12.0001 19.1246C15.8628 19.1246 18.9959 16.9499 18.9959 14.2462C18.9959 14.0744 18.9815 13.8883 18.9529 13.7168C19.5537 13.4448 19.9828 12.8296 19.9828 12.1144ZM7.99428 13.359C7.99428 12.6723 8.55215 12.1144 9.23908 12.1144C9.92575 12.1144 10.4836 12.6723 10.4836 13.359C10.4836 14.0456 9.92575 14.6038 9.23908 14.6038C8.55215 14.6179 7.99428 14.0456 7.99428 13.359ZM14.9615 16.6638C14.1031 17.5222 12.4721 17.5795 12.0001 17.5795C11.5137 17.5795 9.88281 17.5078 9.03855 16.6638C8.91001 16.535 8.91001 16.3347 9.03855 16.2059C9.16735 16.0774 9.36761 16.0774 9.49641 16.2059C10.0401 16.7496 11.1847 16.9355 12.0001 16.9355C12.8156 16.9355 13.9743 16.7496 14.5036 16.2059C14.6324 16.0774 14.8327 16.0774 14.9615 16.2059C15.0759 16.3347 15.0759 16.535 14.9615 16.6638ZM14.7324 14.6179C14.0457 14.6179 13.4879 14.06 13.4879 13.3734C13.4879 12.6867 14.0457 12.1288 14.7324 12.1288C15.4193 12.1288 15.9772 12.6867 15.9772 13.3734C15.9772 14.0456 15.4193 14.6179 14.7324 14.6179Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_394_23540">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_394_23544)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FF0002" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.348 14.0899L10.3475 9.5625L14.6705 11.834L10.348 14.0899ZM19.84 8.77797C19.84 8.77797 19.6835 7.66765 19.204 7.17871C18.5955 6.53669 17.9135 6.53366 17.601 6.4964C15.362 6.33325 12.0035 6.33325 12.0035 6.33325H11.9965C11.9965 6.33325 8.638 6.33325 6.399 6.4964C6.086 6.53366 5.4045 6.53669 4.7955 7.17871C4.316 7.66765 4.16 8.77797 4.16 8.77797C4.16 8.77797 4 10.0822 4 11.3858V12.6085C4 13.9126 4.16 15.2163 4.16 15.2163C4.16 15.2163 4.316 16.3266 4.7955 16.8156C5.4045 17.4576 6.204 17.4375 6.56 17.5044C7.84 17.6283 12 17.6666 12 17.6666C12 17.6666 15.362 17.6615 17.601 17.4984C17.9135 17.4606 18.5955 17.4576 19.204 16.8156C19.6835 16.3266 19.84 15.2163 19.84 15.2163C19.84 15.2163 20 13.9126 20 12.6085V11.3858C20 10.0822 19.84 8.77797 19.84 8.77797Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_394_23544">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12Z" fill="#1275B1" />
                  <path d="M9.46395 7.26911C9.46395 7.97003 8.85638 8.53823 8.10698 8.53823C7.35753 8.53823 6.75 7.97003 6.75 7.26911C6.75 6.5682 7.35753 6 8.10698 6C8.85638 6 9.46395 6.5682 9.46395 7.26911Z" fill="white" />
                  <path d="M6.93555 9.47119H9.25513V16.5001H6.93555V9.47119Z" fill="white" />
                  <path d="M12.9897 9.47108H10.6701V16.5H12.9897C12.9897 16.5 12.9897 14.2872 12.9897 12.9037C12.9897 12.0732 13.2733 11.2391 14.4047 11.2391C15.6833 11.2391 15.6756 12.3259 15.6696 13.1678C15.6618 14.2683 15.6804 15.3914 15.6804 16.5H18V12.7903C17.9804 10.4216 17.3631 9.33008 15.3325 9.33008C14.1266 9.33008 13.379 9.87758 12.9897 10.3729V9.47108Z" fill="white" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.35603 1.49756 6.80845 2.49269 4.86616 4.28661C2.92386 6.08053 1.72985 8.54118 1.52262 11.177C1.31538 13.8129 2.11019 16.4299 3.74828 18.5053C5.38637 20.5807 7.74713 21.9617 10.359 22.3725V15.0345H7.69501V12H10.3605V9.687C10.3605 7.056 11.928 5.601 14.3265 5.601C15.4755 5.601 16.677 5.8065 16.677 5.8065V8.391H15.3525C14.0475 8.391 13.6425 9.201 13.6425 10.0305V12H16.554L16.089 15.0345H13.641V22.3725C16.1108 21.9814 18.3599 20.7219 19.9839 18.8204C21.6079 16.919 22.5001 14.5005 22.5 12Z" fill="#1877F2" />
                  <path d="M16.0875 15.0346L16.5525 12.0001H13.641V10.0306C13.641 9.20111 14.046 8.39111 15.351 8.39111H16.6755V5.80511C16.6755 5.80511 15.474 5.59961 14.325 5.59961C11.925 5.59961 10.359 7.05461 10.359 9.68561V12.0001H7.69501V15.0346H10.3605V22.3726C11.4478 22.5437 12.5552 22.5437 13.6425 22.3726V15.0346H16.0875Z" fill="white" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V18C1.5 20.4853 3.51472 22.5 6 22.5H18C20.4853 22.5 22.5 20.4853 22.5 18V6C22.5 3.51472 20.4853 1.5 18 1.5Z" fill="url(#paint0_radial_394_23556)" />
                  <path d="M18 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V18C1.5 20.4853 3.51472 22.5 6 22.5H18C20.4853 22.5 22.5 20.4853 22.5 18V6C22.5 3.51472 20.4853 1.5 18 1.5Z" fill="url(#paint1_radial_394_23556)" />
                  <path d="M18 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V18C1.5 20.4853 3.51472 22.5 6 22.5H18C20.4853 22.5 22.5 20.4853 22.5 18V6C22.5 3.51472 20.4853 1.5 18 1.5Z" fill="url(#paint2_radial_394_23556)" />
                  <path d="M17.25 7.875C17.25 8.4963 16.7463 9 16.125 9C15.5037 9 15 8.4963 15 7.875C15 7.25368 15.5037 6.75 16.125 6.75C16.7463 6.75 17.25 7.25368 17.25 7.875Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92895 14.0711 8.25 12 8.25C9.92895 8.25 8.25 9.92895 8.25 12C8.25 14.0711 9.92895 15.75 12 15.75ZM12 14.25C13.2427 14.25 14.25 13.2427 14.25 12C14.25 10.7573 13.2427 9.75 12 9.75C10.7573 9.75 9.75 10.7573 9.75 12C9.75 13.2427 10.7573 14.25 12 14.25Z" fill="white" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 11.7C4.5 9.17978 4.5 7.91963 4.99047 6.95705C5.4219 6.11031 6.11031 5.4219 6.95705 4.99047C7.91963 4.5 9.17978 4.5 11.7 4.5H12.3C14.8202 4.5 16.0804 4.5 17.0429 4.99047C17.8897 5.4219 18.5781 6.11031 19.0095 6.95705C19.5 7.91963 19.5 9.17978 19.5 11.7V12.3C19.5 14.8202 19.5 16.0804 19.0095 17.0429C18.5781 17.8897 17.8897 18.5781 17.0429 19.0095C16.0804 19.5 14.8202 19.5 12.3 19.5H11.7C9.17978 19.5 7.91963 19.5 6.95705 19.0095C6.11031 18.5781 5.4219 17.8897 4.99047 17.0429C4.5 16.0804 4.5 14.8202 4.5 12.3V11.7ZM11.7 6H12.3C13.5849 6 14.4583 6.00117 15.1334 6.05632C15.7911 6.11005 16.1274 6.20744 16.362 6.32698C16.9264 6.6146 17.3854 7.07354 17.673 7.638C17.7925 7.8726 17.89 8.2089 17.9437 8.86657C17.9988 9.54172 18 10.4151 18 11.7V12.3C18 13.5849 17.9988 14.4583 17.9437 15.1334C17.89 15.7911 17.7925 16.1274 17.673 16.362C17.3854 16.9264 16.9264 17.3854 16.362 17.673C16.1274 17.7925 15.7911 17.89 15.1334 17.9437C14.4583 17.9988 13.5849 18 12.3 18H11.7C10.4151 18 9.54172 17.9988 8.86657 17.9437C8.2089 17.89 7.8726 17.7925 7.638 17.673C7.07354 17.3854 6.6146 16.9264 6.32698 16.362C6.20744 16.1274 6.11005 15.7911 6.05632 15.1334C6.00117 14.4583 6 13.5849 6 12.3V11.7C6 10.4151 6.00117 9.54172 6.05632 8.86657C6.11005 8.2089 6.20744 7.8726 6.32698 7.638C6.6146 7.07354 7.07354 6.6146 7.638 6.32698C7.8726 6.20744 8.2089 6.11005 8.86657 6.05632C9.54172 6.00117 10.4151 6 11.7 6Z" fill="white" />
                  <defs>
                    <radialGradient id="paint0_radial_394_23556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9 17.25) rotate(-55.3758) scale(19.1397)">
                      <stop stop-color="#B13589" />
                      <stop offset="0.79309" stop-color="#C62F94" />
                      <stop offset="1" stop-color="#8A3AC8" />
                    </radialGradient>
                    <radialGradient id="paint1_radial_394_23556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.25 23.25) rotate(-65.1363) scale(16.9457)">
                      <stop stop-color="#E0E8B7" />
                      <stop offset="0.444662" stop-color="#FB8A2E" />
                      <stop offset="0.71474" stop-color="#E2425C" />
                      <stop offset="1" stop-color="#E2425C" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint2_radial_394_23556" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.375 2.25) rotate(-8.1301) scale(29.1682 6.23877)">
                      <stop offset="0.156701" stop-color="#406ADC" />
                      <stop offset="0.467799" stop-color="#6A45BE" />
                      <stop offset="1" stop-color="#6A45BE" stop-opacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_394_23563)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4733 11.7383C23.4733 18.0263 18.3761 23.1237 12.0886 23.1237C5.80092 23.1237 0.703796 18.0263 0.703796 11.7383C0.703796 5.4504 5.80092 0.353027 12.0886 0.353027C18.3761 0.353027 23.4733 5.4504 23.4733 11.7383ZM14.8237 7.50827C16.4074 8.05216 17.5658 8.86646 17.3385 10.382C17.1735 11.4918 16.556 12.0285 15.7356 12.2164C16.8611 12.8002 17.2448 13.908 16.8883 15.2475C16.2116 17.1752 14.6029 17.3375 12.4632 16.9346L11.9437 19.0067L10.6894 18.695L11.2018 16.6506C10.8767 16.5701 10.5444 16.484 10.202 16.3922L9.68751 18.4466L8.43471 18.1348L8.95354 16.0583L6.42728 15.4233L7.05046 13.9925C7.05046 13.9925 7.97518 14.2367 7.96234 14.2189C8.31753 14.3064 8.47544 14.0758 8.53763 13.9228L9.94551 8.29844C9.96118 8.03289 9.86899 7.69837 9.3609 7.57166C9.38017 7.55811 8.44975 7.34598 8.44975 7.34598L8.78349 6.01127L11.3133 6.63556L11.8279 4.58259L13.0814 4.89438L12.5775 6.90678C12.9149 6.98294 13.2536 7.06053 13.5831 7.1424L14.0833 5.14281L15.3375 5.45461L14.8237 7.50827ZM11.8227 10.9329C12.677 11.1595 14.5361 11.6524 14.8601 10.36C15.1907 9.03771 13.3846 8.63839 12.5002 8.44286C12.4001 8.4207 12.3116 8.40114 12.2395 8.38322L11.6149 10.8789C11.6744 10.8936 11.7443 10.9122 11.8227 10.9329ZM10.8547 14.9512C11.8779 15.2207 14.1159 15.8102 14.4721 14.3862C14.8366 12.9301 12.6667 12.4451 11.6079 12.2085C11.4898 12.1821 11.3852 12.1587 11.2997 12.1375L10.6108 14.8881C10.6808 14.9054 10.763 14.927 10.8547 14.9512Z" fill="#F7931A" />
                  </g>
                  <defs>
                    <clipPath id="clip0_394_23563">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM18 7.44609L17.0438 8.3625C16.9594 8.42578 16.9195 8.52891 16.9359 8.62969V15.3727C16.9195 15.4758 16.9594 15.5789 17.0438 15.6398L17.9813 16.5563V16.7602H13.275V16.5656L14.243 15.6258C14.3391 15.5297 14.3391 15.5016 14.3391 15.3586V9.90234L11.6437 16.7367H11.2805L8.14453 9.90234V14.4844C8.11641 14.6766 8.18437 14.8711 8.32031 15.0094L9.58125 16.5352V16.7391H6V16.5352L7.26094 15.0094C7.32737 14.9408 7.37681 14.8575 7.4053 14.7664C7.43379 14.6752 7.44054 14.5786 7.425 14.4844V9.1875C7.44141 9.03984 7.38516 8.89687 7.27266 8.79609L6.15234 7.44609V7.24219H9.63281L12.3187 13.1367L14.6836 7.24688H18V7.44609Z" fill="black" />
                </svg>
              </Stack>
              <Button variant="contained" disableElevation style={{ color: "#00A650", background: "#fff", width: "250px" }} >
                View all 20+ Languages <ArrowForwardIcon />
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Paper>

      <Paper elevation={3} style={{ display: 'flex', gap: '10px', padding: '10px', width: "50%" }}>
        <Card  >
          <CardContent>
            <Typography variant="h6" style={{ fontSize: "16px", fontWeight: "700" }} component="div">
              24/7 Customer Service
            </Typography>
            <Typography variant="body1" style={{ fontSize: "12px" }} paragraph>
              Your questions, answered. Contact Juna customer support with your questions at any time.
            </Typography>
            <Divider />

            <Stack direction="column" mt={12}>

              <Button variant="contained" disableElevation style={{ color: "#00A650", background: "#fff", width: "250px" }} >
                Juna Help Center <ArrowForwardIcon />
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Paper>
    </Stack>
  );
};

const CardContainer = () => {
  return (
    <Stack direction='row'>
      {cardData.map((card, index) => (
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


const data = [
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: 45, volume: "$24,567,990.09", imageUrl: 'https://example.com/image.jpg' },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: 45, volume: "$24,567,990.09", imageUrl: 'https://example.com/image.jpg' },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: 45, volume: "$24,567,990.09", imageUrl: 'https://example.com/image.jpg' },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: 45, volume: "$24,567,990.09", imageUrl: 'https://example.com/image.jpg' },
  { name: 'PROPC', helperText: 'Propchain', price: '$2.03', change: 45, volume: "$24,567,990.09", imageUrl: 'https://example.com/image.jpg' },
];

const HomeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>24 Hr Change</TableCell>
            <TableCell>Volume 24 Hr</TableCell>
            <TableCell>24 Hr Trend</TableCell>
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
                <Chip
                  icon={<ArrowUpwardIcon style={{ backgroundColor: '#E7F6EC', color: '#036B26' }}
                  />}
                  label={`${item.change}%`}
                  style={{ backgroundColor: '#E7F6EC', color: '#036B26' }}
                />
              </TableCell>
              {/* 4th Column */}
              <TableCell>{item.volume}</TableCell>
              {/* 5th Column */}
              <TableCell>
                <img src={ContainerSvg} alt="Control Icon" style={{ width: '200px', height: '50px', marginRight: '8px' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

function Gainers({ intialTab = 0 }) {
  const [value, setValue] = useState(intialTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <Stack direction="column" style={{ width: "100%" }}>
        <TopCards ></TopCards>
        <div>
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
        </div>
        <HomeTable></HomeTable>
        <Stack direction="row" mt={5} style={{ width: "96%" }} justifyContent="space-between">
          <Typography>Featured Listing</Typography>
          <Button variant="text" style={{ color: "#000" }}>
            See All
            <KeyboardArrowRightIcon />
          </Button>
        </Stack>
        <CardContainer></CardContainer>
        <CardContainer2></CardContainer2>
      </Stack>
    </>
  );
}

export default Gainers