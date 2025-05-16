import { CharacterT, HTMLAttrT } from '@/app/types'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface Props extends HTMLAttributes<HTMLBodyElement> {
  classesNames?: string
  tagElement: HTMLAttrT
  isDetail?: boolean
  character: CharacterT
}
export const Character = ({
  classesNames,
  character,
  tagElement,
  isDetail = false,
  children,
}: PropsWithChildren<Props>) => {
  const HTMLAttr = tagElement

  return (
    <HTMLAttr className={classesNames}>
      {isDetail ? (
        <>
          <label>Name:</label>
          <h3>{character.name}</h3>
          <label>
            ID: <strong>{character.id}</strong>
          </label>

          <Image
            src={`${character.image}`}
            alt={`${character.name}`}
            fill={false}
            height={150}
            width={150}
            priority={false}
            aria-hidden={true}
          />
        </>
      ) : (
        <h4>{character.name}</h4>
      )}

      {children}
    </HTMLAttr>
  )
}
