import classes from './Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/app/components'
import { navigation } from '@/app/configuration'
import { NavType } from '@/app/types'
import { roboto } from '@/app/fonts'
import classNames from 'classnames'

export const Header = () => {
  return (
    <header className={classNames(classes.cover, roboto.className)}>
      <Link href="/" aria-label="onclick get to home page">
        <Image
          className={classes.logo}
          src="/logo.svg"
          alt="logo prolekare"
          height={150}
          width={50}
          priority={false}
        />
      </Link>

      <Navigation ariaLabelNav={'primary'} data={navigation.primary} navType={NavType.Primary} />
    </header>
  )
}
