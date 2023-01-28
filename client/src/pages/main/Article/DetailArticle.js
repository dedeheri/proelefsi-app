import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Detail,
  RecommendCardInDetail,
  CollapseAds,
  Container,
  Response,
} from "../../../components/main";
import { detailArticle } from "../../../constants/action/main";
import domManipulation from "../../../hooks/domManipulation";
import { getAllCookies } from "../../../utils/Cookie";

function DetailArticle() {
  const cookie = getAllCookies();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, message, loading } = useSelector(
    (state) => state.detailArticle
  );
  const { success, message: feedbackMsg } = useSelector(
    (state) => state.feedbackReducer
  );

  useEffect(() => {
    dispatch(detailArticle(id));
  }, [dispatch, id]);

  useEffect(() => {
    domManipulation(data);
  }, [id, cookie, data]);

  return (
    <Container title={data.title}>
      <div className="space-y-12 dark:bg-black bg-white w-full">
        <Detail data={data} error={error} loading={loading} message={message} />
        {success ? (
          <div className="space-y-12 ">
            <div className="border-t dark:border-[#353535]" />
            <h1 className="text-2xl text-center">{feedbackMsg}</h1>
          </div>
        ) : (
          data.response && (
            <div className="space-y-12">
              <div className="border-t dark:border-[#353535]" />
              <Response />
            </div>
          )
        )}
        <div className="border-t dark:border-[#353535]" />
        <RecommendCardInDetail />
      </div>

      <CollapseAds />
    </Container>
  );
}

export default DetailArticle;
