import {createTheme} from "@mui/material/styles";
import {withStyles, createStyles, CSSProperties } from "@mui/styles";
import {InputBase, Theme} from "@mui/material";

 const defaultFontSize = 14;
 const primaryBlueColor = "#4E2DE4";
 const primaryWhiteColor = "#FFFFFF";
 const primaryBlackColor = "#111827";

 const getRelativeFontSize = (value = 0) => {
  let size = defaultFontSize + value;
  return size + "px";
};

export const BootstrapInput = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
      backgroundColor: theme.palette.common.white,
      border: "1px solid",
      borderColor : primaryBlackColor,
      borderRadius: "10px",
      padding: "0 5px",
      width: "100%",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
    input: {
      position: "relative",
      fontSize: getRelativeFontSize(),
      width: "100%",
      padding: "10px 12px",
    },
  })
)(InputBase);




export const theme = createTheme({
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "MyriadPro_Light",
        "MyriadPro_Bold",
        "MyriadPro_Medium",
        "MyriadPro_Regular",
        "sans-serif",
        "Digital-7 Mono",
      ].join(","),
    },
    
  });


  export {
    primaryBlueColor,
    primaryWhiteColor,
    getRelativeFontSize,
    primaryBlackColor,

  }

