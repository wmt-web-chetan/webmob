import Image from "next/image";
import React from "react";

const ClientOverview = () => {
  const formatePosition = (text) => {
    if (!text) return null;
    const words = text.split("@");
    if (words.length < 2) return text;
    const position = <span className="">{words[0]}</span>;
    const remainder = <span className=" font-medium">{words[1]}</span>;

    return (
      <>
        {position} @ {remainder}
      </>
    );
  };

  return (
    <div className="px-wrapper-v2 section-padding-y mx-0 sm:mx-18 2xl:mx-36">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 border border-text-disabled rounded-[40px] flex sm:flex-row flex-col gap-16">
        <div className="flex xl:flex-row flex-col w-full gap-4 sm:gap-8 md:gap-8 lg:gap-16 items-center xl:items-start">
          {/* Image Section */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              alt="client"
              width={1600}
              height={1600}
              className="w-36 h-36 sm:w-52 sm:h-52 object-cover rounded-full"
            />

            <div className="flex flex-col items-center gap-1 sm:gap-2 ">
              <h1 className="text-text-secondary text-2xl font-bold leading-tight">Vick</h1>
              <p className="text-text-secondary text-base">
                {formatePosition("CEO & Founder @ ShopSphere")}
              </p>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-start gap-2 md:gap-4 flex-1">
            <h1 className="text-text-primary h2-heading font-bold">
              Client Overview
            </h1>
            <p className="text-text-secondary text-base sm:text-xl md:text-2xl">
              Our client, ShopSphere is a mid-sized e-commerce retailer
              specializing in fashion and lifestyle products. With a rapidly
              growing customer base across three continents, ShopSphere
              struggled to provide timely and consistent customer support. Their
              existing support model relied on a team of 40 human agents
              handling queries via email, live chat, and social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOverview;
