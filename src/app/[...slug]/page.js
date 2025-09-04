import React from "react";
import { notFound } from "next/navigation";
import { sectionRegistry } from "@/sections/sectionsRegistry";
import { getPageData } from "@/utils/pageApi";

export const revalidate = 60;
const DynamicPage = async ({ params }) => {
  const resolvedParams = await params;
  const slugArray = resolvedParams?.slug || [];
  const slugPath = slugArray.join("/");
  let finalSlug = slugPath === "" ? "home" : `${slugPath}`;
  const data = await getPageData(finalSlug);
  if (data?.data?.pageBy === null) {
    notFound();
  }
  const pageBlocks = data?.data?.pageBy?.pageBuilder?.pageBuilder || [];

  return (
    <div>
      {pageBlocks.map((block, i) => {
        const key = Object.keys(block)[0];
        const Component = sectionRegistry[key];

        if (!Component) {
          console.warn(`No component found for ${key}`);
          return null;
        }

        return <Component key={i} {...block[key]} />;
      })}
    </div>
  );
};

export default DynamicPage;
