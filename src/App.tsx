import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeadBar from './components/Header/Header';
import MainContainer from './components/Main/main';
import Footer from './components/Footer/footer';

const useStyles = makeStyles({
  root: {
   textAlign: "center"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <HeadBar />
     <MainContainer />
     <Footer />
    </div>
  );
}

export default App;
