import React from 'react';
import './StackEarn2Time.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='section'>
        <div className='wrapper'>
          <div className='pic' />
          <span className='text'>JUNA</span>
        </div>
        <div className='section-2'>
          <span className='text-2'>Select Period</span>
          <div className='group'>
            <div className='box'>
              <div className='box-2'>
                <span className='text-3'>30 Days</span>
              </div>
            </div>
            <div className='box-3'>
              <div className='wrapper-2'>
                <span className='text-4'>60 Days</span>
              </div>
            </div>
            <div className='box-4'>
              <div className='section-3'>
                <span className='text-5'>90 Days</span>
              </div>
            </div>
            <div className='group-2'>
              <div className='section-4'>
                <span className='text-6'>180 Days</span>
              </div>
            </div>
            <div className='wrapper-3'>
              <div className='section-5'>
                <span className='text-7'>365 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section-6'>
        <span className='text-8'>Estimated APR% 1.5%</span>
      </div>
      <div className='box-5'>
        <div className='section-7'>
          <div className='wrapper-4'>
            <span className='text-9'>Stake Date</span>
            <span className='text-a'>2023-12-19 01:55</span>
          </div>
          <div className='wrapper-5'>
            <span className='text-b'>Accrual Date</span>
            <span className='text-c'>2024-01-19 05:00</span>
          </div>
          <div className='group-3'>
            <span className='text-d'>Profit Distribution Date</span>
            <span className='text-e'> 2024-01-19 17:00</span>
          </div>
          <div className='wrapper-6'>
            <span className='text-f'>Estimated Reward in JUNA</span>
            <span className='text-10'>876 JUNA</span>
          </div>
        </div>
        <div className='section-8'>
          <div className='group-4'>
            <div className='section-9'>
              <div className='wrapper-7'>
                <div className='section-a'>
                  <span className='text-11'>Enter amount</span>
                  <div className='group-5'>
                    <div className='group-6'>
                      <div className='box-6'>
                        <span className='text-12'>Enter amount to lock</span>
                      </div>
                    </div>
                    <div className='img' />
                  </div>
                </div>
                <span className='text-13'>Available: 357987 JUNA</span>
              </div>
            </div>
            <div className='box-7'>
              <div className='section-b'>
                <div className='box-8'>
                  <span className='text-14'>Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
