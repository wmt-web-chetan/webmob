// import { CASE_STUDIES_FRAGMENT } from "./sectionsQuery/caseStudiesSection";

import { AI_CTA_SECTION, AI_CTA_SECTION_FRAGMENT } from "./sectionsQuery/home/AiCtaSection";
import { BRAND_SECTION_FRAGMENT } from "./sectionsQuery/home/brandSection";
import { CASE_STUDIES_FRAGMENT } from "./sectionsQuery/home/caseStudySection";
import { HERO_SECTION_FRAGMENT } from "./sectionsQuery/home/heroSection";
import { MARQUEE_VIDEO_SECTION_FRAGMENT, VIDEO_FRAGMENT } from "./sectionsQuery/home/marqueeVideoSection";
import { SERVICE_SECTION_FRAGMENT } from "./sectionsQuery/home/serviceSection";
import { STASTICS_FRAGMENT } from "./sectionsQuery/home/statistics";
import { TECHNOLOGY_QUERY_FRAGMENT } from "./sectionsQuery/home/technologyQuery";

export async function getPageData(slug) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query { 
        pageBy(uri: "${slug}") { 
          title
          slug
          pageBuilder { 
            pageBuilder { 
              ${HERO_SECTION_FRAGMENT}
              ${BRAND_SECTION_FRAGMENT}
              ${SERVICE_SECTION_FRAGMENT}
              ${AI_CTA_SECTION_FRAGMENT}
              ${CASE_STUDIES_FRAGMENT}
              ${TECHNOLOGY_QUERY_FRAGMENT}
              ${STASTICS_FRAGMENT}
              ${MARQUEE_VIDEO_SECTION_FRAGMENT}
              ${VIDEO_FRAGMENT}
            } 
          } 
        } 
      }`,
      variables: { slug },
    }),
    next: { revalidate: 60 },
  });

  return res.json();
}
