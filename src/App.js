// import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, IconButton } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Icon, InlineIcon } from '@iconify/react';
import tumblrIcon from '@iconify-icons/mdi/tumblr';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container direction="row" align="center" style={{height: "100vh", backgroundColor: "teal"}}>
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={6} style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
        <Card className={classes.root} id="quote-box" >
            <CardContent >
              <Typography id="text" variant="h5" >
                "I've learned something too: selling out is sweet because, when you sell out, you get to make a lot of money, 
                and when you have money, you don't have to hang out with a bunch of poor losers like you guys. Screw you guys, 
                I'm going home."
              </Typography>
              <Typography className={classes.title} id="author" color="textSecondary" gutterBottom>
                -Eric Cartman
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton  size="small">
                <a id="tweet-quote">
                  <TwitterIcon />
                </a>
              </IconButton>
              <IconButton size="small">
                <Icon icon={tumblrIcon} />
              </IconButton>
              <IconButton id="new-quote" size="small" style={{marginLeft: "auto"}}>New Quote</IconButton>
            </CardActions>
          </Card>
      </Grid>
      <Grid item xs={1} sm={3}></Grid>
    </Grid> 
  )
}


export default App;
