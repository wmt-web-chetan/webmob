export const AWARDS_SECTION_FRAGMENT = `... on PageBuilderPageBuilderAwardsRecognitionLayout {
          awardsRecognition {
            description
            title
            awards {
              description
              title
              year
              image {
                node {
                  mediaItemUrl
                }
              }
            }
            mainRating {
              platform
              reviewCount
              value
              logo {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }`;
