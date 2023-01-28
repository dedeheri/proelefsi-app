import api from "./base";
import config from "./config";

function SIGNIN(data) {
  return api.post(
    "/api/v1/auth/signin",
    {
      email: data.email,
      password: data.password,
      remember_me: data.remember_me,
    },
    config.headers
  );
}

function SIGNOUT() {
  return api.get("/api/v1/auth/signout", config.headers);
}
function FORGETPASSWORD(email) {
  return api.post(
    "/api/v1/auth/password/forget",
    {
      email,
    },
    config.headers
  );
}

function VERIFYTOKEN(token) {
  return api.get(`/api/v1/auth/password/verify${token}`, config.headers);
}

function RESETPASSWORD(token, password, repeatPassword) {
  return api.post(
    `/api/v1/auth/password/change/${token}`,
    {
      password,
      repeatPassword,
    },
    config.headers
  );
}

function OTPSEND(otp) {
  return api.post(
    "/api/v1/auth/otp",
    {
      otp: otp,
    },
    config.headers
  );
}

function OTPRESEND() {
  return api.get("/api/v1/auth/otp/resend", config.headers);
}

function HISTORYLOGIN() {
  return api.get("/api/v1/user/auth/history-login");
}

function EMAILVERIFICATION() {
  return api.get("/api/v1/auth/otp/email-verification", config.headers);
}

export {
  OTPRESEND,
  HISTORYLOGIN,
  SIGNIN,
  SIGNOUT,
  FORGETPASSWORD,
  VERIFYTOKEN,
  RESETPASSWORD,
  OTPSEND,
  EMAILVERIFICATION,
};
