import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#f3f3f3",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "#F4BB6E",
    },
  },
  mainLogo:{
    color: "#f1f1f1",
    fontWeight: "bold",
    fontSize: "2rem",
    letterSpacing: "1.5px",
    margin : "1rem",
  }
}));