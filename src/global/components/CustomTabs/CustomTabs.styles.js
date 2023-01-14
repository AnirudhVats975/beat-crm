import {
  getRelativeFontSize,
  primaryWhiteColor,
  theme,
} from "../../../utils/style";

const customTabsStyles = {
  headerBox: {
    background: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {},
  },
  mainBox: {
    padding: "15px 30px",
  },
  customTabsText: {
    fontWeight: "700",
  },
  outerTabBox: {
    marginTop: "10px",
    borderBottom: "none",
  },
  tab: {
    "& .MuiButtonBase-root-MuiTab-root": {
      padding: "12px 2px",
      overflow: "none !important",
    },
  },
  tabBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    borderRadius: "10px",
    height: "40px",
    width: "100%",
    background: primaryWhiteColor,
  },
  active: {
    color: "'#4E2DE4",
    textDecoration: "none",
    fontWeight: "400",
    border: "1px solid #4E2DE4",
    width: "92%",
    whiteSpace: "noWrap",
  },
  inActive: {
    backgroundColor: "#F9F9F9",
    color: "#828282",
  },
  tabText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1),
    textTransform: "none",
    fontSize: getRelativeFontSize(),
    fontWeight: "500",
    color: "#718096",
  },
  counts: {
    fontWeight: "400",
    opacity: "0.5",
    marginRight: theme.spacing(1),
    fontSize: getRelativeFontSize(2),
    letterSpacing: "0px",
  },

  searchIcon: {
    marginLeft: theme.spacing(1),
  },
  input: {
    border: "1px solid #E7E7E7",
  },
  outerBox: {
    background: "green",
    borderRadius: "10px",
    width: "95px",
  },
  btnBox: {
    color: "white",
    textTransform: "none",
    justifyContent: "space-between",
  },
  addBox: {
    background: "#4F31BC",
    width: "32px",
    height: "32px",
    borderRadius: "10px",
    color: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default customTabsStyles;
