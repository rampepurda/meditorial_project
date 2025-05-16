import { ApolloClient, InMemoryCache } from '@apollo/client'
const directusURL = 'https://directus.devmed.cz/graphql'

const apolloClient = new ApolloClient({
  uri: directusURL,
  cache: new InMemoryCache(),
})

export default apolloClient
