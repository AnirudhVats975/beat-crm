import { Box, Button, SxProps } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import customButtonStyles from "./CustomButton.styles";
import { useEffect } from "react";
import { CSSProperties } from "@mui/styled-engine";
import { primaryColorBlack } from "../../../utils/styles";



const CustomButton = (props) => {
  const {label,onClick, loading, customClasses, buttonType, startIcon, endIcon , disabled} =props;
  const getCustomCss = () => { 
    switch (buttonType) {
      case ("primaryBtn") : 
        return classes.primaryBtn;
        case ("secondaryBtn") :
          return classes.secondaryBtn 
      default:
      return {}
    } 
  }
  
  const classes = customButtonStyles;
  const buttonType1 = getCustomCss();
  const appliedClass ={...classes.btnStyle, ...buttonType1, ...props.customClasses ?? {}}
  const processing = props.loading ? props.loading : false;
  return (
    <Button
    startIcon={props.startIcon}
    endIcon={props.endIcon}
      sx={[appliedClass]}
      onClick={() => props.onClick()}
      disabled={props.loading}
    >
      {processing ? (
        <Box sx={classes.loading}>
          <CircularProgress  size={20} sx={{ color: primaryColorBlack }} />
        </Box>
      ) : (
        props.label
      )}
      
    </Button>
  );
};

export default CustomButton;
