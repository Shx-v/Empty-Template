import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { NotificationButton } from "./HeaderAction/Notification";
import { ProfileButton } from "./HeaderAction/Profile";

const Header = (props) => {
  const { toggleSideNav, isSideNavOpen, loggedIn = false } = props;
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ backgroundColor: "#fff", color: "#000" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: "none" } }}
          onClick={toggleSideNav}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dummy App
        </Typography>
        {loggedIn && (
          <Box sx={{ display: { xs: "flex", md: "flex" }, gap: 2 }}>
            <NotificationButton />
            <ProfileButton />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
