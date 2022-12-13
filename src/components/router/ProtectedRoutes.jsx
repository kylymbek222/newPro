import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/Path";
import Layout from "../../layout";
import { useDispatch, useSelector } from "react-redux";
const ProtectedRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user)
  return user ? <Layout /> : <Navigate to={LOGIN_ROUTE} />;
};

export default ProtectedRoutes;
