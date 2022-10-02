import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import api from "../services/api";

export function NewStories() {
  const [stories, setStories] = useState([]);

  async function fetchStories() {
    try {
      const { data } = await api.get("/narrativas/ultimas");
      setStories(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <Flex
      flex="1"
      bg="surface.primary"
      h="96"
      boxShadow="rgb(11 43 158 / 15%) 0px 6px 20px -6px"
      p="4"
      flexDir="column"
    >
      <Text
        color="text.primary"
        fontSize="22"
        fontWeight="bold"
        lineHeight="1.2"
        mt="2"
        mb="2"
      >
        Ultimas histórias postadas
      </Text>
      <Box>
        {stories.map((story, index) => (
          <Box
            key={index}
            size="lg"
            mb="4"
            color="text.quarternary"
            lineHeight="1"
            w="full"
            mt="4"
          >
            <Box
              mt="1"
              _hover={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              <Text color="text.primary" fontWeight="bold" fontSize="md">
                {story.titulo}
              </Text>
              <Text color="gray.500" mt="1">
                Por: {story.usuario}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Flex>
  );
}
