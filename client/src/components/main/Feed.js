import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { byTopics } from "../../constants/action/main";
import { CLEAR_BY_TOPICS_ARTICLE } from "../../constants/actiontypes/main";
import query from "query-string";
import { CardVertical, CardVerticalLoading } from ".";
function Feed() {
  // params
  const location = useLocation();
  const queryParsed = new query.parse(location.search);
  // redux
  const dispatch = useDispatch();
  const { data, loading, error, message } = useSelector(
    (state) => state.byTopics
  );

  // calling api
  useEffect(() => {
    dispatch(byTopics(queryParsed.feed));
  }, [dispatch, queryParsed.feed]);

  // clear data in redux
  useEffect(() => {
    return () => dispatch({ type: CLEAR_BY_TOPICS_ARTICLE });
  }, [dispatch, queryParsed.feed]);

  return loading ? (
    <CardVerticalLoading />
  ) : error ? (
    <div>
      <h1>{message}</h1>
    </div>
  ) : (
    <div className="space-y-9">
      {data.map((data) => (
        <CardVertical data={data} key={data._id} />
      ))}
    </div>
  );
}

export default Feed;
