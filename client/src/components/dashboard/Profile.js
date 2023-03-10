import { Popover, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftIcon,
  Cog6ToothIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import * as actionType from "../../constants/actiontypes/other";
import { Jelly } from "@uiball/loaders";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data, loading } = useSelector((state) => state.profilReducer);

  function handleShowFeedback() {
    dispatch({ type: actionType.SHOW_FEEDBACK, payload: true });
  }
  function onClickModalLogout() {
    dispatch({ type: actionType.MODAL_LOGOUT, modal: true });
  }

  return (
    <Popover className="relative">
      <Popover.Button className="rounded-full border border-blue-500 p-0.5 dark:hover:text-white duration-300 mt-1">
        {loading ? (
          <div className="dark:bg-[#353535] bg-gray-300 w-[2.6rem] h-[2.6rem] rounded-full animate-pulse" />
        ) : (
          <img
            src={data?.image_url}
            alt={data?.image_url}
            className="h-[2rem] w-[2rem] md:w-[2.3rem] md:h-[2.3rem] rounded-full"
          />
        )}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-[6.5rem] mt-1 z-10 bg-white dark:bg-[#242526] border dark:border-[#353535] w-72 -translate-x-1/2 transform  rounded-lg">
          {loading ? (
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 ">
              <div className="h-48 flex justify-center items-center">
                <Jelly size={70} speed={1} color="#2374e1" />
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-2 ">
              <div
                onClick={() => navigate("/dashboard/me")}
                className="flex cursor-pointer space-x-3 dark:hover:bg-[#353535] hover:bg-gray-200 px-4 py-2 rounded-md justify-between"
              >
                <div className="flex space-x-2 ">
                  <UserIcon className="w-6" />
                  <h1 className="font-medium text-lg">{data.fullname}</h1>
                </div>
                <ArrowUpRightIcon className="w-5" />
              </div>

              <Link to={"/dashboard/setting"}>
                <div className="flex items-center space-x-3 dark:hover:bg-[#3A3B3C] cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md">
                  <Cog6ToothIcon className="w-6" />
                  <h1 className="font-medium text-lg">{t("OTHER.SETTING")}</h1>
                </div>
              </Link>

              <div
                onClick={handleShowFeedback}
                className="flex space-x-3 dark:hover:bg-[#353535] hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer "
              >
                <ChatBubbleLeftIcon className="w-6" />
                <h1 className="font-medium text-lg">{t("OTHER.FEEDBACK")}</h1>
              </div>

              <div
                onClick={onClickModalLogout}
                className="flex space-x-3 dark:hover:bg-[#353535] hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer "
              >
                <ArrowLeftOnRectangleIcon className="w-6" />
                <h1 className="font-medium text-lg">{t("OTHER.LOGOUT")}</h1>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Profile;
