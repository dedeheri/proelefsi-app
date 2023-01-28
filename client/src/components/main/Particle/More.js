import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  EllipsisVerticalIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { REPORT_MODAL } from "../../../constants/actiontypes/other";
import ReactTooltip from "react-tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import toaster from "../../../utils/toaster";
import { getAllCookies } from "../../../utils/Cookie";
import { FacebookButton } from "react-social";
import { facebookDark, facebookLight } from "../../../assets/image";

function More({ title, id, result }) {
  const { t } = useTranslation();
  const cookie = getAllCookies();
  const dispatch = useDispatch();
  function onShowModalReport() {
    dispatch({ type: REPORT_MODAL, payload: true, data: title, id: id });
  }

  const handleCopyLink = () => {
    toaster("success", t("ARTICLE.COPY_LINK"));
  };

  return (
    <Menu as="div" className="relative  inline-block  ">
      <ReactTooltip place={"bottom"} style={"dark"} effect={"solid"} />
      <div>
        <Menu.Button
          data-tip={"Lainnya"}
          className="dark:text-gray-400  duration-300 text-[#5E5E5E] hover:text-black dark:hover:text-white"
        >
          <EllipsisVerticalIcon className="w-6" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-50 shadow-md dark:shadow-gray-900  right-0 w-44 bg-white dark:bg-[#242526] rounded-md border dark:border-[#3A3B3C]">
          <div className="space-y-1">
            <Menu.Item>
              <>
                <CopyToClipboard text={result.url.shortLink}>
                  <div
                    onClick={handleCopyLink}
                    className="hover:dark:bg-[#3A3B3C] hover:bg-gray-100 p-1 cursor-pointer flex w-full items-center  space-x-2 px-4"
                  >
                    <LinkIcon className="w-5 h-5" />
                    <h1>{t("ARTICLE.ADD.DROPDOWN.COPY")}</h1>
                  </div>
                </CopyToClipboard>
              </>
            </Menu.Item>

            <Menu.Item>
              <div className="hover:dark:bg-[#3A3B3C] hover:bg-gray-100 p-1 cursor-pointer flex w-full items-center  space-x-2 px-4">
                <FacebookButton
                  url={result.url.shortLink}
                  appId={5716591165085732}
                >
                  <div className="flex items-center space-x-3">
                    {cookie.theme === "dark" ? (
                      <img
                        alt="twitter"
                        src={facebookLight}
                        className="w-4 h-5"
                      />
                    ) : (
                      <img
                        alt="twitter"
                        src={facebookDark}
                        className="w-4 h-5"
                      />
                    )}

                    <h1>Facebook</h1>
                  </div>
                </FacebookButton>
              </div>
            </Menu.Item>

            <div className=" border-b dark:border-[#3A3B3C]" />

            <Menu.Item>
              <div
                onClick={onShowModalReport}
                className="hover:dark:bg-[#3A3B3C] hover:bg-gray-100  p-1 cursor-pointer flex w-full items-center space-x-2 px-4"
              >
                <ExclamationTriangleIcon className="w-5 h-5" />
                <h1>Report</h1>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default More;
