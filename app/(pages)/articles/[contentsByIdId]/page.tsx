'use client'

import { useQuery } from '@apollo/client'
import { ContentDetailT } from '@/app/types'
import React from 'react'
import { GET_CONTENT_DETAIL_QUERY } from '@/app/graphql/queries/contents'
import { writeDate } from '@/app/utils/getDate'

export default function ContinentDetailPage({ params }: { params: { contentsByIdId: string } }) {
  const { contentsByIdId } = React.use(params)
  const { data, error, loading } = useQuery<{ contents_by_id: ContentDetailT | undefined }>(
    GET_CONTENT_DETAIL_QUERY,
    {
      variables: {
        contentsByIdId: contentsByIdId,
      },
    }
  )
  const date = writeDate(`${data?.contents_by_id?.date_updated}`)

  return (
    <>
      {(loading && <h3>Loading, wait</h3>) || (error && <h3>Ops, something happened!</h3>)}

      <h2>{data?.contents_by_id?.translations[0].name}</h2>
      <p>{date}</p>
      <p>{data?.contents_by_id?.translations[0].perex}</p>
    </>
  )
}
