import React from "react";
import {
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuAvatar from "components/ui/Menu";

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        height: "60px",
        pt: "3px",
        borderBottom: "1px solid #F8F5F2",
        [theme.breakpoints.down("lg")]: {
          height: "50px",
          pt: "1px",
        },
      }}
    >
      <Box display="flex" flexDirection="row" alignItems="center">
        <IconButton
          onClick={() => setSidebarOpen(!sidebarOpen)}
          size={matches ? "small" : "medium"}
        >
          <MenuIcon fontSize="medium" />
        </IconButton>
        <Box
          display="flex"
          backgroundColor="#F8F5F2"
          borderRadius="25px"
          width="400px"
          sx={{
            [theme.breakpoints.down("lg")]: {
              width: "300px",
              height: "30px",
            },
          }}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton
            type="button"
            sx={{ p: 1 }}
            size={matches ? "small" : "medium"}
          >
            <SearchIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box>
          <IconButton size={matches ? "small" : "medium"}>
            <NotificationsIcon fontSize="large" />
          </IconButton>
        </Box>
        <MenuAvatar />
      </Box>
    </Box>
  );
};

export default Topbar;
