export const MARQUEE_VIDEO_SECTION_FRAGMENT = `    ... on PageBuilderPageBuilderScrollingTickerLayout {
          
          scrollingTicker {
            items {
              text
            }
            icon {
              node {
                mediaItemUrl
              }
            }
            speed
          }
        }`;
export const VIDEO_FRAGMENT=`  ... on PageBuilderPageBuilderClientTestimonialsLayout {
          clientTestimonials {
            title
            subtitle
            videoImage {
              node {
                mediaItemUrl
              }
            }
            videourl {
              title
              url
            }
          }
        }
`