export const CASE_STUDIES_FRAGMENT = `
  ... on PageBuilderPageBuilderCaseStudiesLayout {
          caseStudies {
            title
            subtitle
            caseStudiesGrid {
              title
              isfullwidth
              description
              ctaButton {
                text
                url
              }
              categories {
                cateogoryName
              }
              image {
                node {
                  mediaItemUrl
                  link
                }
              }
            }
          }
        }
      
`;
