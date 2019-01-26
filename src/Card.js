import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    width: "480px",
    height: "480px",
    boxSizing: "border-box",
    background: ` linear-gradient( rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${imgUrl})`,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    padding: "30px"
  },
  ava: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px"
  },
  avaImg: {
    width: "150px",
    height: "150px",
    borderRadius: "10px",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px"
  },
  name: {
    display: "flex",
    justifyContent: "center"
  },
  nameText: {
    color: "#fff",
    lineHeight: "40px",
    fontSize: "16px",
    fontWidth: "500"
  },
  additional: {
    display: "flex",
    justifyContent: "center"
  },
  price: {
    backgroundColor: "#ffc2004d",
    color: "#ffc200"
  },
  time: {
    backgroundColor: "#db214a42",
    color: "#db214a"
  },
  addBlock: {
    borderRadius: "5px",
    margin: "0 5px",
    width: "74px",
    height: "20px",
    padding: "5px",
    display: "flex",
    lineHeight: "20px",
    fontSize: "14px",
    justifyContent: "space-between"
  },
  addItem: {
    color: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit"
  },
  percents: {
    display: "flex",
    marginTop: "10px",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: "14px"
  },
  opacity: {
    color: "#ffffff7a"
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  infoCol: {
    display: "flex",
    color: "#fff",
    lineHeight: "25px"
  },
  nonopcity: {
    color: "#fff"
  },
  button: {
    marginTop: "30px"
  },
  btn: {
    width: "100%",
    textTransform: "none",
    backgroundColor: "#db214a42",
    color: "#db214a",
    "&:hover": {
      background: "#db214a7d"
    }
  }
});

const imgUrl = "https://picsum.photos/480/?random";

class Card extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: "20px auto" }} className={classes.card}>
        <div className={classes.ava}>
          <img className={classes.avaImg} boxShadow={2} src={imgUrl} />
        </div>
        <div className={classes.name}>
          <Typography className={classes.nameText}>Mission name</Typography>
        </div>
        <div className={classes.additional}>
          <div className={`${classes.price} ${classes.addBlock}`}>
            <i className={`material-icons ${classes.addItem}`}>place</i>
            <Typography className={classes.addItem}>500 XP</Typography>
          </div>
          <div className={`${classes.time} ${classes.addBlock}`}>
            <i className={`material-icons ${classes.addItem}`}>access_time</i>
            <Typography className={classes.addItem}>01:02:12</Typography>
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <LinearProgress value={35} variant="determinate" />
        </div>
        <div className={classes.percents}>
          <Typography className={classes.addItem}>35%</Typography>
          <Typography className={`${classes.opacity} ${classes.addItem}`}>
            100%
          </Typography>
        </div>
        <div className={classes.info}>
          <div className={classes.infoCol}>
            <Typography className={`${classes.opacity} ${classes.addItem}`}>
              <span className={classes.nonopcity}>5</span>/5 <br />
              Cases Opened
            </Typography>
          </div>
          <div className={classes.infoCol}>
            <Typography className={`${classes.opacity} ${classes.addItem}`}>
              <span className={classes.nonopcity}>1</span>/20 <br />
              Cases Liked
            </Typography>
          </div>
          <div className={classes.infoCol}>
            <Typography className={`${classes.opacity} ${classes.addItem}`}>
              <span className={classes.nonopcity}>7</span>/8 <br />
              Cases Items
            </Typography>
          </div>
        </div>
        <div className={classes.button}>
          <Button className={classes.btn}>Deactivate</Button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Card);
