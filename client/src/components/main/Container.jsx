// components
import ReactTooltip from "react-tooltip";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";

// utlis
import { getAllCookies } from "../../utils/Cookie";
import Navbar from "./Navbar";
import Ads from "./Ads";
import SlideTopics from "./SlideTopics";
import { Report } from ".";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import visitorAction from "../../constants/action/main/visitor.action";

function Container({ title, children }) {
  const { t } = useTranslation();
  const cookie = getAllCookies();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(visitorAction())
  },[dispatch])

  return (
    <div className={cookie.theme === "dark" ? "dark" : "light"}>
      <div className="bg-white dark:bg-black text-black dark:text-white w-full h-full min-h-screen font-sofia">
        <Toaster position="top-center" reverseOrder={false} />

        <ReactTooltip place="bottom" style={"dark"} effect="solid" />
        <Helmet>
          <title>{t(title)} - proelefsi</title>
        </Helmet>

        {/* particle */}
        <Report />

        <Ads />
        <Navbar />
        <SlideTopics />
        {/* <Navlink /> */}

        <div className="mt-6 md:mt-8 lg:mt-10 pb-32">{children}</div>
      </div>
    </div>
  );
}

export default Container;
