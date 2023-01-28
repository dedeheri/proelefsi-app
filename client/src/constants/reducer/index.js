import { combineReducers } from "redux";

import { profilReducer, role } from "./users";

// auth
import {
  signUpAccount,
  verifyEmailAccountAction,
  changeRoleAction,
  deleteAccountReducer,
  signInReducer,
  signOutReducer,
  forgetPasswordReducer,
  tokenReducer,
  resetPasswordReducer,
  OTPReducer,
  emailVerificationReducer,
  resendOTPReducer,
} from "./auth";
import {
  otherRedux,
  slideTopicsRedux,
  reportModalRedux,
  reportModalDeleteMainRedux,
  slideSidebarRedux,
} from "./other";
import {
  topics,
  byTopics,
  trending,
  searchTerm,
  detailArticle,
  forYou,
  report,
  notInterested,
  shortLink,
  searchResult,
  userMainReducer,
  articleByUserReducer,
  searchTermHistoryReducer,
  tagsReducer,
  feedbackReducer,
  visitorReducer,
} from "./main";

// dashboard
import {
  article,
  userReducer,
  homeReducer,
  totalReducer,
  totalChartReducer,
} from "./dashboard";

// other
import { modalLogoutReducer } from "./others";

const combineReducer = combineReducers({
  profilReducer,
  visitorReducer,
  totalReducer,
  feedbackReducer,
  emailVerificationReducer,
  resetPasswordReducer,
  OTPReducer,
  tokenReducer,
  signOutReducer,
  role,
  otherRedux,
  forgetPasswordReducer,
  topics,
  slideSidebarRedux,
  trending,
  slideTopicsRedux,
  reportModalDeleteMainRedux,
  searchTerm,
  detailArticle,
  forYou,
  reportModalRedux,
  byTopics,
  report,
  notInterested,
  shortLink,
  searchResult,
  article,
  tagsReducer,
  userMainReducer,
  articleByUserReducer,
  // other
  modalLogoutReducer,
  // account
  signUpAccount,
  verifyEmailAccountAction,
  changeRoleAction,
  deleteAccountReducer,
  signInReducer,
  resendOTPReducer,
  // dashboard
  userReducer,
  homeReducer,
  searchTermHistoryReducer,
  totalChartReducer,
});

export default combineReducer;
