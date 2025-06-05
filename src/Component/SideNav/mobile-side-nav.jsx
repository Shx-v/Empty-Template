import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SideNavSection from "./side-nav-section";

export const MobileSideNav = (props) => {
  const { toggleSideNav, isSideNavOpen, sections = [] } = props;
  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={isSideNavOpen}
      onClose={toggleSideNav}
      ModalProps={{ keepMounted: true }}
      TransitionComponent={Slide}
      transitionDuration={300}
    >
      <Box sx={{ width: 240 }} role="presentation">
        {sections.map((section, index) => (
          <SideNavSection
            key={index}
            section={section}
            toggleSideNav={toggleSideNav}
          />
        ))}
      </Box>
    </Drawer>
  );
};
