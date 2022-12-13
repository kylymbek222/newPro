import React from "react";
import { Box } from "@mui/material";
import Header from "components/ui/Header";

const Report = () => {
  return (
    <Box height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Отчет"></Header>
      </Box>
    </Box>
  );
};

export default Report;
