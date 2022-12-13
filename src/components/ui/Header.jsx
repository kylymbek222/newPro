import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const Header = ({ title }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box>
      <Typography
        variant="subtitle1"
        color="primary"
        sx={{
          [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
