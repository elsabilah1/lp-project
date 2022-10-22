import { Button } from '@chakra-ui/react'
import Image from 'next/future/image'
import Link from 'next/link'

interface Props {
  href: string
  icon: string
}

const SocialLink = (props: Props) => {
  return (
    <Link href={props.href} target="_blank">
      <Button variant="unstyled" size={{ base: 'xs', lg: 'md', '2xl': 'lg' }}>
        <Image
          src={`/assets/icons/social-${props.icon}.svg`}
          alt={props.icon}
          fill
        />
      </Button>
    </Link>
  )
}

export default SocialLink
