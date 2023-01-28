import React, { useState } from "react";

// compontens
import { Button, Proccess } from "../../components";
import ResendOTP from "../../components/auth/ResendOTP";
import Container from "../../components/auth/Container";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { OTPAction } from "../../constants/action/auth";
 
function Otp() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { fetching, error, validation } = useSelector(
    (state) => state.OTPReducer
  );

  const [code, setcode] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setcode([...code.map((d, indx) => (indx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    const c = code.join("");
    dispatch(OTPAction(parseInt(c)));
  }

  return (
    <Container title={"OTP"}>
      <div className="flex flex-col items-center space-y-3">
        <h1 className="text-2xl font-bold">OTP Verification</h1>
      </div>
      <form onSubmit={handleOnSubmit} className="space-y-6">
        <div className="space-y-3">
          <div className="flex space-x-2">
            {code.map((data, i) => (
              <input
                className="h-10 md:h-11 dark:bg-black  border dark:border-[#353535] rounded-md w-full hover:bg-gray-100 dark:hover:bg-[#353535] outline-none text-center"
                value={data}
                key={i}
                autoFocus={i === 0}
                maxLength={1}
                onChange={(e) => handleChange(e.target, i)}
              />
            ))}
          </div>
          {error && (
            <h1 className="text-red-500 font-medium">
              {validation?.otp?.message}
            </h1>
          )}
        </div>

        <ResendOTP />

        {fetching ? <Proccess /> : <Button label={t("AUTH.SEND")} />}
      </form>
    </Container>
  );
}

export default Otp;
