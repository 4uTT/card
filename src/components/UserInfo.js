import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  userInfo: {
    width: "500px",
    boxSizing: "border-box",
    background: "rgba(121, 161, 255, 0.31)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column"
  },
  userInfoTop: {
    display: "flex",
    flexDirection: "row",
    padding: "15px"
  },
  ava: {
    width: "50px",
    height: "50px"
  },
  avaImg: {
    height: "100%",
    width: "100%",
    borderRadius: "4px"
  },
  porgressBar: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px"
  },
  addItem: {
    color: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit"
  },
  percents: {
    display: "flex",
    marginTop: "7px",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: "11px"
  },
  opacity: {
    color: "#ffffff7a"
  },
  title: {
    fontSize: "25px",
    color: "#fff",
    marginBottom: "10px"
  },
  xp: {
    fontSize: "inherit",
    lineHeight: "inherit",
    color: "yellow",
    fontWeight: "600"
  },
  tools: {
    display: "flex",
    flexDirection: "row"
  },
  toolItem: {
    width: "20%"
  },
  toolTitle: {
    textTransform: "uppercase",
    fontSize: "12px",
    color: "#ffffff7a",
    lineHeight: "32px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column"
  },
  gradientBg: {
    background: "linear-gradient(to bottom right, #9bbaff40, #0000002e)"
  },
  unit: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },
  unitImg: {
    maxWidth: "100%",
    maxHeight: "100%"
  },
  unitLock: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffffff47"
  }
});

class UserInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ margin: "20px auto" }} className={classes.userInfo}>
        <div className={classes.userInfoTop}>
          <div className={classes.ava}>
            <img
              className={classes.avaImg}
              src="http://picsum.photos/50/?random"
            />
          </div>
          <div className={classes.porgressBar}>
            <Typography className={classes.title}>LEVEL 28</Typography>
            <LinearProgress value={35} variant="determinate" />
            <div className={classes.percents}>
              <Typography className={classes.addItem}>
                35<span className={classes.xp}> XP</span>
              </Typography>
              <Typography className={`${classes.opacity} ${classes.addItem}`}>
                100<span className={classes.xp}> XP</span>
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.tools}>
          <div className={classes.toolItem}>
            <div className={`${classes.toolTitle} ${classes.gradientBg}`}>
              Head
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
            </div>
          </div>

          <div className={classes.toolItem}>
            <div className={`${classes.toolTitle} ${classes.gradientBg}`}>
              Armor
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
              <div className={classes.unitLock}>
                <i class="material-icons" style={{ color: "#fff" }}>
                  lock
                </i>
              </div>
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
            </div>
          </div>

          <div className={classes.toolItem}>
            <div className={`${classes.toolTitle} ${classes.gradientBg}`}>
              Shield
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
              <div className={classes.unitLock}>
                <i class="material-icons" style={{ color: "#fff" }}>
                  lock
                </i>
              </div>
            </div>
          </div>

          <div className={classes.toolItem}>
            <div className={`${classes.toolTitle} ${classes.gradientBg}`}>
              Weapon
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
            </div>
          </div>

          <div className={classes.toolItem}>
            <div className={`${classes.toolTitle} ${classes.gradientBg}`}>
              Back
            </div>
            <div className={`${classes.unit} ${classes.gradientBg}`}>
              <img className={classes.unitImg} src="https://goo.gl/KUbb1L" />
              <div className={classes.unitLock}>
                <i class="material-icons" style={{ color: "#fff" }}>
                  lock
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UserInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UserInfo);
