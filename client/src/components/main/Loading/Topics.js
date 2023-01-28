import React from "react";

function Topics() {
  return (
    <div className=" animate-pulse space-y-7">
      <div className="w-56 h-7 bg-gray-200 dark:bg-[#353535] rounded-md" />
      <div className="space-y-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-full h-8 bg-gray-200 dark:bg-[#353535] px-6 py-2 rounded-full"
          />
        ))}
      </div>
    </div>
  );
}

export default Topics;
