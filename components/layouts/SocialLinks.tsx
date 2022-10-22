import { HStack } from '@chakra-ui/react'
import SocialLink from './SocialLink'

interface Props {
  center?: boolean
  black?: boolean
}

const SocialLinks = (props: Props) => {
  return (
    <HStack
      justifyContent={props.center ? 'center' : 'start'}
      spacing={{ base: 2, lg: 4 }}
    >
      <SocialLink href="/" icon={props.black ? 'facebook-black' : 'facebook'} />
      <SocialLink
        href="/"
        icon={props.black ? 'instagram-black' : 'instagram'}
      />
      <SocialLink href="/" icon={props.black ? 'linkedin-black' : 'linkedin'} />
      <SocialLink href="/" icon={props.black ? 'twitter-black' : 'twitter'} />
    </HStack>
  )
}

export default SocialLinks
