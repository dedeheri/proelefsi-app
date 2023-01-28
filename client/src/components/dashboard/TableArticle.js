import {
  ChartBarIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import millify from "millify";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Page from "./Page";
import { useDispatch } from "react-redux";
import { DELETE_ARTICLE_MODAL } from "../../constants/actiontypes/other";
import convertToPlain from "../../utils/convertToPlantText";
import DropdownArticleTable from "./particle/DropdownArticleTable";

function TableArticle({ data, page, perPage }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const coulums = [
    t("ARTICLE.TABLE.ARTICLE"),
    t("ARTICLE.TABLE.TOPICS"),
    t("ARTICLE.TABLE.WRITTER"),
    t("ARTICLE.TABLE.READING"),
    t("ARTICLE.TABLE.VIEW"),
    t("ARTICLE.TABLE.DATE"),
  ];

  function handleEdit(id) {
    navigate({
      pathname: `edit/${id}`,
    });
  }

  function onClickAnalysis(id) {
    navigate({
      pathname: `${id}/analysis`,
    });
  }

  function onClickShowModalDelete(title, id) {
    dispatch({ type: DELETE_ARTICLE_MODAL, data: title, id: id, modal: true });
  }

  return (
    <div className="overflow-y-auto h-full scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-thin">
      <table className="min-w-full table-fixed">
        <thead>
          <tr className="border-b dark:border-[#3A3B3C] ">
            {coulums.map((items, key) => (
              <th
                key={key}
                className="whitespace-nowrap font-medium text-md text-left text-gray-500 py-3 px-7"
              >
                {items}
              </th>
            ))}
          </tr>
        </thead>

        {/* content */}
        <tbody>
          {Object.values(data).map((d, i) => (
            <tr
              key={i}
              className=" text-black hover:bg-gray-100 dark:hover:bg-[#19191a] border-b duration-400 dark:border-[#3A3B3C] duration-300"
            >
              <td className=" text-black  dark:text-white whitespace-nowrap flex justify-between items-center group px-5 md:px-7 py-5  md:w-full">
                <div className="flex items-center space-x-5">
                  {/* image */}
                  <div className="w-36 lg:w-40 relative">
                    <img
                      src={d.image_url}
                      alt={d.image_url}
                      className="rounded-md h-28 lg:h-32 w-32 lg:w-48"
                    />
                    {d.draft && (
                      <div className="absolute inset-0 bg-black bg-opacity-80 rounded-md">
                        <div className="flex justify-center h-full items-center">
                          <h1 className="font-medium text-xl text-white">
                            {t("ARTICLE.DRAFT")}
                          </h1>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <a
                      href={d.url.originalLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h1 className="text-md font-medium">
                        {d.title.length > 70
                          ? d.title.substring(0, 70) + "..."
                          : d.title}
                      </h1>
                    </a>
                    <h1 className="whitespace-normal text-md text-gray-500 dark:text-gray-400 leading-5">
                      {convertToPlain(d.content).length > 100
                        ? convertToPlain(d.content).substring(0, 100) + "..."
                        : convertToPlain(d.content)}
                    </h1>
                    <div className="items-center flex justify-between space-x-3">
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 duration-300">
                        <button
                          onClick={() => onClickAnalysis(d._id, d.title)}
                          className="dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white duration-300"
                        >
                          <ChartBarIcon className="w-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(d._id)}
                          className="dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white duration-300"
                        >
                          <PencilSquareIcon className="w-5" />
                        </button>
                        <button
                          onClick={() => onClickShowModalDelete(d.title, d._id)}
                          className="dark:text-gray-400 text-gray-500 hover:text-black dark:hover:text-white duration-300"
                        >
                          <TrashIcon className="w-5" />
                        </button>
                        {/* dropdown */}
                        <DropdownArticleTable data={d} />

                        {/* end dropdown */}
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              {/* topics */}
              <td className="font-medium  text-md md:text-md text-black dark:text-white whitespace-nowrap px-5 md:px-7 py-2">
                <h1>{d.topics}</h1>
              </td>
              {/* writter */}
              <td className="font-medium text-md md:text-md text-black dark:text-white whitespace-nowrap px-5 md:px-7 py-2">
                <h1>{d.authour.fullname}</h1>
              </td>
              {/* time */}
              <td className="font-medium text-md md:text-md text-black dark:text-white whitespace-nowrap px-5 md:px-7 py-2">
                <h1>{parseInt(d.reading_time) + " min"}</h1>
              </td>
              {/* view */}
              <td className="font-medium text-md md:text-md text-black dark:text-white whitespace-nowrap px-5 md:px-7 py-2">
                <h1>{millify(d.view)}</h1>
              </td>

              {/* date */}
              <td className="font-medium text-md md:text-md text-black dark:text-white whitespace-nowrap px-5 md:px-7 py-2">
                <h1>{d.timestamps}</h1>
              </td>
            </tr>
          ))}
        </tbody>
        {/* end content */}
      </table>

      <Page page={page} perPage={perPage} cookieName={"pp"} />
    </div>
  );
}

export default TableArticle;
