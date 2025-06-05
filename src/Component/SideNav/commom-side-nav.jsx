import React from "react";
import { ListItemIcon } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import SideNavSection from "./side-nav-section";

const drawerWidth = 240;

export const CommonSideNav = (props) => {
  const { sections } = props;
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          paddingTop: "65px",
        },
      }}
    >
      {sections.map((section, index) => (
        <SideNavSection key={index} section={section} />
      ))}
    </Drawer>
  );
};
