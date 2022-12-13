import React, { useState, useEffect } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import logo from "../../components/assets/logo.png";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  CORRESPONDENCE_ROUTE,
  DASHBOARD_ROUTE,
  ELECTRONICAPPEL_ROUTE,
  KANBAN_ROUTE,
  REPORT_ROUTE,
  USERS_ROUTE,
  SETTINGS_ROUTE,
  SYSTEMS_ROUTE,
  TASK_ROUTE,
} from "../../utils/Path";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import SettingsIcon from "@mui/icons-material/Settings";
import Copyright from "components/ui/Copyright";

const NavSidebar = ({ sidebarOpen }) => {
  const params = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const [selected, setSelected] = useState("/");

  const handleChange = (path) => {
    setSelected(path);
  };
  const listItems = [
    {
      listIcon: <DashboardIcon fontSize="medium" />,
      listText: "Приборный панель",
      link: DASHBOARD_ROUTE,
    },
    {
      listIcon: <ViewKanbanIcon />,
      listText: "Канбан",
      link: KANBAN_ROUTE,
    },
    {
      listIcon: <AccountTreeIcon />,
      listText: "Системы",
      link: SYSTEMS_ROUTE,
    },
    {
      listIcon: <AssignmentIcon />,
      listText: "Задачи",
      link: TASK_ROUTE,
    },
    {
      listIcon: <AssignmentTurnedInIcon />,
      listText: "Корреспонденция",
      link: CORRESPONDENCE_ROUTE,
    },
    {
      listIcon: <EmailIcon />,
      listText: "Электронное обращения",
      link: ELECTRONICAPPEL_ROUTE,
    },
    {
      listIcon: <GroupIcon />,
      listText: "Пользователи",
      link: USERS_ROUTE,
    },
    {
      listIcon: <AdfScannerIcon />,
      listText: "Отчеты",
      link: REPORT_ROUTE,
    },
    {
      listIcon: <SettingsIcon />,
      listText: "Настройки",
      link: SETTINGS_ROUTE,
    },
  ];
  return (
    <Box
      sx={{
        "& .pro-sidebar .pro-sidebar-inner": {
          height: "100vh",
          bgcolor: ` ${theme.palette.primary.main} !important`,
        },
        "& .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item ": {
          [theme.breakpoints.down("lg")]: {
            padding: sidebarOpen ? "5px 16px 5px 16px" : "5px 5px 5px 5px",
          },
        },
        "& .pro-sidebar .pro-menu .pro-menu-item": {
          color: "white",
          fontSize: "15px",
          [theme.breakpoints.down("lg")]: {
            fontSize: "12px",
          },
        },

        "& .pro-menu-item:hover": {
          backgroundColor: theme.palette.action.hover,
          transition: "all 500ms ease",
        },
        "& .pro-menu-item.active": {
          backgroundColor: theme.palette.action.active,
          transition: "all 500ms ease",
        },
      }}
    >
      <ProSidebar
        collapsed={sidebarOpen}
        width={matches ? "250px" : "200px"}
        collapsedWidth={matches ? "80px" : "70px"}
      >
        <SidebarHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100px",
              margin: "20px 0px 20px 0px",
              [theme.breakpoints.down("lg")]: {
                height: "50px",
              },
            }}
          >
            {sidebarOpen ? (
              <img src={logo} alt="logo" width={matches ? "60px" : "50px"} />
            ) : (
              <img src={logo} alt="logo" width={matches ? "80px" : "70px"} />
            )}
          </Box>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {listItems.map((listItem, index) => (
              <MenuItem
                icon={listItem.listIcon}
                active={selected === listItem.link}
                onClick={() => handleChange(listItem.link)}
                key={index}
              >
                <Link to={listItem.link} />
                {!sidebarOpen && listItem.listText}
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {!sidebarOpen && (
            <Copyright sx={{ color: "#fff", fontSize: "12px" }} />
          )}
        </SidebarFooter>
      </ProSidebar>
    </Box>
  );
};

export default NavSidebar;
