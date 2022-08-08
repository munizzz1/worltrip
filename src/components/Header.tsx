import { Box, Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex h={100} align='center' justify='center' mt='3'>
            <Box>
                <Image 
                    src="logo.svg" 
                    alt="Logo" 
                />
            </Box>
        </Flex>
    )
}