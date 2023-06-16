import {
  AppBar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  makeStyles,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../images/kalalaya-logo2-01.webp";
import { NavLink } from "../Styles/style";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
  const handleopen = () => {
    setopen(true);
  };

  return (
    <AppBar position="sticky" color="dark">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img width={"200px"} src={logo} alt="" />
        <Button
          sx={{ display: { md: "none", xs: "block" } }}
          onClick={handleopen}
        >
          <MenuIcon />
        </Button>
        <Drawer
          variant="temporary"
          anchor="top"
          open={open}
          onClose={handleClose}
          sx={{ width: "500px" }}
        >
          <div
            style={{
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-around",
              padding: "30px",
            }}
          >
            <Button color="primary">
              <NavLink component={Link} to={"/"}>
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink component={Link} to={"/aboutus"}>
                About Us
              </NavLink>
            </Button>
            <Button>
              <NavLink component={Link} to={"/Events"}>
                Events
              </NavLink>
            </Button>
            <Button>
              <NavLink component={Link} to={"/galary"}>
                Galary
              </NavLink>
            </Button>
          </div>
        </Drawer>
        <Box display={{ md: "block", xs: "none" }}>
          <Button>
            <NavLink component={Link} to={"/"}>
              Home
            </NavLink>
          </Button>
          <Button>
            <NavLink component={Link} to={"/aboutus"}>
              About Us
            </NavLink>
          </Button>
          <Button>
            <NavLink component={Link} to={"/Events"}>
              Events
            </NavLink>
          </Button>
          <Button>
            <NavLink component={Link} to={"/galary"}>
              Galary
            </NavLink>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
