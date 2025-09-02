export const BLOG_SECTION_FRAGMENT=`... on PageBuilderPageBuilderBlogsLayout {
          blogsGrid {
            title
            subtitle
            blogList {
              nodes {
                ... on Post {
                  title
                  slug
                  author {
                    node {
                      name
                      slug
                    }
                  }
                  blogCardFields {
                    isfeatured
                    shortDescription
                    cardImage {
                      node {
                        mediaItemUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }`