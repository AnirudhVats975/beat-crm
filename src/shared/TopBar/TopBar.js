import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import topBarStyles from './TopBar.styles';
import NotificationIcon from '../../assets/icons/bell.svg';
import MoreVerticalIcon from '../../assets/icons/more-vertical.svg';
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg"

const TopBar = () => {
  const classes = topBarStyles
  return (
    <Box sx={classes.container} >
      <Grid container xs={12} px={2}>
        <Grid item xs={6}>
          <Box>
            <Typography sx={classes.mainTitle}>Leads</Typography>
            <Typography sx={classes.lightText}>Good Afternoon, Let’s check your work today.</Typography>
          </Box>
        </Grid>
        <Grid item xs={6} display={"flex"} alignItems={"center"} justifyContent={"flex-end"} gap={2} >
         <Box sx={classes.buttonWrapper}>
          <Button startIcon={<PlusIcon /> }sx={classes.buttonStyle}>Create</Button>
         </Box>
         <Box>
          <img src={NotificationIcon} alt="notification"/>
         </Box>  
         <Box>
          <Box sx={classes.userName}>AN</Box>
         </Box>
         <Box>
          <Button sx={classes.moreInfoButton}>
            <img src={MoreVerticalIcon} alt="MoreVerticalIcon" />
          </Button>
         </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TopBar