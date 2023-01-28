import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { draftArticleAction } from "../../../constants/action/dashboard/article.action";
import toaster from "../../../utils/toaster";

function DropdownArticleTable({ data }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    draft: { fetching },
  } = useSelector((state) => state.article);

  function onClickChangeDraft(id, draft) {
    dispatch(draftArticleAction(id, draft));
  }

  function onClickCopyLink() {
    toaster("success", t("ARTICLE.COPY_LINK"));
  }

  return (
    <Menu as="div" className="relative  inline-block text-left ">
      <div>
        <Menu.Button className="dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white duration-300 pt-1">
          <EllipsisVerticalIcon className="w-5" />
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
        <Menu.Items className="absolute z-50  top-0 left-7 w-56 bg-white dark:bg-[#242526] rounded-md border dark:border-[#3A3B3C]">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {fetching ? (
                <div className="px-2 py-2">
                  <div className="h-6 w-full bg-gray-200 dark:bg-[#353535] rounded-md" />
                </div>
              ) : (
                ({ active }) =>
                  data.draft ? (
                    <button
                      onClick={() => onClickChangeDraft(data._id, false)}
                      className={`${
                        active
                          ? "bg-gray-100 text-black dark:bg-[#3A3B3C] dark:text-white"
                          : "text-black dark:text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {t("ARTICLE.ADD.DROPDOWN.PUBLISH")}
                    </button>
                  ) : (
                    <button
                      onClick={() => onClickChangeDraft(data._id, true)}
                      className={`${
                        active
                          ? "bg-gray-100 text-black dark:bg-[#3A3B3C] dark:text-white"
                          : "text-black dark:text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {t("ARTICLE.ADD.DROPDOWN.DRAFT")}
                    </button>
                  )
              )}
            </Menu.Item>
            {data.draft ? null : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active
                          ? "bg-gray-100 text-black dark:bg-[#3A3B3C] dark:text-white"
                          : "text-black dark:text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                    >
                      <CopyToClipboard text={data.url.shortLink}>
                        <button onClick={onClickCopyLink}>
                          {t("ARTICLE.ADD.DROPDOWN.COPY")}
                        </button>
                      </CopyToClipboard>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-gray-100 text-black dark:bg-[#3A3B3C] dark:text-white"
                          : "text-black dark:text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {t("ARTICLE.ADD.DROPDOWN.FACEBOOK")}
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? "bg-gray-100 text-black dark:bg-[#3A3B3C] dark:text-white"
                          : "text-black dark:text-white"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {t("ARTICLE.ADD.DROPDOWN.TWITTER")}
                    </button>
                  )}
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropdownArticleTable;
