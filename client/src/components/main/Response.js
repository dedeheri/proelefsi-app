import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import feedbackArticleAction from "../../constants/action/main/feedback.action";

function Response() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { fetching } = useSelector((state) => state.feedbackReducer);
  const [responseId, setResponseId] = useState(null);

  const emot = [
    {
      id: 1,
      emoji:
        "https://res.cloudinary.com/dziac4tog/image/upload/v1674266704/assets/image/like_puu6kg.png",
      response: t("MAIN.ARTICLE.RESPONSE.LIKE"),
    },
    {
      id: 2,
      emoji:
        "https://res.cloudinary.com/dziac4tog/image/upload/v1674266704/assets/image/haha_g4vppr.png",
      response: t("MAIN.ARTICLE.RESPONSE.HAHA"),
    },
    {
      id: 3,
      emoji:
        "https://res.cloudinary.com/dziac4tog/image/upload/v1674266704/assets/image/wow_d5j1ui.png",
      response: t("MAIN.ARTICLE.RESPONSE.WOW"),
    },
    {
      id: 4,
      emoji:
        "https://res.cloudinary.com/dziac4tog/image/upload/v1674266704/assets/image/sad_tp1vow.png",
      response: t("MAIN.ARTICLE.RESPONSE.SAD"),
    },
    {
      id: 5,
      emoji:
        "https://res.cloudinary.com/dziac4tog/image/upload/v1674266704/assets/image/angry_gdoysi.png",
      response: t("MAIN.ARTICLE.RESPONSE.ANGRY"),
    },
  ];

  function onClickFeedback(rId, data) {
    setResponseId(rId);
    dispatch(feedbackArticleAction(id, data.emoji, data.response));
  }

  return (
    <div className="flex flex-col space-y-4 items-center">
      <h1 className="text-2xl">{t("MAIN.ARTICLE.RESPONSE.LABEL")}</h1>
      <div className="flex space-x-1 justify-center ">
        {emot.map((emot) => (
          <div
            onClick={() => onClickFeedback(emot.id, emot)}
            key={emot.id}
            className={`cursor-pointer  hover:dark:bg-[#353535] hover:bg-gray-100 group grayscale  duration-200 flex flex-col items-center  rounded-full p-2 relative ${
              fetching && emot.id === responseId
                ? "grayscale-0"
                : "grayscale hover:grayscale-0"
            }`}
          >
            <div className="relative">
              <img src={emot.emoji} className="w-10 h-10 " />

              {fetching && emot.id === responseId && (
                <div className="absolute inset-0">
                  <div className="flex justify-center h-full items-center">
                    <svg
                      className="animate-spin  h-7 w-7 text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-gray-100 dark:bg-[#353535] rounded-md flex justify-center opacity-0 group-hover:opacity-100 mt-2 duration-300 absolute -bottom-7">
              <h1 className="px-3">{emot.response}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Response;
