import {
  ArrowUpRightIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  MessageNotFound,
  TopicsLoading,
} from "../../../components/main";

function Topics() {
  const { data, loading, message, error } = useSelector(
    (state) => state.topics
  );

  return (
    <Container>
      <div className="max-w-2xl mx-auto space-y-7">
        {loading ? (
          <TopicsLoading />
        ) : error ? (
          <MessageNotFound message={message} />
        ) : (
          <div className="px-4 space-y-4 w-full">
            <h1 className="font-medium text-xl px-4">Explore Topics</h1>

            <div className="space-y-2 w-full">
              {data.map((data, index) => (
                <Link
                  to={data.topics}
                  key={index}
                  className="flex items-center space-x-5 group px-4 hover:bg-gray-100 hover:dark:bg-[#272727] rounded-md py-1 cursor-pointer"
                >
                  <div className="bg-gray-200 dark:bg-[#4E4F50] p-3 rounded-full ">
                    <DocumentTextIcon className="w-5" />
                  </div>
                  <div className="-space-y-1 w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <h1 className="text-md font-medium">{data.topics}</h1>
                        <h1 className="text-gray-500 hover:!text-black dark:!text-gray-400 ">
                          {data.total}
                        </h1>
                      </div>

                      <ArrowUpRightIcon className="w-5 h-5 dark:text-gray-400 opacity-0 group-hover:opacity-100 text-[#5E5E5E] " />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Topics;
