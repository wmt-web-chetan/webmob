import Image from "next/image";
import React from "react";

const NextGenCard = ({ data }) => {
  return (
    <div
      className={`border rounded-2xl max-w-[320px] flex gap-3 p-4 transition-all duration-300 hover:shadow-lg ${data.borderColor} ${data.bgColor}`}
    >
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${data.iconBg}`}
        >
          {data.icon}
        </div>
      </div>
      <div className="flex-1">
        <h1 className={`text-lg font-semibold mb-2 ${data.titleColor}`}>
          {data.title}
        </h1>
        <p className={`text-sm leading-relaxed ${data.textColor}`}>
          {data.services}
        </p>
      </div>
    </div>
  );
};

export default NextGenCard;
