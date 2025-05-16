'use client'

import classes from './Navigation.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import { NavType } from '@/app/types'
import { usePathname } from 'next/navigation'

type Props = {
  ariaLabelNav: 'primary' | 'secondary'
  data: {
    title: string
    url: string
  }[]
  navType: NavType
}

export const Navigation = ({ data, navType, ariaLabelNav }: Props) => {
  const pathname = usePathname()

  return (
    <nav aria-label={ariaLabelNav}>
      <ul className={classNames(navType === NavType.Primary && classes.primary)}>
        {data.map((link, idx: number) => {
          return (
            <li key={idx}>
              {link.url === '/articles' ? (
                <Link
                  className={classNames(pathname.startsWith(link.url) && classes.isActive)}
                  href={link.url}
                >
                  {link.title}
                </Link>
              ) : (
                link.title
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
