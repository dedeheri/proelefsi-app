import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getAllCookies } from "../../utils/Cookie";

import { NavLink } from "react-router-dom";
import { logo, logoLight } from "../../assets/image";

import {
  DocumentTextIcon as DocumentTextIconOutline,
  HomeIcon as HomeIconOutline,
  UserIcon as UserIconOutline,
  PencilIcon as PencilIconOutline,
  ChartBarIcon as ChartBarIconOutline,
  KeyIcon as KeyIconOutline,
} from "@heroicons/react/24/outline";

import {
  DocumentTextIcon as DocumentTextIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
  PencilIcon as PencilIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  KeyIcon as KeyIconSolid,
} from "@heroicons/react/24/solid";

import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SLIDE_SIDEBAR } from "../../constants/actiontypes/other";

const cookie = getAllCookies();

const isActiveClassName = `flex items-center font-medium space-x-5 text-lg w-full  px-3 py-1 rounded-md duration-300 ${
  cookie.theme === "dark"
    ? "hover:bg-[#353535] bg-[#353535]"
    : "hover:bg-gray-200 bg-gray-200"
}`;
const isNoActiveClassName = `flex items-center font-medium space-x-5 text-lg w-full px-3 py-1 rounded-md duration-300 ${
  cookie.theme === "dark"
    ? "text-gray-600 hover:text-white hover:bg-[#353535]"
    : "text-gray-500 hover:text-black hover:bg-gray-200"
}`;

function SidebarMobile({ otoritas, loading }) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.slideSidebarRedux);

  function onClose() {
    dispatch({ type: SLIDE_SIDEBAR, sidebar: false });
  }

  return (
    <Transition.Root show={sidebar} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" />
        </Transition.Child>

        <div className="fixed  inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="-translate-x-full"
                enterTo="-translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="-translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-[15rem]">
                  <div
                    className={`flex h-full flex-col shadow-xl space-y-7 pt-5 ${
                      cookie.theme === "dark"
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <div className="px-4 flex justify-between items-center">
                      {cookie.theme === "dark" ? (
                        <img src={logoLight} alt="logo" className="w-28  h-7" />
                      ) : (
                        <img src={logo} alt="logo" className="w-28 h-7" />
                      )}
                      <button
                        onClick={onClose}
                        className={`dark:text-gray-400 block  md:hidden dark:hover:text-white  p-2 rounded-full duration-300  ${
                          cookie.theme === "dark"
                            ? "hover:bg-[#353535]"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <XMarkIcon className="w-6 md:w-7" />
                      </button>
                    </div>
                    <div className="flex px-4 space-y-2 flex-col items-center w-full">
                      {loading ? (
                        <div className="w-full animate-pulse space-y-4">
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                          <div className="h-8 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                        </div>
                      ) : (
                        <>
                          <NavLink
                            to={"/dashboard"}
                            end={true}
                            className={({ isActive }) =>
                              isActive ? isActiveClassName : isNoActiveClassName
                            }
                          >
                            {({ isActive }) =>
                              isActive ? (
                                <>
                                  <HomeIconSolid className="w-7" />
                                  <h1>{t("SIDEBAR.HOME")}</h1>
                                </>
                              ) : (
                                <>
                                  <HomeIconOutline className="w-7" />
                                  <h1>{t("SIDEBAR.HOME")}</h1>
                                </>
                              )
                            }
                          </NavLink>
                          <NavLink
                            to={"/dashboard/article"}
                            className={({ isActive }) =>
                              isActive ? isActiveClassName : isNoActiveClassName
                            }
                          >
                            {({ isActive }) =>
                              isActive ? (
                                <>
                                  <PencilIconSolid className="w-7" />
                                  <h1>{t("SIDEBAR.ARTICLE")}</h1>
                                </>
                              ) : (
                                <>
                                  <PencilIconOutline className="w-7" />
                                  <h1>{t("SIDEBAR.ARTICLE")}</h1>
                                </>
                              )
                            }
                          </NavLink>

                          <NavLink
                            to={"/dashboard/analysis"}
                            className={({ isActive }) =>
                              isActive ? isActiveClassName : isNoActiveClassName
                            }
                          >
                            {({ isActive }) =>
                              isActive ? (
                                <>
                                  <ChartBarIconSolid className="w-7" />
                                  <h1>{t("SIDEBAR.ANALYSIS")}</h1>
                                </>
                              ) : (
                                <>
                                  <ChartBarIconOutline className="w-7" />
                                  <h1>{t("SIDEBAR.ANALYSIS")}</h1>
                                </>
                              )
                            }
                          </NavLink>
                          {otoritas === "Admin" && (
                            <>
                              <NavLink
                                to={"/dashboard/topics"}
                                className={({ isActive }) =>
                                  isActive
                                    ? isActiveClassName
                                    : isNoActiveClassName
                                }
                              >
                                {({ isActive }) =>
                                  isActive ? (
                                    <>
                                      <DocumentTextIconSolid className="w-7" />
                                      <h1>{t("SIDEBAR.TOPICS")}</h1>
                                    </>
                                  ) : (
                                    <>
                                      <DocumentTextIconOutline className="w-7" />
                                      <h1>{t("SIDEBAR.TOPICS")}</h1>
                                    </>
                                  )
                                }
                              </NavLink>

                              <div
                                className={`border-b w-full  ${
                                  cookie.theme === "dark"
                                    ? "border-[#353535]"
                                    : ""
                                }`}
                              />
                              <NavLink
                                to={"/dashboard/role"}
                                className={({ isActive }) =>
                                  isActive
                                    ? isActiveClassName
                                    : isNoActiveClassName
                                }
                              >
                                {({ isActive }) =>
                                  isActive ? (
                                    <>
                                      <KeyIconSolid className="w-7" />
                                      <h1>{t("SIDEBAR.ROLE")}</h1>
                                    </>
                                  ) : (
                                    <>
                                      <KeyIconOutline className="w-7" />
                                      <h1>{t("SIDEBAR.ROLE")}</h1>
                                    </>
                                  )
                                }
                              </NavLink>

                              <NavLink
                                to={"/dashboard/user"}
                                className={({ isActive }) =>
                                  isActive
                                    ? isActiveClassName
                                    : isNoActiveClassName
                                }
                              >
                                {({ isActive }) =>
                                  isActive ? (
                                    <>
                                      <UserIconSolid className="w-7" />
                                      <h1>{t("SIDEBAR.USER")}</h1>
                                    </>
                                  ) : (
                                    <>
                                      <UserIconOutline className="w-7" />
                                      <h1>{t("SIDEBAR.USER")}</h1>
                                    </>
                                  )
                                }
                              </NavLink>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default SidebarMobile;
