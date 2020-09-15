import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "../../material-dashboard-react.jsx";

const headerStyle = theme => ({
  appBar: {
    backgroundColor: "#acacca",        //"#c7c6c3",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    zIndex: "1029",
    color: "white",
    border: "0",
    padding: "12px 0 8px 0",
    transition: "all 150ms ease 0s",
    boxShadow: '0 0px 5px 2px  #c7c6c3',
    minHeight: "auto",
    display: "block"
  },
  container: {
    ...container,
    minHeight: "auto"
  },
  flex: {
    flex: 1
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent"
    }
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    padding: " 4% 0 4% 14%",
    width: '100%',
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  }
});

export default headerStyle;
