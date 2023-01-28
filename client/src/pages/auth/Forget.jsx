import React, { useState } from "react";
import { Button, Input, Proccess } from "../../components";
import { useTranslation } from "react-i18next";
import Container from "../../components/auth/Container";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordAction } from "../../constants/action/auth";
import { useEffect } from "react";
import { CLEAR_FORGET_PASSWORD_ACCOUNT } from "../../constants/actiontypes/auth";

function Forget() {
  const dispatch = useDispatch();

  const { validation, fetching, message } = useSelector(
    (state) => state.forgetPasswordReducer
  );

  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  async function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(forgetPasswordAction(email));
  }


  useEffect(() => {
    return () => dispatch({type : CLEAR_FORGET_PASSWORD_ACCOUNT})
  },[dispatch])

  return (
    <Container title={t("AUTH.TITLE.FORGET_PASSWORD")}>
      <form onSubmit={handleOnSubmit} className="space-y-5">
        <h1 className="font-medium leading-5">
          {t("AUTH.FORGET_LABEL_EMAIL")}
        </h1>
        <Input
          placeholder={"Email"}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          error={validation?.email?.message || message}
        />
        {fetching ? <Proccess /> : <Button label={t("AUTH.SEND")} />}
      </form>
    </Container>
  );
}

export default Forget;
