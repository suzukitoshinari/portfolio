import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import About from '../../pages/About/about';
import Skills from '../../pages/Skills/skills';
import Works from '../../pages/Works/works';
import Home from '../../pages/Home/home';

// const useStyles = makeStyles((theme: Theme) => createStyles({
//   root: {
    
//   },
// }));

function MainContainer() {
  // const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/skills' component={Skills} />
              <Route exact path='/works' component={Works} />
              {/* <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" /> */}
            </Switch>
          </BrowserRouter>
      </Container>
    </>
  );
}

export default MainContainer;