import React from 'react'
import { notFound } from "next/navigation";
import { sectionRegistry } from '@/sections/sectionsRegistry';
import { getPageData } from '@/utils/pageApi';

export const revalidate = 60
const DynamicPage = async ({params}) => {
  const resolvedParams = await params;
  const slugArray = resolvedParams?.slug || [];
  const slugPath = slugArray.join("/");
  let finalSlug = slugPath === "" ? "home" : `${slugPath}`;
  const data = await getPageData(finalSlug);
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default DynamicPage
