import React from 'react'
import AppDrawer from '../AppDrawer/AppDrawer'
import { Box } from '@mui/material'
import TopBar from '../TopBar/TopBar'
import MainSection from '../MainSection/MainSection'

function Layout() {
  return (
    <Box>
        <AppDrawer/>
        <TopBar/>
        <MainSection/>
    </Box>
  )
}

export default Layout