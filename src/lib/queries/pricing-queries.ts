import { gql } from 'graphql-request';
import { SECONDHERO_FRAGMENT, CTA_FRAGMENT, BUTTON_FRAGMENT } from './fragments';

export const GET_PRICES = gql`
  ${SECONDHERO_FRAGMENT}
  ${CTA_FRAGMENT}
  ${BUTTON_FRAGMENT}
  query GetPrices {
  page(id: "4wVjuiCUFtEs08pQ9SqQ2I") {
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
        ... on Paragraph {
          title
          description
          image {
            url
            title
          }
        }
        ... on Pricing {
          name
          date
          price
          time
          features
          buttonRef {
            textOnButton
            linkTo {
              slug
            }
          }
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
          contactButton(where:{sys:{id_exists:true}})  {
            ...ButtonFields
          }
        }
      }
    }
  }
  }
`;