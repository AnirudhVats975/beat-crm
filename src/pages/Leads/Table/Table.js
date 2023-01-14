import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { Button, Divider, Grid } from "@mui/material";
import TableStyle from "./Table.style";
import { ReactComponent as CheckIcon } from "../../../assets/icons/check.svg";
import { ReactComponent as CheckedIcon } from "../../../assets/icons/checked.svg";
import { BootstrapInput } from "../../../utils/style";
import SearchIcon from "../../../assets/icons/Search.svg";
import { ReactComponent as FilterIcon } from "../../../assets/icons/Filter.svg";
import { Client } from "./TableData";
import { useEffect } from "react";
function createData(
  ClientName,
  PropertyName,
  LeadSource,
  PrimaryContact,
  SecondaryContact,
  AssociatedData,
  Status,
  temp
) {
  return {
    ClientName: ClientName,
    PropertyName,
    LeadSource,
    PrimaryContact,
    SecondaryContact,
    AssociatedData,
    Status,
    temp,
  };
}

const rows = [
  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),
  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),
  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),
  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),

  createData("client", 305, 3.7, 67, 4.3, {
    ClientName: {
      clientName: "Biswajit Mukherjee",
      clientId: "25435646",
      clientType: "Residential / Buy / RTMI",
    },
    PropertyName: {
      id: 0,
      name: `Godrej Icon,
          Sec-86, Gurgaon
          Godrej Properties`,
    },
    LeadSource: {
      id: 0,
      source: `Lead from Housing_1 Housing.com Real Estate Portal`,
    },
    PrimaryContact: {
      id: 1,
      primaryContact1: "+91 84471 99965",
      primaryContact2: "bizmak239@gmail.com",
    },
    SecondaryContact: {
      id: 1,
      secondaryContact1: "+91 84471 9996",
      secondaryContact2: "+91 84471 92369",
    },
    CreatedDate: {
      nextFlowUpDate: "14-09-2022",
      nextFlowUpTime: "05:00 PM",
      actualDate: "20-09-2022",
      actualTime: "07:30 PM",
    },
    Status: {
      isOwner: "Lead Owner",
      isAssigned: "Not Assigned",
      leadStatus: "Fresh Lead",
    },
  }),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "Client Name",
    numeric: false,
    disablePadding: true,
    label: "Client Name",
  },
  {
    id: "PropertyName",
    numeric: true,
    disablePadding: false,
    label: `Property Name`,
  },
  {
    id: "LeadSource",
    numeric: true,
    disablePadding: false,
    label: "Lead Source",
  },
  {
    id: "PrimaryContact",
    numeric: true,
    disablePadding: false,
    label: "Primary Contact",
  },
  {
    id: "SecondaryContact",
    numeric: true,
    disablePadding: false,
    label: "Secondary Contact",
  },

  {
    id: "CreatedDate",
    numeric: true,
    disablePadding: false,
    label: "Created Date",
  },

  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            sx={classes.headerCellStyle}
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
const classes = TableStyle;

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Grid
      container
      xs={12}
      height={"80px"}
      px={2}
      sx={{ borderBottom: 1, borderColor: "#EEEFF2" }}
    >
      <Grid item xs={6} display={"flex"} alignItems={"center"}>
        <BootstrapInput
          id='search'
          placeholder='Search for Name and Status'
          sx={classes.searchStyle}
          startAdornment={
            <img
              src={SearchIcon}
              alt='SearchIcon'
              style={{ marginRight: "12px", marginBottom: "2px" }}
            />
          }
        />
      </Grid>
      <Grid
        item
        xs={6}
        display={"flex"}
        alignItems='center'
        justifyContent={"flex-end"}
        gap={2}
      >
        <Box>
          <Typography sx={classes.countStyle}>649 / 14,000</Typography>
        </Box>
        <Box>
          <Button sx={classes.filterButtonStyle} startIcon={<FilterIcon />}>
            Filter
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={classes.paperStyle}>
        <EnhancedTableToolbar numSelected={selected.length} />
        {loading ? (
          <Box p={1.5}>
            <SkeletonTheme
              baseColor='#EDEDED'
              highlightColor='#BABABA'
              height={"40px"}
              borderRadius={"8px"}
            >
              <p>
                <Skeleton count={6} />
              </p>
            </SkeletonTheme>
          </Box>
        ) : (
          <>
            <TableContainer
              style={{ height: "calc(100vh - 290px)" }}
              sx={classes.TableContainerStyle}
            >
              <Table
                sx={classes.table}
                aria-labelledby='tableTitle'
                size={dense ? "small" : "medium"}
                stickyHeader
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;
                      // debugger
                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role='checkbox'
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                        >
                          <TableCell padding='checkbox'>
                            <Checkbox
                              icon={<CheckIcon />}
                              checkedIcon={<CheckedIcon />}
                              color='primary'
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component='th'
                            id={labelId}
                            scope='row'
                            padding='none'
                          >
                            <Box sx={classes.ClientStyle}>
                              <Typography sx={classes.clientNameStyle}>
                                {row.AssociatedData.ClientName.clientName}
                              </Typography>
                              <Typography
                                sx={classes.clientIdStyle}
                              >{`ID:${row.AssociatedData.ClientName.clientId}`}</Typography>
                              <Typography sx={classes.clientTypeStyle}>
                                {row.AssociatedData.ClientName.clientType}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box sx={classes.tableTextBox}>
                              <Typography sx={classes.tableText}>
                                {row.AssociatedData.PropertyName.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box sx={classes.tableTextBox}>
                              <Typography sx={classes.tableText}>
                                {row.AssociatedData.LeadSource.source}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box sx={classes.tableTextBox}>
                              <Typography sx={classes.tableText}>
                                {
                                  row.AssociatedData.PrimaryContact
                                    .primaryContact1
                                }
                              </Typography>
                              <Typography sx={classes.tableText}>
                                {
                                  row.AssociatedData.PrimaryContact
                                    .primaryContact2
                                }
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box sx={classes.tableTextBox}>
                              <Typography sx={classes.tableText}>
                                {
                                  row.AssociatedData.SecondaryContact
                                    .secondaryContact1
                                }
                              </Typography>
                              <Typography sx={classes.tableText}>
                                {
                                  row.AssociatedData.SecondaryContact
                                    .secondaryContact1
                                }
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box
                              sx={classes.tableTextBox}
                              style={{ width: "150px" }}
                            >
                              <Box>
                                <Box>
                                  <Typography sx={classes.tableText}>
                                    Next Follow Up
                                  </Typography>{" "}
                                </Box>
                                <Box
                                  style={{
                                    display: "flex",
                                    justifyContent: "column",
                                    gap: "10px",
                                  }}
                                >
                                  <Typography sx={classes.tableText}>
                                    {
                                      row.AssociatedData.CreatedDate
                                        .nextFlowUpDate
                                    }
                                  </Typography>
                                  <Typography sx={classes.tableText}>
                                    {
                                      row.AssociatedData.CreatedDate
                                        .nextFlowUpTime
                                    }
                                  </Typography>
                                </Box>
                              </Box>
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "column",
                                  gap: "10px",
                                }}
                              >
                                <Typography sx={classes.tableText}>
                                  {
                                    row.AssociatedData.CreatedDate
                                      .nextFlowUpTime
                                  }
                                </Typography>
                                <Typography sx={classes.tableText}>
                                  {row.AssociatedData.CreatedDate.actualTime}
                                </Typography>
                              </Box>
                            </Box>
                          </TableCell>
                          <TableCell align='left'>
                            <Box>
                              <Box sx={classes.LeadOwner}>
                                {row.AssociatedData.Status.isOwner}
                              </Box>
                              <Box sx={classes.AssignedStyle}>
                                {row.AssociatedData.Status.isAssigned}
                              </Box>
                              <Box sx={classes.leadStatusButton}>
                                {row.AssociatedData.Status.leadStatus}
                              </Box>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: (dense ? 33 : 53) * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              style={{ display: "flex", justifyContent: "space-between" }}
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={classes.paginationStyle}
            />{" "}
          </>
        )}
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
