import React from "react";
import appDrawerStyles from "./AppDrawer.Style";
import {
  Box,
  Button,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { theme } from "../../utils/style";
import AppLogo from "../../assets/icons/Logo.svg";
import DashboardIcon from "../../assets/icons/home-2.svg";
import LeadsIcon from "../../assets/icons/shopping-cart.svg";
import ReportsIcon from "../../assets/icons/chart-bar-square.svg";
import settingIcon from "../../assets/icons/setting.svg";
import rightIcon from '../../assets/icons/rightIcon.svg';

const AppDrawer = () => {
  const classes = appDrawerStyles;
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const getCloseButton = () => {
    return <Button>close</Button>;
  };

   const getSideBarClose =  () =>{
    return(
     <Box component={"button"} sx={classes.sideBarButton}>
       <img src={rightIcon} />
     </Box>
    )
     
   }

  const getAppLogo = () => {
    return (
      <Box sx={classes.logoBox}>
        <img src={AppLogo} alt="appLogo" />
      </Box>
    );
  };

  const getAppDrawerFooter = () => {
    return (
      <Box sx={classes.appDrawerFooter}>
        <Box sx={classes.settingWrapper}>
          <img src={settingIcon} alt="icon" />
          <Typography sx={classes.settingStyle}>Setting</Typography>
        </Box>
        <Box>
          <Typography sx={classes.copyRightText}>
            Copyright 2022 Powered by YHATAW Real Estate Facilitators Pvt. Ltd.
          </Typography>
        </Box>
      </Box>
    );
  };
  const ListOfMenus = [
    {
      icon: DashboardIcon,
      text: "Dashboard",
      isActive : false,

    },
    {
      icon: LeadsIcon,
      text: "Leads",
      isActive : true,
    },
    {
      icon: ReportsIcon,
      text: "Reports",
      isActive : false,

    },
  ];

  const getNewMenuOptions = () => {
    return (
      <List dense>
        {ListOfMenus.map((item, index) => {
          return (
            <Box display={"flex"} marginTop={"15px"}>
              <ListItemIcon  sx={classes.listStyle}>
                <img src={item.icon} alt="icon" />
              </ListItemIcon>
              <ListItemText sx={item.isActive === true ? classes.activeListStyle : classes.listStyle}>{item.text}</ListItemText>
            </Box>
          );
        })}
      </List>
    );
  };

  return (
    <Box sx={classes.container}>
      <Box sx={classes.drawerWidth}>
        {!isDesktop && getCloseButton()}
        <Box>{getAppLogo()}</Box>
        {getSideBarClose()}
        <Box sx={classes.menuOptionsHeight}>{getNewMenuOptions()}</Box>
        <Box>{getAppDrawerFooter()}</Box>
      </Box>
    </Box>
  );
};

export default AppDrawer;
