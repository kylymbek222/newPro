import React from "react";
import { Box } from "@mui/material";
import Header from "components/ui/Header";

const Kanban = () => {
  return (
    <Box height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Канбан"></Header>
      </Box>
    </Box>
  );
};

export default Kanban;
