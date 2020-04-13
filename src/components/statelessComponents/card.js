/**
 * Functional component
 * Following ES6 syntax
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: props => Object.keys(props).includes('width') ? props.width: 345,
  },
  media: {
    height: 140,
  },
});

const mediaCard = ( props ) => {
  const classes = useStyles(props);

  let cardMedia = null
  if(props.haveCardMedia) {
      cardMedia = (
        <CardMedia
          className={classes.media}
          image="https://geekflare.com/wp-content/uploads/2019/11/colormind.jpg"
          title="Contemplative Reptile"
        />
      );
  }

  let cardActions = null;
  if(props.haveCardAction) {
    cardActions = (
      <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
      </CardActions>
    );
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {cardMedia}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.info}
          </Typography>
          {props.children}
        </CardContent>
      </CardActionArea>
      {cardActions}
    </Card>
  );
}

export default mediaCard;