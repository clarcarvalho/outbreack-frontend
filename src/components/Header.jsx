import { Box, Flex, Text } from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";

import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import { useAuth } from "../hooks/useAuth";

const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
  },
});

export function Header() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  return (
    <Box
      as="header"
      display="flex"
      w="100%"
      h="16"
      bg="purple.600"
      color="white"
      p="4"
      alignItems="center"
    >
      <Flex mx="auto" maxW={1200} w="full" justifyContent="space-between">
        <ChakraProvider theme={theme}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            letterSpacing="widest"
            fontFamily="body"
          >
            OUTBREAK
          </Text>
        </ChakraProvider>
        <Flex alignItems="center" cursor="pointer" onClick={handleLogout}>
          <Text mr="2">Sair</Text>
          <MdOutlineLogout size={22} />
        </Flex>
      </Flex>
    </Box>
  );
}
