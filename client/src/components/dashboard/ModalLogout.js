import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCookies } from "../../utils/Cookie";
import * as actionType from "../../constants/actiontypes/other";
import { Button, Proccess } from "../";
import { useTranslation } from "react-i18next";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { signOutAction } from "../../constants/action/auth/";

function ModalLogout() {
  const { t } = useTranslation();
  const cookie = getAllCookies();
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modalLogoutReducer);
  const { fetching } = useSelector((state) => state.signOutReducer);
  const { data } = useSelector((state) => state.profilReducer);

  function onCloseLogOut() {
    dispatch({ type: actionType.MODAL_LOGOUT, modal: false });
  }

  function onClickSignOut() {
    dispatch(signOutAction());
  }
  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onCloseLogOut}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed right-0 left-0 top-40  overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-md transform rounded-2xl  text-left align-middle border shadow-md transition-all  ${
                  cookie.theme === "dark"
                    ? "bg-[#242526] border-[#353535]"
                    : "bg-white"
                } `}
              >
                <div className="text-black p-9 dark:text-white space-y-5 md:space-y-6">
                  <ArrowLeftOnRectangleIcon className="w-36 text-red-600 mx-auto" />
                  <h1
                    className={`font-medium text-lg leading-6 text-center ${
                      cookie.theme === "dark" ? "text-white" : "text-black"
                    }`}
                  >
                    <span
                      className={`font-normal ${
                        cookie.theme === "dark"
                          ? "text-gray-400 "
                          : "text-gray-600"
                      }`}
                    >
                      {t("MODAL.MESSAGE_LOGOUT")}
                    </span>{" "}
                    {data?.fullname}
                  </h1>

                  <div className="flex space-x-3">
                    <div className="w-full">
                      {fetching ? (
                        <Proccess />
                      ) : (
                        <Button
                          label={t("MODAL.LOGOUT")}
                          onClick={onClickSignOut}
                        />
                      )}
                    </div>

                    <div
                      onClick={onCloseLogOut}
                      className={`font-medium cursor-pointer text-md border w-full  h-10 md:h-11 flex items-center justify-center rounded-md  duration-300 space-x-3   ${
                        cookie.theme === "dark"
                          ? "border-[#353535] text-white hover:bg-[#353535]"
                          : "hover:bg-gray-100 text-black"
                      }`}
                    >
                      <h1 className="font-medium text-sm w-full whitespace-nowrap flex justify-center">
                        {t("MODAL.CANCEL")}
                      </h1>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalLogout;
