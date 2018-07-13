import React, { Component, Fragment } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import teal from '@material-ui/core/colors/teal';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    progress: {
      margin: theme.spacing.unit * 2,
    },
  });
  
class Loading extends Component {
  render() {
    return (
    <Fragment>
      <CircularProgress />
      <CircularProgress size={50} />
      <CircularProgress color="secondary" />
      <CircularProgress style={{ color: teal[500] }} thickness={7} />
    </Fragment>
    )
  }
}
export default withStyles(styles)(Loading);