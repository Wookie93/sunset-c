import { gql } from 'graphql-request';

export const PARAGRAPH_FRAGMENT = gql`
  fragment ParagraphFields on Paragraph {
    title
    description
    image{
        url
        width
        height
        title
      }
  }
`;

export const LONG_TEXT_FRAGMENT = gql`
  fragment LongTextFields on LongText {
    title
    description
  }
`;

export const IMAGE_FRAGMENT = gql`
  fragment ImageFields on image {
        url
        width
        height
        title
  }
`;

export const BUTTON_FRAGMENT = gql`
  fragment ButtonFields on Button {
        textOnButton
        linkTo{
          slug
        }
  }
`;


export const CTA_FRAGMENT = gql`
  fragment CTAFields on Cta {
      title
      description
      button{
        textOnButton
        linkTo{
          slug
        }
      }
      image{
        url
        width
        height
        title
      }
  }
`;

export const SECONDHERO_FRAGMENT = gql`
fragment SecondaryHeroFields on SecondaryHero {
          title
          description
          image{
            url
            title
          }
}
`;



