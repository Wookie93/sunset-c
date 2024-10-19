import { gql } from 'graphql-request';
import { CTA_FRAGMENT, BUTTON_FRAGMENT } from './fragments';


export const GET_HOMEPAGE = gql`
  ${BUTTON_FRAGMENT}
  ${CTA_FRAGMENT}

  query GetHomepage {
  homepage(id: "453yZcJKOzGfJOyq4CMHTx") {
    heroBaner(where:{sys:{id_exists:true}})  {
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
    cta(where:{sys:{id_exists:true}}) {
      ...CTAFields
    }
    contentSectionCollection(limit: 20) {
      items {
        sys{
          id
        }
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
    team(where:{sys:{id_exists:true}}) {
      sys{
        id
      }
      title
      peopleNames
      peopleDescriptions
      imagesCollection {
        items {
          title
          url
          width
          height
        }
      }
    }
    contactSection(where:{sys:{id_exists:true}})  {
      sys{
        id
      }
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
`;



