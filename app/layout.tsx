import './styles/index.scss'
import type { Metadata } from 'next'
import { merriweather, roboto } from './fonts'
import { Header } from '@/app/components/Header'
import React from 'react'
import { ApolloProviderPage } from '@/app/graphql/apolloProviderPage/page'
import { metadata as metadataFn } from '@/app/utils/metadata'

export const metadata: Metadata = metadataFn('Meditorial', 'meditorial, medical')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ApolloProviderPage>
      <html lang="en">
        <body className={merriweather.className}>
          <Header />

          <main>
            <div className="cols">
              <div className="col-8">{children}</div>
              <div className="col-4"></div>
            </div>
          </main>
        </body>
      </html>
    </ApolloProviderPage>
  )
}
