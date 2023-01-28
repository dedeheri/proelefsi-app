import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import resendOTPAction from "../../constants/action/auth/resendOTP.action";

function ResendOTP() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { fetching } = useSelector((state) => state.resendOTPReducer);

  async function handleChange(e) {
    e.preventDefault();
    dispatch(resendOTPAction());
  }

  return (
    <div className="font-medium text-sm text-gray-500 dark:text-gray-400 flex justify-center space-x-2">
      <h1 className="flex justify-center"> {t("AUTH.RECEIVE")}</h1>
      {fetching ? (
        <h1 className="text-blue-500 flex hover:text-blue-400 duration-300 cursor-pointer justify-center ">
          {t("AUTH.SEND")}...
        </h1>
      ) : (
        <h1
          onClick={handleChange}
          className="text-blue-500 flex hover:text-blue-400 duration-300 cursor-pointer justify-center "
        >
          {t("AUTH.RESEND")}
        </h1>
      )}
    </div>
  );
}

export default ResendOTP;
