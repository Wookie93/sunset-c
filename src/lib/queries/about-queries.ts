import { gql } from 'graphql-request';
import { SECONDHERO_FRAGMENT, CTA_FRAGMENT, BUTTON_FRAGMENT} from './fragments';


export const GET_ABOUT_US = gql`
  ${SECONDHERO_FRAGMENT}
  ${CTA_FRAGMENT}
  ${BUTTON_FRAGMENT}
  query GetAboutUs {
    page(id: "3sqUof4q3uwhPYTqhfv0tO") {
        slug
        pageName
        metaTitle
        metaDescription
        modulesCollection {
        items {
            __typename
            ... on SecondaryHero{
                ...SecondaryHeroFields
            }
            ... on ContentSection {
            sys{
                id
            }
            title
            contentCollection(limit:20) {
                items {
             __typename
            ... on Paragraph{
            sys{id}
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
                title
            }
            }
            ... on InfoSection{
                title
                infoLinksCollection(where:{sys:{id_exists:true}}){
                    items{
                        title
                        url
                    }
                }
            }

            ... on HomeFeatures{
                title
                features
            }
            ... on GallerySlider{
                title
                imagesCollection{
                    items{
                    url
                    title
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
                contactButton{
                    ...ButtonFields
                }
            }
        }
        }
    }
  }
`;