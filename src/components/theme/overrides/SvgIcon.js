// ----------------------------------------------------------------------
import { useTheme, useMediaQuery } from "@mui/material";
export default function SvgIcon() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: 20,
          height: 20,
          fontSize: "inherit",
        },
        fontSizeMedium: {
          width: 24,
          height: 24,
          fontSize: "24px",
          [theme.breakpoints.down("xl")]: {
            fontSize: "20px",
          },
        },
        fontSizeLarge: {
          width: 28,
          height: 28,
          fontSize: "28px",
          [theme.breakpoints.down("xl")]: {
            width: 26,
            height: 26,
            fontSize: "26px",
          },
        },
      },
    },
  };
}
