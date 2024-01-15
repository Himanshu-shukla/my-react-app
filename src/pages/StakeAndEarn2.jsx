import React, { useState } from 'react'
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header';
import {TextField, Stack} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import './StakeAndEarn2.css';
import imageUrl from '../assets/icon.png'

const NumberInputField = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <div>
      <TextField
        type="number"
        placeholder="Enter amount to lock"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        helperText="Available: 357987 JUNA"
        InputProps={{
          endAdornment: (
            <>
              <IconButton onClick={handleIncrease} size="small">
              </IconButton>
              <IconButton onClick={handleDecrease} size="small">
              </IconButton>
            </>
          ),
        }}
      />
    </div>
  );
};

function StakeAndEarn2() {

  const icon = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    width: '35px', // Set the desired width
    height: '35px', // Set the desired height
  };

  return (
    <>
      <NavigationBar />
      <Stack direction="column">

        <Header leftText="Home" rightText="Staking"></Header>
        <div className="stake-earn2-frame">
        <h5 className='heading-text'>
          Stake and Earn
        </h5>
        <div className='container-block'>
          <div className='juno-head'>
            <div style={icon}></div>
            <h4 className='juno-head-text'>JUNA</h4>
          </div>
          <div className='period'>
            <h5 className='select-period'>Select Period</h5>
            <div className='btn-container'>
              <button className='btn btn-select'>30 Days</button>
              <button className='btn '>60 Days</button>
              <button className='btn '>90 Days</button>
              <button className='btn '>180 Days</button>
              <button className='btn '>365 Days</button>
            </div>
            <div className='highlight-container'>
              <span className='highlight'>Estimated APR% 1.5%</span>
            </div>
            <div className='detail-container'>
              <div className='detail-left'>
                <div className='detail-row'>
                  <h6 className='row-head'>
                    Stake Date
                  </h6>
                  <p className='row-head-detail'>
                    2023-12-19 01:55
                  </p>
                </div>
                <div className='detail-row'>
                  <h6 className='row-head'>
                    Accrual Date
                  </h6>
                  <p className='row-head-detail'>
                    2024-01-19 05:00
                  </p>
                </div>
                <div className='detail-row'>
                  <h6 className='row-head'>
                    Profit Distribution Date
                  </h6>
                  <p className='row-head-detail'>
                    2024-01-19 17:00
                  </p>
                </div>
                <div className='detail-row'>
                  <h6 className='row-head'>
                    Estimated Reward in JUNA
                  </h6>
                  <p className='row-head-detail'>
                    876 JUNA
                  </p>
                </div>
              </div>
              <div className='detail-right'>
                <div className='amount-form'>
                  <div className='entry-form'>
                    <h6 className="amt-text">Enter amount</h6>
                    <NumberInputField />
                  </div>
                  <div className='btn-next'>
                    <button className='next'>Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Stack>
    </>
  );
}

export default StakeAndEarn2