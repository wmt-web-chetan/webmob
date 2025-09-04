export const STASTICS_FRAGMENT=`
... on PageBuilderPageBuilderStatisticsSectionLayout {
          statisticsSection {
            title
            subtitle
            ctabutton {
              title
              url
            }
            chartImage {
              node {
                mediaItemUrl
              }
            }
            metrics {
              value
              description
            }
          }
        }`