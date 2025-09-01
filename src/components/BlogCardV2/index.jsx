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
        <div className="border border-text-disabled rounded-4xl p-10 flex flex-col gap-y-6 ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-primary bg-[#335FFF1A] px-4 py-2 rounded-full text-base font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl font-normal">
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
              className="w-full h-[800px] rounded-3xl object-cover "
            />
            <p className="text-text-secondary opacity-50 text-xl font-normal">
              {description}
            </p>
          </div>

          {/* Author Section */}
          <div className="flex flex-row gap-4 items-center mt-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center border border-text-disabled overflow-hidden">
              <Image
                src={authorImg}
                alt={author}
                className="rounded-full object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-text-primary text-xl font-medium">
                {author}
              </h5>
              <p className="text-text-secondary opacity-50 text-base font-normal">
                {dayjs(date).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full border border-text-disabled rounded-3xl p-4 flex flex-col justify-between">
          {/* Blog Image */}
          <Image
            src={image}
            alt={title}
            className="w-full h-[350px] rounded-3xl object-cover "
          />

          {/* Middle Content (Tags, Title, Description + Read More) */}
          <div className="flex flex-col gap-y-6 flex-grow mt-6">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-primary bg-[#335FFF1A] px-3 py-1 rounded-full text-base font-normal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <div className="flex flex-col gap-2 items-start">
                <p className="text-text-primary text-lg font-normal">
                  {description}
                </p>
                <button className="text-primary text-lg font-medium">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Author Section */}
          <div className="flex flex-row gap-4 items-center mt-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center border border-text-disabled overflow-hidden">
              <Image
                src={authorImg}
                alt={author}
                className="rounded-full object-cover"
                width={56}
                height={56}
              />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-text-primary text-xl font-medium">
                {author}
              </h5>
              <p className="text-text-secondary opacity-50 text-base font-normal">
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
