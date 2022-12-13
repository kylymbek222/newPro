import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavSidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
import { Box } from "@mui/material";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="app">
      <div className="content">
        <NavSidebar sidebarOpen={sidebarOpen} />
        <div>
          <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Box sx={{ width: "100%", height: "95%" }}>
            <Box
              sx={{
                padding: "5px 10px 50px 10px",
                width: "100%",
                height: "100%",
                border: "1px solid #F8F5F2",
              }}
            >
              <Outlet />
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Layout;
