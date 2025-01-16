import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const GameCardContainer = ({children} : Props) => {
  return (
    <Box borderRadius={10} minW={{ sm: '100px', md: '150px', lg: '200px', xl: '250px' }} overflow={"hidden"}>
        {children}
    </Box>
)
}

export default GameCardContainer