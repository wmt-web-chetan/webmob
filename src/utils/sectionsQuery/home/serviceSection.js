export const SERVICE_SECTION_FRAGMENT=` ... on PageBuilderPageBuilderSmartServicesLayout {
          smartServices {
            title
            subtitle
            defaultExpanded
            services {
              title
              description
              image {
                node {
                  mediaItemUrl
                }
              }
              technologies {
                name
              }
              ctabutton {
                url
                title
              }
            }
            viewallbutton {
              url
              title
            }
          }
        }`