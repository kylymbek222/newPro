import React, { useState } from "react";
import {
  Paper,
  Box,
  Grid,
  Link,
  Typography,
  CssBaseline,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import PropTypes from "prop-types";
import bgImg from "../../components/assets/bgImg.jpg";
import logo from "../../components/assets/logo.png";
import AuthForm from "../../components/forms/AuthForm";
import Copyright from "components/ui/Copyright";
const Login = () => {
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={9}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={5} md={3} component={Paper} elevation={1} square>
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "97vh",
          }}
        >
          <Box
            sx={{
              marginBottom: "10px",
            }}
          >
            <img src={logo} alt="logo" width="90px" />
          </Box>
          <Typography
            component="h1"
            align="center"
            sx={{
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Автоматизированная система управления проектами
          </Typography>
          <AuthForm />
        </Box>
        <Copyright sx={{ marginTop: "auto" }} />
      </Grid>
    </Grid>
  );
};

export default Login;
