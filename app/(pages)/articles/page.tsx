'use client'

import React from 'react'
import { ContentT } from '@/app/types'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { GET_CONTENTS_QUERY } from '@/app/graphql/queries/contents'
import { Article } from '@/app/components'

export default function ArticlePage() {
  const { data, error, loading } = useQuery<{
    contents: ContentT[] | undefined
  }>(GET_CONTENTS_QUERY, {
    variables: {
      sort: null,
      filter: {
        language: {
          code: {
            _contains: 'cs-CZ',
          },
        },
      },
    },
  })

  return (
    <>
      <p className="color-is-gray">proLékaře</p>
      <h3>ČLÁNKY</h3>
      <hr />

      {(loading && <h3 className="color-is-green">....loading wait</h3>) ||
        (error && <h3 className="color-is-red">error</h3>)}

      {data?.contents?.map((article, idx: number) => {
        return (
          <div key={idx}>
            <Article tagElement={'section'} contents={article} key={idx}>
              <Link href={`/articles/${article.id}`}>Číst dál</Link>
            </Article>
          </div>
        )
      })}
    </>
  )
}
