import React, { useState } from "react";
import LeadsStyle from "./leads.style";
import { Box } from "@mui/material";
import Table from "./Table/Table";
import CustomTabs from "../../global/components/CustomTabs/CustomTabs";

const Leads = () => {
  const classes = LeadsStyle;
  const [tabValue, setTabValue] = useState("Show All");
  const tabConfig = [
    {
      id: 1,
      label: "Show All",
    },
    {
      id: 2,
      label: "Fresh",
    },

    {
      id: 3,
      label: "Not Answered",
    },

    {
      id: 4,
      label: "Pipeline",
    },

    {
      id: 5,
      label: "Visit Scheduled",
    },

    {
      id: 6,
      label: "Visit Done",
    },

    {
      id: 7,
      label: "Future",
    },

    {
      id: 8,
      label: "Call Back",
    },

    {
      id: 9,
      label: "Not Interested",
    },
  ];


  return (
    <Box px={2} pt={1}>
      <Box>
        <CustomTabs
          tabConfig={tabConfig}
          selected={tabValue}
          setTabValue={setTabValue}
        />
      </Box>
      <Box>
        <Table />
      </Box>
    </Box>
  );
};

export default Leads;
