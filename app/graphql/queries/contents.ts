import { gql } from '@apollo/client'

export const GET_CONTENTS_QUERY = gql`
  query Contents($filter: contents_filter, $sort: [String]) {
    contents(filter: $filter, sort: $sort) {
      id
      labels {
        label {
          id
          name
        }
      }
      translations {
        language {
          code
        }
        name
        slug
        perex
        image {
          filename_download
        }
      }
      date_updated
      public_from
    }
  }
`

export const GET_CONTENT_DETAIL_QUERY = gql`
  query Content($contentsByIdId: ID!) {
    contents_by_id(id: $contentsByIdId) {
      date_updated
      translations {
        perex
        name
        image {
          filename_download
        }
      }
    }
  }
`
