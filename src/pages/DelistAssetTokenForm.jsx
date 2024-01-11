import React from 'react'
import {
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Grid,
  useMediaQuery,
  Box,
  Radio,
  Stack,
  RadioGroup,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function DelistAssetTokenForm({ initialStep = 0 }) {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const steps = ['Asset Selection', 'Delisting Reasons', 'Delisting Details', 'Confirmation and Finalisation'];
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Container>
      <Stack m={5} direction="row" justifyContent="space-between">
        <Link to="/">
          <Button style={returnbtn}>
            <ArrowBackIcon style={arrowIconStyle} />
            Return to Home
          </Button>
        </Link>
        <Button >Eng</Button>
      </Stack>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5">All steps completed</Typography>
          </div>
        ) : (
          <div>
            {/* Step Content 1 */}
            {activeStep === 0 && (
              <Stack
                container
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  ml: isLargeScreen ? 45 : 0,
                  mt: 5,
                  width: isLargeScreen ? '35%' : '100%',
                  mx: 'auto',
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="p">Select Tokenized Asset to Delist</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Choose the asset you want to remove" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Token Ticker Symbol (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Enter the token symbol" />
                </Grid>

              </Stack>
            )}

            {/* Step Content 2 */}
            {activeStep === 1 && (
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  ml: isLargeScreen ? 45 : 0,
                  mt: 5,
                  width: isLargeScreen ? '35%' : '100%',
                  mx: 'auto',
                }} >
                <Grid item xs={12}>
                  <Typography variant="P">Delisting Reason</Typography>
                </Grid>
                <RadioGroup
                  aria-label="options"
                  name="options"
                  value={selectedValue}
                  onChange={handleChange}
                  column
                >
                  <FormControlLabel value="Market Conditions" control={<Radio />} label="Market Conditions" />
                  <FormControlLabel value="Change in Business Strategy" control={<Radio />} label="Change in Business Strategy" />
                  <FormControlLabel value="Regulatory Non-Compliance" control={<Radio />} label="Regulatory Non-Compliance" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>

                <Grid item xs={12}>
                  <Typography variant="p">Please Explain</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Give other reasons" />
                </Grid>
              </Grid>
            )}

            {activeStep === 2 && (
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  ml: isLargeScreen ? 45 : 0,
                  mt: 5,
                  width: isLargeScreen ? '35%' : '100%',
                  mx: 'auto',
                }}>
                <Grid item xs={12}>
                  <Typography variant="p">Market Conditions (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Give other reasons" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Business Strategy Changes (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Give other reasons" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Regulatory Concerns (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Give other reasons" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Additional Information (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Give other reasons" />
                </Grid>
              </Grid>
            )}

            {activeStep === 3 && (
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  ml: isLargeScreen ? 45 : 0,
                  mt: 5,
                  width: isLargeScreen ? '35%' : '100%',
                  mx: 'auto',
                }}>

                <Grid item xs={12}>
                  <Typography variant="p">Confirmation</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="I understand that delisting may impact the liquidity 
and value of the tokenized asset" />
                  <FormControlLabel control={<Checkbox />} label="I acknowledge and accept the platform's delisting 
procedure and fees (if applicable)" />
                </Grid>
              </Grid>
            )}

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: "35px", marginLeft: "10px", height: '10vh' }}>
              <Button style={nextbtn} onClick={handleNext} disabled={activeStep === steps.length - 1}>
                Submit Delisting Request
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

const nextbtn = {
  borderRadius: '6px',
  background: '#2E3A5C',
  color: "#fff",
  width: "390px",
  position: "relative",
  right: "5px"

}

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

export default DelistAssetTokenForm