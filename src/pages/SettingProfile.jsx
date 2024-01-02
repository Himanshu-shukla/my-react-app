import React from 'react'
import NavigationBar from '../components/NavigationBar';
import { AppBar, Checkbox, Grid, FormControlLabel, FormGroup, Tab, Tabs, Box, Container, Paper, FormControl, InputLabel, OutlinedInput, InputAdornment, TextField, Button, Typography, Stack, Avatar, IconButton } from '@mui/material';
import AddPhotoIcon from '@mui/icons-material/AddPhotoAlternate';
import DatePicker from '@mui/lab/DatePicker';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './SettingProfile.css'


const RowsWithButtons = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Row 1 */}
        <Grid item xs={12} container justifyContent="space-between">
          <Grid item xs={8}>
            <Typography variant="h5">Email</Typography>
            <Typography variant="body1">
              A verification code will be sent to your provided email.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" disabled style={verified} color="primary">
              Verified
            </Button>
          </Grid>
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} container justifyContent="space-between">
          <Grid item xs={8}>
            <Typography variant="h5">Phone Number</Typography>
            <Typography variant="body1">
              A verification code will be sent to your provided phone number.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" style={verify} color="primary">
              Verify
            </Button>
          </Grid>
        </Grid>

        {/* Row 3 */}
        <Grid item xs={12} container justifyContent="space-between">
          <Grid item xs={8}>
            <Typography variant="h5">Identification Document</Typography>
            <Typography variant="body1">
              Submit back and front side of the your government-issued identification document.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" style={verify} color="primary">
              Verify
            </Button>
          </Grid>
        </Grid>

        {/* Row 4 */}
        <Grid item xs={12} container justifyContent="space-between">
          <Grid item xs={8}>
            <Typography variant="h5">Passport</Typography>
            <Typography variant="body1">
              Submit clear image of your passport.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" style={submitted} color="primary">
              Submitted
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};


const CheckBoxesRow = () => {
  const [isChecked1, setIsChecked1] = React.useState(false);
  const [isChecked2, setIsChecked2] = React.useState(false);
  const [isChecked3, setIsChecked3] = React.useState(false);

  const handleCheckboxChange = (checkboxNumber) => {
    switch (checkboxNumber) {
      case 1:
        setIsChecked1(!isChecked1);
        break;
      case 2:
        setIsChecked2(!isChecked2);
        break;
      case 3:
        setIsChecked3(!isChecked3);
        break;
      default:
        break;
    }
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked1}
            onChange={() => handleCheckboxChange(1)}
            color="primary"
          />
        }
        label="Transaction"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked2}
            onChange={() => handleCheckboxChange(2)}
            color="primary"
          />
        }
        label="Balance Updates"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked3}
            onChange={() => handleCheckboxChange(3)}
            color="primary"
          />
        }
        label="Security alerts"
      />
    </FormGroup>
  );
};

function SettingProfile({ defaultTab = 0 }) {
  const [value, setValue] = React.useState(defaultTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <NavigationBar />
      <Container>
        <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
          <Typography variant="h4" gutterBottom>
            Setting
          </Typography>
          <Typography variant="p" style={{ color: 'gray' }} gutterBottom>
            Take a look at your profile, manage wallet settings and complete your verification.
          </Typography>
          <Box>
            <Tabs TabIndicatorProps={{ style: { backgroundColor: "white" } }} value={value} onChange={handleChange} orientation="horizontal">
              <Tab label="Profile" style={{
                backgroundColor: value === 0 ? '#2E3A5C' : 'white',
                color: value === 0 ? 'white' : '#2E3A5C',
                borderRadius: '32px 0px 0px 32px',
              }} />
              <Tab label="Wallet" style={{
                backgroundColor: value === 1 ? '#2E3A5C' : 'white',
                color: value === 1 ? 'white' : '#2E3A5C',
              }} />
              <Tab label="Verification" style={{
                backgroundColor: value === 2 ? '#2E3A5C' : 'white',
                color: value === 2 ? 'white' : '#2E3A5C',
                borderRadius: '0px 32px 32px 0px',
              }} />
            </Tabs>
            <TabPanel value={value} index={0}>
              {/* Profile Tab */}
              <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column" alignItems="left">
                    <Typography variant="h5" gutterBottom>
                      Profile Photo
                    </Typography>
                    <Typography variant="p" >
                      This image will be displayed on your profile
                    </Typography>
                    <Stack direction="row">

                      <Button
                        variant="outlined"
                        style={changePhoto}
                        startIcon={<AddPhotoAlternateIcon />}
                      >
                        Change Photo
                      </Button>
                      <Typography variant="p" >
                        JPG, PNG or WEBP. 2MB Max
                      </Typography>
                    </Stack>

                  </Stack>
                  <Avatar />

                </Stack>

                <Stack direction="column">
                  <Typography variant="h5" gutterBottom>
                    Personal Information
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    Update your personal information here.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Name
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="name" label="Name" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Email
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="email" label="Email" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Phone Number
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="phoneNumber" label="Phone Number" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Date of Birth
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="dateofbirth" label="Date of Birth" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Country
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="country" label="Country" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    City
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="city" label="City" />
                  </FormControl>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" marginTop={2}>
                <Button variant="contained" color="primary" style={cancelbtn}>
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" style={savebtn}>
                  Save Changes
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Stack spacing={2}>


                <Stack direction="column">
                  <Typography variant="h5" gutterBottom>
                    Wallet Information
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    Update your wallet information here.
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Display Currency
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="name" label="Name" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Default Payment Method
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="email" label="Email" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Transaction Pin
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="phoneNumber" label="Phone Number" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Payment Limits (Optional)
                  </Typography>
                  <FormControl fullWidth variant="outlined" margin="normal">
                    <OutlinedInput id="dateofbirth" label="Date of Birth" />
                  </FormControl>
                  <Typography variant="subtitle1" gutterBottom>
                    Notification Preferences
                  </Typography>
                  <CheckBoxesRow />
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="space-between" marginTop={2}>
                <Button variant="contained" color="primary" style={cancelbtn}>
                  Cancel
                </Button>
                <Button variant="contained" color="secondary" style={savebtn}>
                  Save Changes
                </Button>
              </Stack>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <RowsWithButtons />
            </TabPanel>
          </Box>

        </Paper>
      </Container>
    </>
  );
}



const savebtn = {
  borderRadius: '6px',
  background: '#2E3A5C',
  width: '300px'
};

const verified = {
  borderRadius: '60px',
  border: '1px solid #BEC2CC',
  background: ' #EAEBEF',
};

const verify = {
  borderRadius: '60px',
  border: '1px solid #2E3A5C',
  background: ' #2E3A5C',
};

const submitted = {
  borderRadius: '60px',
  border: '1px solid #BEC2CC',
  background: ' #fff',
  color : '#2E3A5C'
};

const cancelbtn = {
  borderRadius: '6px',
  border: '1.5px solid #2E3A5C',
  color: '#2E3A5C',
  background: "#fff",
  width: '300px'
};


const changePhoto = {

  display: 'flex',
  width: '185px',
  height: '50px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '32px',
  border: '1px solid  #2E3A5C',
  background: '#FFF',
  color: '#2E3A5C'
};



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}


export default SettingProfile