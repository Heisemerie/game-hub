import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({children} : Props) => {
  return (
    <Box borderRadius={10} maxW={{ sm: '100px', md: '350px', lg: '280px', xl: '500px' }} overflow={"hidden"}>
        {children}
    </Box>
)
}

export default GameCardContainer