import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Work from './work';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      marginTop: 150,
      marginBottom: 150,
      background: "#eee"
    },
    content: {
      textAlign: "center",
      height: 470,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
  }),
);
  
const Works: React.FC = () => {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent className={classes.content}>          
              <Work />
        </CardContent>
      </Card>
    );
  }
  
  export default Works;
