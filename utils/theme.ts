import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Button = defineStyleConfig({})

const brandRing = {}

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'brand.500',
      },
    },
  },
  colors: {
    brand: {
      500: '#0A0A0A',
      400: '#454545',
      300: '#AEAEAE',
      200: '#D9D9D9',
      100: '#FFFFFF',
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        letterSpacing: 'wide',
        fontWeight: 'normal',
      },
      variants: {
        primary: {
          borderWidth: 1,
          rounded: 'full',
          color: 'brand.100',
          borderColor: 'brand.100',
          _hover: {
            color: 'brand.500',
            fontWeight: 'semibold',
            backgroundColor: 'brand.100',
            transform: 'scale(1.01)',
          },
        },
        secondary: {
          borderWidth: 1,
          rounded: 'full',
          color: 'brand.500',
          borderColor: 'brand.500',
          _hover: {
            color: 'brand.100',
            fontWeight: 'semibold',
            backgroundColor: 'brand.500',
            transform: 'scale(1.01)',
          },
        },
      },
    },
  },
})
