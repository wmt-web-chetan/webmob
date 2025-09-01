"use client";

import React from "react";
import Image from "next/image";
import dayjs from "dayjs";

const BlogCard = ({
  image,
  title,
  description,
  tags,
  author,
  authorImg,
  date,
  isFullWidth = false,
}) => {
  return (
    <>
      {isFullWidth ? (
        <div className="border border-text-disabled rounded-2xl md:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-y-4 md:gap-y-6">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-primary bg-[#335FFF1A] px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-normal leading-tight">
              {title?.split(":")?.length > 1 ? (
                <>
                  <span>
                    {title.split(":")[0]}:{" "}
                    <span className="font-semibold">{title.split(":")[1]}</span>
                  </span>
                </>
              ) : (
                title
              )}
            </h1>

            <Image
              src={image}
              alt={title}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] rounded-2xl md:rounded-3xl object-cover"
            />
            <p className="text-text-secondary opacity-50 text-sm sm:text-base md:text-lg lg:text-xl font-normal">
              {description}
            </p>
          </div>

          {/* Author Section */}
          <div className="flex flex-row gap-3 md:gap-4 items-center mt-4 md:mt-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-text-disabled overflow-hidden">
              <Image
                src={authorImg}
                alt={author}
                className="rounded-full object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-text-primary text-base md:text-lg lg:text-xl font-medium">
                {author}
              </h5>
              <p className="text-text-secondary opacity-50 text-sm md:text-base font-normal">
                {dayjs(date).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full border border-text-disabled rounded-2xl md:rounded-3xl p-3 md:p-4 flex flex-col justify-between">
          {/* Blog Image */}
          <Image
            src={image}
            alt={title}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-2xl md:rounded-3xl object-cover"
          />

          {/* Middle Content (Tags, Title, Description + Read More) */}
          <div className="flex flex-col gap-y-4 md:gap-y-6 flex-grow mt-4 md:mt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-primary bg-[#335FFF1A] px-2 md:px-3 py-1 rounded-full text-sm md:text-base font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                {title}
              </h1>
              <div className="flex flex-col gap-2 items-start">
                <p className="text-text-primary text-sm sm:text-base md:text-lg font-normal line-clamp-3">
                  {description}
                </p>
                <button className="text-primary text-sm sm:text-base md:text-lg font-medium">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="flex flex-row gap-3 md:gap-4 items-center mt-4 md:mt-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-text-disabled overflow-hidden">
              <Image
                src={authorImg}
                alt={author}
                className="rounded-full object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-text-primary text-base md:text-lg lg:text-xl font-medium">
                {author}
              </h5>
              <p className="text-text-secondary opacity-50 text-sm md:text-base font-normal">
                {dayjs(date).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
