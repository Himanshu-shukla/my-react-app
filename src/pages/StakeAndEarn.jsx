import React from 'react'
import NavigationBar from '../components/NavigationBar';
import img from '../assets/icon.png'

function StakeAndEarn() {

  const icon = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    width: '35px', // Set the desired width
    height: '35px', // Set the desired height
  };

    return (
        <>
          <NavigationBar></NavigationBar>
          <div>
            <h5 className='heading-text'>Stake and Earn</h5>
            <div className='juna-frame'>
              <div className="juna-title">

              </div>
              <div className='info-row'>
                <div className='info-row-left'>
                  <div className='first'>
                    <p className='head'>
                      Estimated APR
                    </p>
                  </div>
                  <div className='second'>
                    <p className='head'>
                      Lock Duration (Days)
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default StakeAndEarn