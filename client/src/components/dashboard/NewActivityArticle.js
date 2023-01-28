import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { verify } from "../../assets/image";
import { useTranslation } from "react-i18next";

function NewActivityArticle({ data }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function handleDetailUser(id, fullname) {
    navigate({
      pathname: `/dashboard/user/${id}/${fullname.replaceAll(" ", "-")}`,
    });
  }

  return (
    <div className=" px-5 md:px-7 pt-4 md:pt-6 lg:pt-8 pb-3 md:pb-2 lg:pb-7">
      <div className="space-y-2">
        <div className="flex justify-between">
          <h1 className="font-medium text-lg md:text-xl lg:text-2xl">
            {t("HOME.ACTIVITY_ARTICLE")}
          </h1>

          <Link to={"/dashboard/article"}>
            <div className="hover:bg-gray-100 dark:hover:bg-[#242323] rounded-full p-1 cursor-pointer duration-300">
              <ChevronRightIcon className="w-5 h-5 md:h-6 md:w-6" />
            </div>
          </Link>
        </div>

        <div className="space-y-2">
          {data?.map((c, i) => (
            <div key={i}>
              <div className="md:flex md:space-x-2 font-medium">
                <div className="flex space-x-2 items-center">
                  <button
                    onClick={() =>
                      handleDetailUser(c.authour.id, c.authour.fullname)
                    }
                  >
                    {c.authour.fullname}
                  </button>
                  <img src={verify} alt="verify" className="w-4 h-4" />
                </div>
                <div className="flex space-x-2">
                  <h1 className="text-gray-500">Add</h1>
                  <h1>
                    {c.title.length > 50
                      ? c.title.substring(0, 50) + "..."
                      : c.title}
                  </h1>
                </div>
                <div className="flex space-x-2">
                  <h1 className="text-gray-500">In</h1>
                  <h1>{c.topics}</h1>
                </div>
              </div>
              <h1 className="text-gray-500">{c.createdAt}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewActivityArticle;
