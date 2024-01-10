import React from 'react';
import NavigationBar from '../components/NavigationBar';
import {Stack} from '@mui/material';
import Header from '../components/Header';
import FAQAccordian from '../components/FAQAccordian';

const FAQs = () => {
  return (
    <>
      <NavigationBar />
      <Stack direction="column" width="75%">
        <Header leftText='FAQs'></Header>
        <FAQAccordian />
      </Stack>
    </>
  );
};

export default FAQs;