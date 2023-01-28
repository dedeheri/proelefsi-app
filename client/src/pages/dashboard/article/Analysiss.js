import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart, Container } from "../../../components";
import { totalAction } from "../../../constants/action/dashboard";
import totalChartAction from "../../../constants/action/dashboard/article/totalChart.action";

function A() {
  const dispatch = useDispatch();
  const { result, loading, message, error } = useSelector(
    (state) => state.totalReducer
  );
  const { result: chartData, message: msg } = useSelector(
    (state) => state.totalChartReducer
  );

  useEffect(() => {
    dispatch(totalAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(totalChartAction());
  }, [dispatch]);

  console.log(msg);

  return (
    <Container>
      <div className="w-full  max-h-full flex space-x-4">
        <div className="w-full h-full space-y-4">
          {/* header State */}
          <div className="px-5 md:px-7 pt-4 md:pt-6 lg:pt-8 pb-3 md:pb-2 lg:pb-7">
            <h1 className="font-medium text-xl md:text-2xl lg:text-3xl ">
              Analysis
            </h1>
          </div>

          {/* card*/}
          <div className="grid grid-cols-3 gap-5 px-5 md:px-7">
            <div className="bg-gray-100 dark:bg-[#18191a] px-7 py-4 rounded-md">
              <h1 className="text-3xl font-medium">{result.post}</h1>
              <h2 className="text-lg">Post</h2>
            </div>
            <div className="bg-gray-100 dark:bg-[#18191a] px-7 py-4 rounded-md">
              <h1 className="text-3xl font-medium">{result.view}</h1>
              <h2 className="text-lg">View</h2>
            </div>
            <div className="bg-gray-100 dark:bg-[#18191a] px-7 py-4 rounded-md">
              <h1 className="text-3xl font-medium">{result.report}</h1>
              <h2 className="text-lg">report</h2>
            </div>
          </div>

          {/* chart */}
          <div className=" px-5 md:px-7">
            <div className="bg-gray-100 h-72 rounded-md px-4">
              <Chart data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default A;
