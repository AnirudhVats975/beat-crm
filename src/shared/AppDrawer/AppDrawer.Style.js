import { blue } from "@mui/material/colors";
import {
  getRelativeFontSize,
  primaryWhiteColor,
  theme,
} from "../../utils/style";

const appDrawerStyles = {
  container: {
    display: "flex",
    position: "fixed",
    width: "256px",
    height: "100vh",
    left: "0px",
    top: "0px",
    backgroundColor: primaryWhiteColor,
    zIndex: 1,
    boxShadow: "0px 4px 40px 0px #0000000D",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  drawerWidth: {
    padding: "0 15px",
    width: "256px",
    height: "100vh",
    overflowY: "hidden",
    overflowX: "hidden",
    [theme.breakpoints.down("xl")]: {
      width: "256px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  logoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
    [theme.breakpoints.down("md")]: {
      height: "15vh",
    },
  },

  menuOptionsHeight: {
    height: "72vh",
    overflowY: "auto",
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
    },
    "&::-webkit-scrollbar": {
      width: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
      // backgroundColor: primaryColorPurple,
      borderRadius: "10px",
      border: "3px solid #ffffff",
    },
  },
  appDrawerFooter: {
    backgroundColor: blue,
    borderRadius: "15px",
    marginBottom: "50px",
    pb: 5,
    [theme.breakpoints.down("xl")]: {},
    gap: "20px",
  },
  settingWrapper: {
    display: "flex",
    gap: "20px",
    justifyContent: "flex-start",
    alignItems: "start",
    width: "100%",
    marginBottom: "20px",
  },
  copyRightText: {
    fontSize: getRelativeFontSize(-2),
    color: "#CED0D8",
  },
  listStyle: {
    fontWeight: "500",
    color: "#718096",
    fontSize: getRelativeFontSize(),
  },
  activeListStyle: {
    color: "#4E2DE4",
    fontSize: getRelativeFontSize(1),
    fontWeight: "700",
  },
  settingStyle: {
    fontWeight: "500",
    color: "#718096",
    fontSize: getRelativeFontSize(),
  },
  sideBarButton: {
    position: "absolute",
    right: "-13px",
    height: "32px",
    width: "32px",
    top: "25px",
    border: "1px solid #F1F2F4",
    borderRadius: "50%",
    background: primaryWhiteColor,
    padding: "0px",
  },
};
export default appDrawerStyles;
