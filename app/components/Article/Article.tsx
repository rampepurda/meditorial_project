import classes from './Article.module.scss'
import { ContentT, HTMLAttrT } from '@/app/types'
import Image from 'next/image'
import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { writeDate } from '@/app/utils/getDate'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLBodyElement> {
  classesNames?: string
  tagElement: HTMLAttrT
  isFirstChild?: number
  contents: ContentT
}
export const Article = ({
  classesNames,
  isFirstChild,
  contents,
  tagElement,
  children,
}: PropsWithChildren<Props>) => {
  const HTMLAttr = tagElement
  const date = writeDate(`${contents.date_updated}`)

  return (
    <HTMLAttr className={classNames(classes.cover, classesNames)}>
      {contents.translations.slice(0, 1).map((translate, idx) => (
        <section
          //className={classNames(idx === 0 && )}
          key={idx}
        >
          <div>
            <h2>{translate.name}</h2>
            <p>{date}</p>
            <p>{translate.perex}</p>
            {children}

            {translate.image !== null && (
              <fieldset>
                <Image
                  src={`https://directus.devmed.cz/${translate[0]?.image?.filename_download}`}
                  alt={`${translate.name}`}
                  fill={false}
                  height={150}
                  width={150}
                  priority={false}
                  aria-hidden={true}
                />
              </fieldset>
            )}
          </div>
        </section>
      ))}
    </HTMLAttr>
  )
}
