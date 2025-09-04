export const TESTIMONIALS_SECTION_FRAGMENT = `... on PageBuilderPageBuilderClientTestimonialsCarouselLayout {
          clientTestimonialsCarousel {
            title
            subtitle
            viewallbutton {
              title
              url
            }
            testimonials {
              nodes {
                ... on Testimonial {
                  testimonials {
                    clientName
                    clientPosition
                    clientQuote
                    clientImage {
                      node {
                        mediaItemUrl
                      }
                    }
                    isfeatured
                  }
                }
              }
            }
          }
        }`;