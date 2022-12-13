import {
  Box,
  IconButton,
  Stack,
  Tooltip,
  Button,
  useTheme,
} from "@mui/material";
import React, { useMemo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockResetSharpIcon from "@mui/icons-material/LockResetSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import { Link } from "react-router-dom";
import { USERS_ROUTE } from "../../utils/Path";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import Header from "components/ui/Header";
import CustomDataGrid from "components/ui/DataGrid";
import { UsersData } from "data/Users";
const Users = () => {
  const [pageSize, setPageSize] = useState(25);
  const theme = useTheme();
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 60 },
      { field: "name", headerName: "Имя", flex: 1 },
      { field: "surname", headerName: "Фамилия", flex: 1 },
      { field: "login", headerName: "Имя пользователя", flex: 1 },
      { field: "job", headerName: "Должность", flex: 1 },
      { field: "role", headerName: "Роль", flex: 1 },
      { field: "email", headerName: "E-mail", flex: 1 },
      { field: "systems", headerName: "Система", flex: 1 },
      {
        field: "status",
        headerName: "Статус",
        flex: 1,
        renderCell: ({ row: { status } }) => {
          return (
            <Box
              width="80%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                status === true
                  ? theme.palette.success.light
                  : theme.palette.error.main
              }
              sx={{ borderRadius: "25px" }}
            >
              {status === "true" ? (
                <CheckCircleSharpIcon sx={{ color: "white" }} />
              ) : (
                <CancelIcon sx={{ color: "white" }} />
              )}
            </Box>
          );
        },
      },
      {
        field: "action",
        headerName: "Функции",
        width: 200,
        renderCell: (params) => {
          return (
            <>
              <Stack direction="row">
                <Tooltip title="Редактировать">
                  <IconButton
                    size="small"
                    component={Link}
                    //to={USERS_ROUTE + "/" + params.row.id}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Заблокировать">
                  <div>
                    <IconButton
                      size="small"
                      disabled={params.row.status === "true" ? false : true}
                    >
                      <LockPersonIcon />
                    </IconButton>
                  </div>
                </Tooltip>
                <Tooltip title="Разблокировать">
                  <div>
                    <IconButton
                      size="small"
                      disabled={params.row.status === "true" ? true : false}
                    >
                      <LockOpenIcon />
                    </IconButton>
                  </div>
                </Tooltip>
                <Tooltip title="Сбросить пароль">
                  <IconButton size="small">
                    <LockResetSharpIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить">
                  <IconButton size="small" color="error">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </>
          );
        },
      },
    ],
    []
  );
  return (
    <Box height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10px"
      >
        <Header title="Пользователи"></Header>
      </Box>
      <CustomDataGrid
        rows={UsersData}
        columns={columns}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </Box>
  );
};

export default Users;
