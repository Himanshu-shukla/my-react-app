import React from 'react';
import './customerChatWindow.css';

export default function Main() {
  return (
    <div className='main-container'>
      <div className='wrapper'>
        <span className='text'>Ticket#019</span>
        <span className='text-2'>Account Assistance</span>
        <div className='group'>
          <span className='text-3'>Created</span>
          <span className='text-4'> Oct 15, 2023 | 09:32AM</span>
        </div>
      </div>
      <div className='section'>
        <div className='group-2'>
          <span className='text-5'>
            How can I get help with my support ticket?
          </span>
        </div>
        <div className='box box-1'>
          <span className='text text-6'>
            To get help with your support ticket, visit our Support Center and
            submit a detailed description of your issue. You'll receive a unique
            ticket number for tracking. Our support team will work on resolving
            your query and communicate with you through the ticket system. Once
            resolved, you can close the ticket or reopen it if needed.
          </span>
        </div>
        <div className='group-3'>
          <span className='text-7'>
            How can I get help with my support ticket?
          </span>
        </div>
        <div className='box box-2'>
          <span className='text text-8'>
            To get help with your support ticket, visit our Support Center and
            submit a detailed description of your issue. You'll receive a unique
            ticket number for tracking. Our support team will work on resolving
            your query and communicate with you through the ticket system. Once
            resolved, you can close the ticket or reopen it if needed.
          </span>
        </div>
      </div>
      <div className='group-4'>
        <span className='text-9'>Type here</span>
            <button className='text-a'>Send</button>
        </div>
      </div>
  );
}
