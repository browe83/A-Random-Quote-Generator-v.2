import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, IconButton } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
  quote: {
    transform: "rotate(180deg)",
    fontSize: "100px"
  }
});

const getRandomQuote = async () => {
  const quotesJsonObj = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
  const { quotes } = await quotesJsonObj.json();
  const index = Math.floor(Math.random() * 102)
  const quote = quotes[index];
  return quote;
}

function App() {
  const classes = useStyles();
  const [quoteData, setQuoteData] = useState({});

  useEffect(() => {
    
    getRandomQuote()
      .then(({ author, quote }) => {
        console.log('author and quote:', author, quote);
        setQuoteData({
          author,
          quote,
        })
      });
  }, []);

  return (
    <Grid container direction="row" align="center" style={{height: "100vh", backgroundColor: "teal"}}>
      <Grid item xs={1} sm={3}></Grid>
      <Grid item xs={10} sm={6} style={{display:"flex", alignItems: "center", justifyContent: "center"}}>
        <Card className={classes.root} id="quote-box" >
            <CardContent >
              <Typography id="text" variant="h5" >
                <FormatQuoteRoundedIcon className={classes.quote}/> {quoteData.quote} 
              </Typography>
              <Typography id="author" color="textSecondary" gutterBottom>
                - {quoteData.author}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton style={{marginLeft: "20px"}} size="small">
                <a id="tweet-quote" href="http://twitter.com/intent/tweet" rel="noreferrer" target="_blank">
                  <TwitterIcon style={{color: "#1DA1F2"}} />
                </a>
              </IconButton>
                <IconButton id="new-quote" size="small" style={{marginLeft: "auto", marginRight: "20px"}} onClick={() => {getRandomQuote()
                  .then(({ author, quote }) => {
                    console.log('author and quote:', author, quote);
                    setQuoteData({
                      author,
                      quote,
                    })
                  })}}>New Quote</IconButton>
            </CardActions>
          </Card>
      </Grid>
      <Grid item xs={1} sm={3}></Grid>
    </Grid> 
  )
}


export default App;
