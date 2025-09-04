export const CASE_STUDIES_FRAGMENT=` ... on PageBuilderPageBuilderCaseStudiesLayout {
          caseStudy {
             title
            subtitle
            portfolios {
              nodes {
                ... on Portfolio {
                  portfolios {
                    caseStudiesCard {
                      title
                      description
                      thumnail {
                        node {
                          mediaItemUrl
                        }
                      }
                      technologyTags {
                        isFeatured
                        tag
                      }
                      viewCaseStudy {
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
            viewAll {
              title
              url
            }
          }
        }`