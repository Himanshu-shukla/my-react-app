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
  Box,
  Stack,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function AssetDetailForm({ initialStep = 0 }) {
  const steps = ['Asset Details', 'Technology & Infrastructure', 'Crop & LiveStock', 'Blockchain Details', 'KYC Verification'];
  const [activeStep, setActiveStep] = React.useState(initialStep);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Stack m={5} direction="row" justifyContent="space-between">

        <Button style={returnbtn}>
          <ArrowBackIcon style={arrowIconStyle} />
          Return to Home</Button>
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
              <Stack container spacing={2} justifyContent="center" ml={45} mt={5} width={"35%"}>
                <Grid item xs={12}>
                  <Typography variant="p">Asset Name (Nickname)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Enter Asset Name" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Asset Location (Country, City, Address)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Enter complete physical address" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Asset Size</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Enter the total land area in hectares" />
                </Grid>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="p">Asset Ownership Documents</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                          width: '375px',
                          height: '100px',
                          background: '#fff',
                          color: '#2E3A5C',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                        <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                          Click to Upload or drag and drop
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">Assets License/Permits</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                          width: '375px',
                          height: '100px',
                          background: '#fff',
                          color: '#2E3A5C',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                        <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                          Click to Upload or drag and drop
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">Underline Asset Value</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Number" variant="outlined" fullWidth placeholder="Estimate underline asset value" />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">Supporting Document (Audits, Tax Paper, Evaluation Report.</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                          width: '375px',
                          height: '100px',
                          background: '#fff',
                          color: '#2E3A5C',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                        <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                          Click to Upload or drag and drop
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="p">Asset or Company Logo</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{
                          width: '375px',
                          height: '100px',
                          background: '#fff',
                          color: '#2E3A5C',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                        <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                          Click to Upload or drag and drop
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>

                </Grid>
              </Stack>
            )}

            {/* Step Content 2 */}
            {activeStep === 1 && (
              <Grid container spacing={2} justifyContent="center" ml={45} mt={5} width={"35%"}>
                <Grid item xs={12}>
                  <Typography variant="p">Select all applicable technologies implemented on your farm</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="Sensor" />
                  <FormControlLabel control={<Checkbox />} label="Automation" />
                  <FormControlLabel control={<Checkbox />} label="AI" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="P">Upload diagrams or specifications outlining your smart farm technology infrastructure</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        width: '375px',
                        height: '100px',
                        background: '#fff',
                        color: '#2E3A5C',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                      <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                        Click to Upload or drag and drop
                      </Typography>
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Irrigation System</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="Drip Irrigation" />
                  <FormControlLabel control={<Checkbox />} label="Flood Irrigation" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Renewable Energy Sources</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Text" variant="outlined" fullWidth placeholder="Specify any renewable energy sources utilized" />
                </Grid>
              </Grid>
            )}

            {activeStep === 2 && (
              <Grid container spacing={2} justifyContent="center" ml={45} mt={5} width={"35%"}>
                <Grid item xs={12}>
                  <Typography variant="p">Choose the main crop(s) grown on your farm</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="Crop 1" />
                  <FormControlLabel control={<Checkbox />} label="Crop 2" />
                  <FormControlLabel control={<Checkbox />} label="Crop 3" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Annual Crop Yield</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Enter annual yield of your primary crop(s)" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Select the specific breeds of livestock raised on your farm (if any)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox />} label="Breed" />
                  <FormControlLabel control={<Checkbox />} label="Breed" />
                  <FormControlLabel control={<Checkbox />} label="Breed" />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="p">Average Livestock Herd Size</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Indicate the average size of your livestock herd" />
                </Grid>
              </Grid>
            )}

            {activeStep === 3 && (
              <Grid container spacing={2} justifyContent="center" ml={45} mt={5} width={"35%"}>

                <Grid item xs={12}>
                  <Typography variant="p">Smart Contract Address</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Enter the smart contract address" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Total Token Supply</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Enter total number of tokens planned to be issued" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Token Distribution Model</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Provide details on how the tokens will be distributed" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Staking Reward APR</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Staking reward in percentage" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Total Utility</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Purpose and benefits of token (up to 50 words)" />
                </Grid>
              </Grid>
            )}

            {activeStep === 4 && (
              <Grid container spacing={2} justifyContent="center" ml={45} mt={5} width={"35%"}>

                <Grid item xs={12}>
                  <Typography variant="p">Full Name</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Enter your full legal name" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Passport/National ID Number</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Provide your passport or national ID number" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="P">Upload a scan of your government-issued photo ID</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        width: '375px',
                        height: '100px',
                        background: '#fff',
                        color: '#2E3A5C',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                      <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                        Click to Upload or drag and drop
                      </Typography>
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="P">Upload a scan of phone or electricity bill (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        width: '375px',
                        height: '100px',
                        background: '#fff',
                        color: '#2E3A5C',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                      <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                        Click to Upload or drag and drop
                      </Typography>
                    </Button>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="P">Upload a scan of Passport (Optional)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      style={{
                        width: '375px',
                        height: '100px',
                        background: '#fff',
                        color: '#2E3A5C',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <CloudUploadIcon style={{ fontSize: '40px', marginTop: '20px' }} />
                      <Typography variant="body1" style={{ fontSize: '10px', marginBottom: '20px', textTransform: 'none', }}>
                        Click to Upload or drag and drop
                      </Typography>
                    </Button>
                  </Box>
                </Grid>


                <Grid item xs={12}>
                  <Typography variant="p">Address of Residence</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Enter your complete residential address" />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="p">Contact Information (Phone, Email)</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Number" variant="outlined" fullWidth placeholder="Provide your phone number and email address" />
                </Grid>

              </Grid>
            )}


            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: "35px", height: '100vh' }}>
              <Button style={nextbtn} onClick={handleNext} disabled={activeStep === steps.length - 1}>
                Next
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

export default AssetDetailForm