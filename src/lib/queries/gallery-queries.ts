import { gql } from 'graphql-request';
import { SECONDHERO_FRAGMENT,BUTTON_FRAGMENT} from './fragments';


export const GET_GALLERY = gql`
${SECONDHERO_FRAGMENT}
${BUTTON_FRAGMENT}
  query GalleryPage($slug: String!) {
    galleryCollection(where: {slug: $slug}, limit: 1) {
    items {
      slug
      pageName
      metaTitle
      metaDescription
      modulesCollection(limit: 20) {
        items {
          __typename
          ... on SecondaryHero {
            ...SecondaryHeroFields
          }
          ... on ContentSection {
            sys {
              id
            }
            title
            imageAtRight
            linkTo {
              __typename
              ... on Gallery {
                sys {
                  id
                }
                slug
              }
            }
            contentCollection(limit: 20) {
              items {
                __typename
                ... on Paragraph {
                  title
                  description
                  image {
                    url
                    title
                  }
                }
              }
            }
            image {
              url
              title
            }
          }
          ... on ContactSection {
            title
            subtitle
            contactDataCollection {
              items {
                title
                subtitle
                linkText
              }
            }
            image {
              url
              width
              height
              title
            }
            contactButton {
              ...ButtonFields
            }
          }
        }
      }
      imagesCollection {
        items {
          title
          url
        }
      }
    }
  }
  }
`;

export const GET_ALL_GALLERY_SLUGS = gql`
  query getAllGalleryInfo{
    galleryCollection {
      items {
        pageName
        slug
      }
    }
  }
`;