import { gql } from 'graphql-request';
import { CTA_FRAGMENT, BUTTON_FRAGMENT } from './fragments';

export const GET_HOMEPAGE = gql`
  ${BUTTON_FRAGMENT}
  ${CTA_FRAGMENT}

  query GetHomepage {
  homepage(id: "453yZcJKOzGfJOyq4CMHTx") {
    heroBaner {
      title
      description
      firstButton {
        ...ButtonFields
      }
      secondButton {
        ...ButtonFields
      }
      image {
        url
        width
        height
        title
      }

      socials {
        facebook
        instagram
      }
    }
    cta {
      ...CTAFields
    }
    contentSectionCollection(limit: 20) {
      items {
        title
        contentCollection {
          items{
          __typename
          ... on Paragraph{
            title
            description
            image{
              url
              title
            }
          }
        }
        }
        image {
          url
          width
          height
          title
        }
        imageAtRight
        hasGrayBcg
        buttonsSectionCollection(limit:20){
          items{
            textOnButton
            linkTo{
              slug
            }
          }
        }
      }
    }
    team{
      title
      peopleNames
      peopleDescriptions
      imagesCollection{
        items{
          title
          url
          width
          height
        }
      }
    }
    contactSection {
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
`;



// export const GET_GALLERY = gql`
//   query GetGallery {
//     galleryCollection {
//       items {
//         title
//       }
//     }
//   }
// `;


// export const GET_NEIGHBOURHOOD = gql`
//   query GetNeighbourhood {
//     neighbourhoodCollection {
//       items {
//         title
//       }
//     }
//   }
// `;

// export const GET_CONTACT = gql`
//   query GetContact {
//     contactCollection {
//       items {
//         title
//       }
//     }
//   }
// `;
