import { gql } from 'graphql-request';
import { SECONDHERO_FRAGMENT, BUTTON_FRAGMENT } from './fragments';

export const GET_CONTACT_PAGE= gql`
  ${SECONDHERO_FRAGMENT}
  ${BUTTON_FRAGMENT}

  query GetContactPage{
    page(id: "2I7coLw8P0txfcgfcl66St") {
    slug
    pageName
    metaTitle
    metaDescription
    modulesCollection {
      items {
        __typename
        ... on SecondaryHero {
          ...SecondaryHeroFields
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
        ... on FaqModule{
          title
          faqCollection{
            items{
              title
              description
            }
          }
        }
      }
    }
  }
  }
`;