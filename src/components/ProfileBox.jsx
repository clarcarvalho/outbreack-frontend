import { Box, Flex, Avatar, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

import api from "../services/api";

export function ProfileBox() {
  const { user } = useAuth();
  const [total, setTotal] = useState("");

  useEffect(() => {
    api.get("/narrativasPostadas/" + user.username).then((response) => {
      setTotal(response.data.length);
    });
  }, []);

  return (
    <Flex
      flex="1"
      bg="surface.primary"
      boxShadow="rgb(11 43 158 / 15%) 0px 6px 20px -6px"
      h="96"
      align="center"
      p="4"
      flexDir="column"
    >
      <Avatar size="xl" name={user.username} src="" mt="4" />
      <Heading size="md" mt="2">
        {user?.username}
      </Heading>

      <Text color="gray.500" mt="1">
        @{user?.username}
      </Text>

      <Box mt="8" align="center">
        <Text
          color="text.tertiary"
          lineHeight="1.5"
          fontSize="3xl"
          fontWeight="bold"
        >
          {total}
        </Text>

        <Text color="text.secondary" lineHeight="1.5" fontSize="16">
          Histórias Postadas
        </Text>
      </Box>
    </Flex>
  );
}
