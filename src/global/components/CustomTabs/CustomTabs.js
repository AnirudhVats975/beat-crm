import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import customTabsStyles from "./CustomTabs.styles";

const CustomTabs = (props) => {
  const { changeValue, selected, tabConfig, label, count, setTabValue } = props;

  const classes = customTabsStyles;

  const handleChange = (event, newValue) => {
    // changeValue(newValue);
    // setValue(newValue);
    setTabValue(newValue);
  };

  const getStyle = (isActive) => {
    return isActive ? classes.active : classes.inActive;
  };
  return (
    <Box>
      <Stack
        direction='row'
        justifyContent={{
          lg: "flex-start",
          xs: "flex-start",
        }}
      >
        <Tabs
          value={selected}
          onChange={handleChange}
          variant='scrollable'
          scrollButtons='auto'
          TabIndicatorProps={{
            style: {
              display: "none",
            },
          }}
        >
          {tabConfig.map((tab) => {
            return (
              <Tab
                sx={{
                  padding: "0px",
                  margin: "10px 10px 10px 10px",
                }}
                label={
                  <Box
                    sx={classes.tabBox}
                    style={getStyle(selected === tab.label)}
                  >
                    <Typography sx={classes.tabText}>{tab.label}</Typography>
                    {tab.count !== 0 && (
                      <Box sx={classes.counts}>{tab.count} </Box>
                    )}
                  </Box>
                }
                value={tab.label}
              />
            );
          })}
        </Tabs>
      </Stack>
    </Box>
  );
};

export default CustomTabs;
