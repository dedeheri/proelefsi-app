import React, { useEffect } from "react";
import {
  Container,
  NewActivityArticle,
  NotFound,
  SkeletonHome,
} from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { homeAction } from "../../../constants/action/dashboard/home.action";

function Home() {
  const dispatch = useDispatch();
  const { result, error, message, loading } = useSelector(
    (state) => state.homeReducer
  );

  useEffect(() => {
    dispatch(homeAction());
  }, [dispatch]);

  return (
    <Container title={"HOME.TITLE"}>
      {loading ? (
        <SkeletonHome />
      ) : error ? (
        <NotFound message={message} />
      ) : (
        <NewActivityArticle data={result} />
      )}
    </Container>
  );
}

export default Home;
