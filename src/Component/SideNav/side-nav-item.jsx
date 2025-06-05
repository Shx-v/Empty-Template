import {
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Box,
  Typography,
  ButtonBase,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideNavItem = ({ item, depth = 1, toggleSideNav }) => {
  const hasChildren = Array.isArray(item.children);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (hasChildren) {
      setOpen((prev) => !prev);
    } else {
      navigate(item.path);
      toggleSideNav();
    }
  };

  return (
    <>
      <ButtonBase
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          textAlign: "left",
          pl: depth * 2,
          pr: 2,
          py: 1.2,
          borderRadius: 1,
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {item.icon && (
            <ListItemIcon sx={{ minWidth: 32 }}>{item.icon}</ListItemIcon>
          )}
          <Typography variant="body2">{item.title}</Typography>
        </Box>

        {hasChildren &&
          (open ? (
            <ExpandLess fontSize="small" />
          ) : (
            <ExpandMore fontSize="small" />
          ))}
      </ButtonBase>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child, index) => (
              <SideNavItem
                key={child.path || index}
                item={child}
                depth={depth + 1}
                toggleSideNav={toggleSideNav}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default SideNavItem;
