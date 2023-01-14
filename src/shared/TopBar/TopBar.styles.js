import { getRelativeFontSize, primaryBlackColor, primaryWhiteColor } from "../../utils/style"

const topBarStyles = {
    container:{
        position:'fixed',
        right:'0px',
        width:'calc(100vw - 256px)',
        height:'80px',
        top:'0px',
        backgroundColor: primaryWhiteColor,
        display : "flex",
        alignItems  :"center",
        justifyContent : "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",

    },
    userName:{
      height  :"48px",
      width :"48px",
      borderRadius : "50%",
      background :"#EEEFF2",
      fontSize  :getRelativeFontSize(2),
      color : "#718096",
      display : "flex",
      alignItems:"center",
      justifyContent : "center",
      fontWeight  :"800"
    },
    buttonWrapper : {
     borderRight  :"1px solid #EEEFF2",
     paddingRight  : "10px"
    },
    mainTitle : {
     color : primaryBlackColor,
     fontSize  :getRelativeFontSize(10),
     fontWeight : "800"
    },
    lightText  :{
    color  : "#718096",
    fontSize : getRelativeFontSize()
    },
    buttonStyle :{
     height  :"48px",
     width : "124px",
     background : "#4E2DE4",
     borderRadius : "12px",
     color  : primaryWhiteColor,
     fontSize : getRelativeFontSize(-2),
     fontWeight : "600",
     border : "none",
     outline : "none",
     '&:hover'  :{
      color  : primaryWhiteColor,
      background : "#4E2DE4",
      opacity : 0.9,
      transitions  :"all .3s ease"
     },
     moreInfoButton  :{
      background : "none",
      outline : "none",
      padding :  "none",
      '&::hover' : {
        background : "white"
      }
     }
     
    }
}
export default topBarStyles