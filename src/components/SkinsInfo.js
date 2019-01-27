import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  skinsInfo: {
    width: "1000px",
    boxSizing: "border-box",
    background: "rgba(121, 161, 255, 0.31)",
    display: "flex",
    flexDirection: "row"
  },
  levels: {
    width: "90px"
  },
  levelsHeader: {
    width: "100%",
    height: "20px"
  },
  gradientBg: {
    background: "linear-gradient(to bottom right, #9bbaff40, #0000002e)"
  },
  levelText: {
    textAlign: "center",
    lineHeight: "20px",
    color: "#ffffff7a",
    fontSize: "10px"
  },
  levelGray: {
    width: "100%",
    height: "100px",
    background: "linear-gradient(to bottom right, #52525c, #2e2e36)"
  },
  levelGold: {
    width: "100%",
    height: "100px",
    background: "linear-gradient(to bottom right, #f7cd09, #fda900)"
  },
  tiers: {
    flex: 1
  },
  tierItem: {
    width: "100%",
    height: "100px",
    background: "linear-gradient(to bottom right, #9bbaff40, #0000002e)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  itemImg: {
    width: "75px"
  },
  itemDescription: {
    position: "absolute",
    bottom: "20px"
  },
  itemPrice: {
    textAlign: "center",
    color: "#fff",
    fontSize: "10px"
  },
  itemName: {
    textAlign: "center",
    color: "#ffffff7a",
    fontSize: "10px"
  }
});

class SkinsInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: "20px auto" }} className={classes.skinsInfo}>
        <div className={classes.levels}>
          <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
            <Typography className={classes.levelText}>Level</Typography>
          </div>
          <div className={classes.levelGray} />
          <div className={classes.levelGold} />
        </div>
        <div className={classes.tiers}>
          <Grid container>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 1</Typography>
              </div>
              <div className={classes.tierItem}>
                <img className={classes.itemImg} src="https://goo.gl/M6xtqt" />
                <div className={classes.itemDescription}>
                  <div className={classes.itemPrice}>$54</div>
                  <div className={classes.itemName}>Skin Name Item</div>
                </div>
              </div>
              <div className={classes.tierItem} />
            </Grid>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 2</Typography>
              </div>
              <div className={classes.tierItem} />
              <div className={classes.tierItem}>
                <img className={classes.itemImg} src="https://goo.gl/M6xtqt" />
                <div className={classes.itemDescription}>
                  <div className={classes.itemPrice}>$54</div>
                  <div className={classes.itemName}>Skin Name Item</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 3</Typography>
              </div>
              <div className={classes.tierItem} />
              <div className={classes.tierItem} />
            </Grid>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 4</Typography>
              </div>
              <div className={classes.tierItem} />
              <div className={classes.tierItem}>
                <img className={classes.itemImg} src="https://goo.gl/M6xtqt" />
                <div className={classes.itemDescription}>
                  <div className={classes.itemPrice}>$54</div>
                  <div className={classes.itemName}>Skin Name Item</div>
                </div>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 5</Typography>
              </div>
              <div className={classes.tierItem} />
              <div className={classes.tierItem} />
            </Grid>
            <Grid item xs={2}>
              <div className={`${classes.levelsHeader} ${classes.gradientBg}`}>
                <Typography className={classes.levelText}>Tier 6</Typography>
              </div>
              <div className={classes.tierItem} />
              <div className={classes.tierItem}>
                <img className={classes.itemImg} src="https://goo.gl/M6xtqt" />
                <div className={classes.itemDescription}>
                  <div className={classes.itemPrice}>$54</div>
                  <div className={classes.itemName}>Skin Name Item</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

SkinsInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SkinsInfo);
