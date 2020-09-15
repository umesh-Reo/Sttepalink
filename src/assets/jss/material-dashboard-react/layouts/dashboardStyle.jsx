import {
  drawerWidth,
  transition,
  container
} from "../../material-dashboard-react.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    background:"#f9f8fa",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    marginTop: "30px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
    background:"rgb(242, 242, 242)"
  },
  container,
  map: {
    marginTop: "70px",
    background:" rgb(220, 196, 243)"
  }
});

export default appStyle;
