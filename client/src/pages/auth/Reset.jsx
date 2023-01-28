import React, { useEffect, useState } from "react";
import { Button, Password, Proccess } from "../../components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Container from "../../components/auth/Container";
import { getAllCookies } from "../../utils/Cookie";
import { useDispatch, useSelector } from "react-redux";
import { resetAction, tokenAction } from "../../constants/action/auth";

function Reset() {
  const { search } = useLocation();
  const { i18next } = getAllCookies();
  const dispatch = useDispatch();
  const { message, error, success, loading } = useSelector(
    (state) => state.tokenReducer
  );

  const { t } = useTranslation();

  const [state, setState] = useState({
    password: "",
    repeatPassword: "",
  });

  function handleChange(e) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    dispatch(resetAction(search, state.password, state.repeatPassword));
  }

  useEffect(() => {
    dispatch(tokenAction(search));
  }, [dispatch, i18next, search]);

  return (
    <Container title={t("AUTH.TITLE.RESET_PASSWORD")}>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{message}</h1>
      ) : (
        <form onSubmit={handleOnSubmit} className="space-y-5">
          <Password
            placeholder={t("AUTH.PASSWORD")}
            name="password"
            onChange={handleChange}
            error={state?.message?.validation?.password?.message}
          />
          <Password
            placeholder={t("AUTH.REPEAT_PASSWORD")}
            name="repeatPassword"
            onChange={handleChange}
            error={state?.message?.validation?.repeatPassword?.message}
          />

          {state.fetching ? <Proccess /> : <Button label={t("AUTH.SEND")} />}
        </form>
      )}
    </Container>
  );
}

export default Reset;
