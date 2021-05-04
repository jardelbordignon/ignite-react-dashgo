import { ElementType } from 'react'
import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'

import { ActiveLink } from '../ActiveLink'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({icon, children, href, ...rest}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link display='flex' align='center' {...rest}>
        <Icon as={ icon } fontSize='20' />
        <Text ml='4' fontWeight='medium'>{ children }</Text>
      </Link>
    </ActiveLink>
  )
}
