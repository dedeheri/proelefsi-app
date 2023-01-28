import { Jelly } from "@uiball/loaders";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { tokenAction } from "../../constants/action/auth";
import { getAllCookies } from "../../utils/Cookie";

function Token() {
  const { search } = useLocation();
  const { i18next } = getAllCookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, success, loading } = useSelector(
    (state) => state.tokenReducer
  );

  useEffect(() => {
    dispatch(tokenAction(search));
  }, [dispatch, i18next, search]);

  if (success) {
    navigate(`/account/reset-password${search}`);
  }

  return loading ? (
    <div className="h-screen flex justify-center items-center">
      <Jelly size={100} speed={1} color="#2374e1" />
    </div>
  ) : true ? (
    <div className={getAllCookies().theme === "dark" ? "dark" : "light"}>
      <div className=" bg-white dark:bg-black text-black dark:text-white w-full h-full min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-medium">{message}</h1>
      </div>
    </div>
  ) : null;
}

export default Token;
