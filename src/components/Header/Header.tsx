import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 800,
      fontSize: "28px",
      letterSpacing: "6px",
      textAlign: "left",
      fontFamily: "游ゴシック体",
    },
    btn_decolation: {
        textDecoration: "none",
        color: "white",
        fontFamily: "游ゴシック体",
        "&:hover": {
            transform: "scale(1.1,1.1)",
            fontWeight: 700,
        }
    },
  }),
);

const HeadBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            PORTFOLIO
          </Typography>
          <Button color="inherit"><a href="/" className={classes.btn_decolation}>HOME</a></Button>
          <Button color="inherit"><a href="/about" className={classes.btn_decolation}>ABOUT</a></Button>
          <Button color="inherit"><a href="/skills" className={classes.btn_decolation}>SKILLS</a></Button>
          <Button color="inherit"><a href="/works" className={classes.btn_decolation}>WORKS</a></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HeadBar;

