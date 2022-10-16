import { chakra } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Sentence = chakra(motion.h1)
const Letter = chakra(motion.span)
const texts = [
  'WE DEVELOP WEBSITE',
  'WE DEVELOP WEB APP',
  'WE DEVELOP MOBILE APP',
  'WE DEVELOP WHAT YOU NEED',
]

const AnimateSentence = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1
      if (next === texts.length) {
        next = 0
      }
      setIndex(next)
    }, 3 * 1000)
  }, [index, setIndex])

  return (
    <Sentence
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            stagerChildren: 0.08,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      fontSize={{ base: 16, md: 28, lg: 40, '2xl': 52 }}
      fontWeight="extrabold"
      letterSpacing="wider"
    >
      {texts[index].split('').map((char, i) => {
        return (
          <Letter
            key={char + '-' + i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            {char}
          </Letter>
        )
      })}
    </Sentence>
  )
}

export default AnimateSentence
