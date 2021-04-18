import React from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import About from '../../pages/AboutPage/About';
import Skills from '../../pages/SkillsPage/Skills';
import Works from '../../pages/WorksPage/Works';
import Home from '../../pages/HomePage/Home';

// const useStyles = makeStyles((theme: Theme) => createStyles({
//   root: {
    
//   },
// }));

const MainContainer: React.FC = () => {
  // const classes = useStyles();

  return (
    <>
      <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/works' component={Works} />
            </Switch>
          </BrowserRouter>
      </Container>
    </>
  );
}

export default MainContainer;