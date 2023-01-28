import React from "react";

function Home() {
  return (
    <div className="px-5 md:px-7 pt-4 md:pt-6 lg:pt-8 pb-3 md:pb-2 lg:pb-7 animate-pulse space-y-3 ">
      <div className="flex justify-between items-center ">
        <div className="h-8 w-40 bg-gray-200 dark:bg-[#353535] rounded-md" />
        <div className="h-8 w-20 bg-gray-200 dark:bg-[#353535] rounded-md" />
      </div>
      {[...Array(5)].map((_, i) => (
        <div key={i} className=" space-y-3 ">
          <div className="h-6 w-1/2 bg-gray-200 dark:bg-[#353535] rounded-md" />
          <div className="h-6 w-20 bg-gray-200 dark:bg-[#353535] rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default Home;
