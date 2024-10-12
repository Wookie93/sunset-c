import { gql } from 'graphql-request';
import { BUTTON_FRAGMENT } from './fragments';

export const GET_GLOBAL_DATA = gql`
    ${BUTTON_FRAGMENT}
    query GetGlobalData{
        navigation(id: "1HKHguO50ClQg8n5FVqM2Y") {
            menuItemCollection {
            items {
                name
                linkTo {
                __typename
                ... on Gallery {
                    slug
                    pageName
                }
                ... on Page {
                    slug
                    pageName
                }
                }
            }
            }
        }
        footer(id: "Z483umW6OI3ZogQiqNQv2") {
            socials {
            facebook
            instagram
            }
            privacePolicy
            copywright
        }
        header(id:"6399ymyHTG1t8SWKeFXu2A"){
            logo{
                url
                fileName
            }
            logoDark{
                url
                fileName
            }
            modulesCollection{
                items{
                    ... on Navigation{
                    __typename
                    }
                    ... on Button{
                        ...ButtonFields
                    }
                }
            }
        }
    }
`
export const GET_SLUGS = gql`
    query GetSlugs{
          pageCollection{
            items{
                slug
                pageName
            }
        }
    }
`
