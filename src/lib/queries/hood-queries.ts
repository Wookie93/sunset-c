import { gql } from 'graphql-request';
import { SECONDHERO_FRAGMENT, CTA_FRAGMENT, BUTTON_FRAGMENT } from './fragments';

export const GET_Neighborhood = gql`
  ${SECONDHERO_FRAGMENT}
  ${CTA_FRAGMENT}
  ${BUTTON_FRAGMENT}

  query GetNeighborhoodC{
  page(id: "7Jo9kxdOOa4PMlykhxyfPV") {
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
        ... on ContentSection {
          title
          contentCollection(limit: 20) {
            items{
            __typename
              ... on LongText{ 
                title
                description
              }
            }
            }
          image {
            url
            title
          }
          imageAtRight
        }
        ... on Cta {
          ...CTAFields
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
  }
  }
`;