import { Box, Button as ChakraButton, chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import { useState } from 'react'

interface Props {
  title: string
  variant: string
  arrow?: boolean
  onClick?: () => void
}

const Button = (props: Props) => {
  const [isHover, setIsHover] = useState(false)

  const ButtonContainer = chakra(motion.div)
  const ArrowContainer = chakra(motion.div)

  return (
    <ButtonContainer
      initial={false}
      animate={isHover ? 'hover' : 'rest'}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <ChakraButton
        onClick={props.onClick}
        variant={props.variant}
        size={{ base: 'sm', md: 'md', xl: 'lg' }}
      >
        {props.title}
        {props.arrow && (
          <Box display={{ base: 'none', md: 'block' }}>
            <ArrowContainer
              initial={{
                display: 'none',
              }}
              animate={isHover ? 'hover' : 'rest'}
              variants={{
                rest: { opacity: 0 },
                hover: { display: 'block', opacity: 1 },
              }}
              ml={3}
            >
              <Image
                src={`/assets/icons/${
                  props.variant === 'primary'
                    ? 'arrow-right-black'
                    : 'arrow-right'
                }.svg`}
                width={24}
                height={24}
                alt="arrow"
              />
            </ArrowContainer>
          </Box>
        )}
      </ChakraButton>
    </ButtonContainer>
  )
}

export default Button
