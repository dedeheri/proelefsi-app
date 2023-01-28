import React from "react";

import { NavLink } from "react-router-dom";

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

function Sidebar({ otoritas, loading }) {
  const { t } = useTranslation();
  return (
    <div className="w-[4rem] duration-300 bg-white z-40 dark:bg-black pt-5 h-full min-h-screen border-r dark:border-[#353535]">
      <div className="flex flex-col h-screen space-y-5 items-center justify-center">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-9 w-9 bg-gray-200 dark:bg-[#353535] rounded-full" />
            <div className="h-9 w-9 bg-gray-200 dark:bg-[#353535] rounded-full" />
            <div className="h-9 w-9 bg-gray-200 dark:bg-[#353535] rounded-full" />
            <div className="h-9 w-9 bg-gray-200 dark:bg-[#353535] rounded-full" />
          </div>
        ) : (
          <>
            <NavLink
              data-tip={t("SIDEBAR.HOME")}
              to={"/dashboard"}
              end={true}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2374e1]  p-1 rounded-md duration-300"
                  : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <HomeIconSolid className="w-7" />
                ) : (
                  <HomeIconOutline className="w-7" />
                )
              }
            </NavLink>
            <NavLink
              data-tip={t("SIDEBAR.ARTICLE")}
              to={"/dashboard/article"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2374e1]  p-1 rounded-md duration-300"
                  : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <PencilIconSolid className="w-7" />
                ) : (
                  <PencilIconOutline className="w-7" />
                )
              }
            </NavLink>

            <NavLink
              data-tip={t("SIDEBAR.ANALYSIS")}
              to={"/dashboard/analysis"}
              className={({ isActive }) =>
                isActive
                  ? "text-[#2374e1]  p-1 rounded-md duration-300"
                  : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
              }
            >
              {({ isActive }) =>
                isActive ? (
                  <ChartBarIconSolid className="w-7" />
                ) : (
                  <ChartBarIconOutline className="w-7" />
                )
              }
            </NavLink>

            {otoritas === "Admin" ? (
              <>
                <NavLink
                  data-tip={t("SIDEBAR.TOPICS")}
                  to={"/dashboard/topics"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#2374e1]  p-1 rounded-md duration-300"
                      : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
                  }
                >
                  {({ isActive }) =>
                    isActive ? (
                      <DocumentTextIconSolid className="w-7" />
                    ) : (
                      <DocumentTextIconOutline className="w-7" />
                    )
                  }
                </NavLink>
                <div className="border-b w-1/3 dark:border-[#353535]" />
                <NavLink
                  data-tip={t("SIDEBAR.ROLE")}
                  to={"/dashboard/role"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#2374e1]  p-1 rounded-md duration-300"
                      : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
                  }
                >
                  {({ isActive }) =>
                    isActive ? (
                      <KeyIconSolid className="w-7" />
                    ) : (
                      <KeyIconOutline className="w-7" />
                    )
                  }
                </NavLink>

                <NavLink
                  data-tip={t("SIDEBAR.USER")}
                  to={"/dashboard/user"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#2374e1]  p-1 rounded-md duration-300"
                      : "dark:text-gray-600 text-gray-500 dark:hover:text-white  p-1 rounded-md hover:text-black duration-300"
                  }
                >
                  {({ isActive }) =>
                    isActive ? (
                      <UserIconSolid className="w-7" />
                    ) : (
                      <UserIconOutline className="w-7" />
                    )
                  }
                </NavLink>
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
