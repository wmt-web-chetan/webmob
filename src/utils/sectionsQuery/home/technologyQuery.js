export const TECHNOLOGY_QUERY_FRAGMENT=`
 ... on PageBuilderPageBuilderTechnologyShowcaseLayout {
          technologyShowcase {
            title
            subtitle
            tools {
              name
              description
              icon {
                node {
                  mediaItemUrl
                }
              }
            }
            viewallbutton {
              title
              url
            }
          }
        }`