import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProfilePopover = (props) => {
  const { anchorEl, onClose, open = false, ...other } = props;
  const navigate = useNavigate();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      disableScrollLock
      onClose={onClose}
      open={open}
      slotProps={{
        paper: {
          sx: {
            minWidth: 250,
            p: 0,
            bgcolor: "background.paper",
            color: "text.primary",
          },
        },
      }}
      {...other}
    >
      <Stack width="100%">
        <Stack paddingX={3} paddingY={2} spacing={0.5}>
          <Typography fontWeight="bold" fontSize={18} color="text.primary">
            Username
          </Typography>
          <Typography variant="body2" color="text.secondary">
            User's Full Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            useremail@gmail.com
          </Typography>
        </Stack>

        <Divider sx={{ borderColor: "divider" }} />

        <List dense>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/profile")}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/settings")}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/account")}>
              <ListItemIcon>
                <ManageAccountsIcon fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="My Account" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider sx={{ borderColor: "divider" }} />

        <Stack justifyContent={"center"} paddingX={4} paddingY={1}>
          <Button
            startIcon={<LogoutIcon />}
            onClick={() => {
              onClose();
            }}
            color="primary"
          >
            Logout
          </Button>
        </Stack>
      </Stack>
    </Popover>
  );
};

ProfilePopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default ProfilePopover;
