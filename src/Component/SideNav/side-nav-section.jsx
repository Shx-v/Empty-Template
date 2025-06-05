import { Box, Typography, List } from "@mui/material";
import PropTypes from "prop-types";
import SideNavItem from "./side-nav-item";

const renderItems = (items = [], depth = 1, toggleSideNav) =>
  items.map((item, index) => (
    <SideNavItem
      key={index}
      item={item}
      depth={depth}
      toggleSideNav={toggleSideNav}
    />
  ));

const SideNavSection = ({ section, toggleSideNav }) => {
  if (!section) return null;

  if (section.header) {
    return (
      <Box sx={{ pt: 1 }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ px: 2, py: 1 }}
        >
          {section.header}
        </Typography>
        <List disablePadding>
          {renderItems(section.children, 1, toggleSideNav)}
        </List>
      </Box>
    );
  }

  return (
    <List disablePadding>
      <SideNavItem item={section} depth={1} toggleSideNav={toggleSideNav} />
    </List>
  );
};

SideNavSection.propTypes = {
  section: PropTypes.shape({
    header: PropTypes.string,
    children: PropTypes.array,
    title: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.element,
  }),
  toggleSideNav: PropTypes.func,
};

export default SideNavSection;
