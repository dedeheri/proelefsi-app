import React from "react";
import {
  Trending,
  ForYou,
  Container,
  MaxWidth,
  TabVisitor,
  TabTopics,
  Feed,
} from "../../../components/main";

function Home() {
  return (
    <Container title={"Home"}>
      <div className="space-y-10">
        <MaxWidth>
          <Trending />
        </MaxWidth>
        <div className="border-b dark:border-[#353535]" />
        <MaxWidth>
          <TabTopics />
          <Feed />
          {/* <ForYou /> */}
        </MaxWidth>
      </div>
    </Container>
  );
}

export default Home;
