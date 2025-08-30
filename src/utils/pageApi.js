// import { CASE_STUDIES_FRAGMENT } from "./sectionsQuery/caseStudiesSection";
import { HERO_SECTION_FRAGMENT } from "./sectionsQuery/home/heroSection";

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
