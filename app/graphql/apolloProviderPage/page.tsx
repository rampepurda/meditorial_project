'use client'

import { PropsWithChildren } from 'react'
import apolloClient from '@/app/graphql/apollo-client'
import { ApolloProvider } from '@apollo/client'

export function ApolloProviderPage({ children }: PropsWithChildren) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
