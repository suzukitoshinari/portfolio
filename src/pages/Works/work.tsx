import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      marginTop: 20,
      marginBottom: 20,
      height: 300,
      width: 200,
      background: "blue"
    },
    content: {
      marginTop: 20,
      cursor: "pointer"
    },
  }),
);
  
const Work: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h2" component="h2">
            Works 1
        </Typography>
        <Typography variant="body1" component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}
  
export default Work;
