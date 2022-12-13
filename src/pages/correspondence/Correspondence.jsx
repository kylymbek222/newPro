import React from "react";
import { Box } from "@mui/material";
import Header from "components/ui/Header";

const Correspondence = () => {
  return (
    <Box height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Корреспонденция"></Header>
      </Box>
    </Box>
  );
};

export default Correspondence;
