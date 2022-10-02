import { Header } from "../components/Header";
import { CreateStory } from "../components/CreateStory";
import { Box, Flex } from "@chakra-ui/react";
import { NewStories } from "../components/NewStories";
import { ProfileBox } from "../components/ProfileBox";
import { Stories } from "../components/Stories";

export function Feed() {
  return (
    <Box>
      <Header />
      <Flex maxWidth={1200} w="full" mx="auto" mt="10">
        <ProfileBox />
        <Flex
          flex="2"
          mx="4"
          h="full"
          px="2"
          flexDir="column"
          maxHeight="100vh"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar-track": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              display: "none",
            },
          }}
        >
          <CreateStory />
          <Stories />
        </Flex>
        <NewStories />
      </Flex>
    </Box>
  );
}
