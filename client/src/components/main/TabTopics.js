import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import query from "query-string";

function TabTopics() {
  const { data } = useSelector((state) => state.topics);
  const location = useLocation();
  const queryParsed = new query.parse(location.search);

  return (
    <div className="w-full  sticky top-0  overflow-scroll md:overflow-hidden overflow-y-scroll scrollbar-thumb-gray-200 dark:scrollbar-thumb-[#2e2e2e] !scrollbar-thumb-rounded-full scrollbar-thin mb-8">
      <div className="flex mb-4 space-x-4 items-center bg-white dark:bg-black h-14">
        <div
          className={`border px-4 py-1 dark:border-[#353535] rounded-full ${
            location.search === ""
              ? "bg-gray-100 text-black dark:bg-[#2e2e2e] dark:text-white"
              : "text-gray-500 dark:text-gray-300"
          }`}
        >
          <Link to={"/"}>
            <h1 className="whitespace-nowrap">For U</h1>
          </Link>
        </div>

        {data.map((topics, index) => (
          <div
            key={index}
            className={`border px-4 py-1 dark:border-[#353535] rounded-full ${
              queryParsed.feed === topics.topics
                ? "bg-gray-100 text-black dark:bg-[#2e2e2e] dark:text-white"
                : "text-gray-500 dark:text-gray-300"
            }`}
          >
            <NavLink to={`/?feed=${topics.topics}`} className={``}>
              <h1 className="whitespace-nowrap">{topics.topics}</h1>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabTopics;
