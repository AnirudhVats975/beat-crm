import React from 'react'
import { Box } from '@mui/material'
import mainSectionStyles from './MainSection.styles'
import Leads from '../../pages/Leads/Leads'

const MainSection = () => {
  const classes = mainSectionStyles
  return (
    <Box sx={classes.container} >
      <Leads/>
    </Box>
  )
}

export default MainSection