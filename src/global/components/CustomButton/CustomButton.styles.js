import {
  primaryColorBlack,
  primaryWhiteColor,
  primaryBlueColor
} from "../../../utils/styles";

const customButtonStyles = {
  btnStyle: {
    maxWidth  :"100px" ,
    color : primaryColorBlack,
    border  :"1px solid",
    borderColor  :primaryColorBlack,
    borderRadius  :"12px",
    "&" : {
      height  : "42px",
      boxShadow : "none",

    },
  },

  primaryBtn : {
    color : primaryWhiteColor,
    background : primaryBlueColor,
    borderColor  :primaryBlueColor,
  "&:hover" :{
   
  }
  },
  secondaryBtn : {
    background  :primaryWhiteColor,
    color : "#828282",
    "&:hover" : {
    
    }
  },
  addBox: {
    color: "#FFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
} ;

export default customButtonStyles;
