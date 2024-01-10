import React from 'react'
import {Stack} from '@mui/material';
import NavigationBar from '../components/NavigationBar'
import Header from '../components/Header'
import CustomerSupportTable from '../components/customerSupportTable'

function CustomerSupport() {
  return (
    <>
      <NavigationBar />
      <Stack direction="column" width="75%">
        <Header leftText='Home'></Header>
        <CustomerSupportTable />
      </Stack>
    </>
  )
}

export default CustomerSupport