import { fontWeight } from "@mui/system";
import {
  getRelativeFontSize,
  primaryBlackColor,
  primaryWhiteColor,
} from "../../../utils/style";

const TableStyle = {
  paperStyle: {
    width: "100%",
    mb: 2,
    borderRadius: "20px",
  },
  searchStyle: {
    width: "100%",
    height: "56px",
    borderRadius: "16px",
    border: "none",
    background: "#FAFAFA",
  },
  filterButtonStyle: {
    background: "#FAFAFA",
    borderRadius: "12px",
    height: "56px",
    width: "112px",
    fontWeight: "700",
    color : "#718096",
    fontSize : getRelativeFontSize()
  },
  countStyle: {
    color: "#718096",
    fontSize: getRelativeFontSize(),
    fontWeight: "600",
  },
  headerCellStyle: {
    color: "#718096",
    fontSize: getRelativeFontSize(),
    fontWeight: "500",
    whiteSpace: "noWrap",
  },

  ClientStyle: {
    width: "130px",
  },
  clientNameStyle: {
    color: primaryBlackColor,
    fontWeight: "600",
    fontSize: getRelativeFontSize(),
  },
  clientIdStyle: {
    color: "#718096",
    fontSize: getRelativeFontSize(-2),
    fontWeight: "500",
  },

  clientTypeStyle: {
    color: "#4E2DE4",
    fontSize: getRelativeFontSize(-3),
    fontWeight: "400",
  },

  tableTextBox: {
    height: "55px",
    background: "#F7F7F7",
    textALign: "left",
    padding: "5px 10px",
    borderRadius: "5px",
    width: "110px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  tableText: {
    fontSize: getRelativeFontSize(-3),
    color: "#8C91A2",
    fontWeight: "400",
  },

  LeadOwner: {
    fontSize: getRelativeFontSize(-4),
    color: "#718096",
    fontWeight: "400",
  },
  AssignedStyle: {
    color: "#FD6A6A",
    fontSize: getRelativeFontSize(-2),
    fontWeight: "500",
  },
  leadStatusButton: {
    height: "24px",
    borderRadius: "5px",
    background: "#785AFF",
    width: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: getRelativeFontSize(-1),
    color: primaryWhiteColor,
  },

  tableBody: {
    "& .css-177gid-MuiTableCell-root": {
      padding: "5px",
    },
  },

  table: {
    minWidth: 650,
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "red",
    },

    "& .css-rorn0c-MuiTableContainer-root": {
      maxHeight: "300px",
      overflowX: "auto",
    },
  },

  TableContainerStyle : {
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#F7F7F7",
    },
  },
  paginationStyle : {
    '& .MuiTablePagination-spacer': {
      background : "red"
    }
  }
};

export default TableStyle;
