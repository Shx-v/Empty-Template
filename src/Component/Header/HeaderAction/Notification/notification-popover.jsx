import {
  Popover,
  Typography,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";

const NotificationPopover = (props) => {
  const {
    anchorEl,
    onClose,
    open = false,
    notifications = [],
    onViewAll, // callback for "View All" button
    ...other
  } = props;

  // Show only 3 latest notifications
  const latestNotifications = notifications.slice(0, 3);

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
            minWidth: 280,
            maxWidth: 320,
            maxHeight: 400,
            p: 0,
            display: "flex",
            flexDirection: "column",
          },
        },
      }}
      {...other}
    >
      <Box
        sx={{
          px: 2,
          py: 1,
          borderBottom: 1,
          borderColor: "divider",
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        <Typography>Notifications</Typography>
      </Box>

      {notifications.length === 0 ? (
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ py: 5, px: 2, textAlign: "center" }}
        >
          <NotificationsNoneIcon fontSize="large" color="disabled" />
          <Typography variant="body2" color="text.secondary" mt={1}>
            You're all caught up!
          </Typography>
        </Stack>
      ) : (
        <Box
          sx={{
            overflowY: "auto",
            maxHeight: 300,
          }}
        >
          <List dense>
            {latestNotifications.map((note, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={note.title} secondary={note.timestamp} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {notifications.length > 3 && (
        <Box
          sx={{
            borderTop: 1,
            borderColor: "divider",
            p: 1,
            textAlign: "center",
          }}
        >
          <Button size="small" onClick={onViewAll} fullWidth>
            View All
          </Button>
        </Box>
      )}
    </Popover>
  );
};

export default NotificationPopover;
