import React from 'react';
import './DisplayBalance.css';

export default function DisplayBalance() {
  return (
    <div className='main-container'>
      <div className='group'>
        <div className='group-2' />
        <div className='box'>
          <span className='text'>Total Balance</span>
          <div className='wrapper'>
            <div className='section'>
              <div className='wrapper-2'>
                <span className='text-2'>$ 140,000</span>
                <span className='text-3'>.00</span>
              </div>
              <div className='pic' />
            </div>
            <div className='wrapper-3'>
              <div className='section-2'>
                <div className='section-3'>
                  <div className='group-3'>
                    <div className='pic-2' />
                    <span className='text-4'>5.26%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pic-3' />
      </div>
    </div>
  );
}
