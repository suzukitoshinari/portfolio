import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HeadBar from './components/Header/Header';
import MainContainer from './components/Main/Main';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      textAlign: 'center'
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <HeadBar />
     <MainContainer />
     <Footer />
    </div>
  );
};

export default App;
