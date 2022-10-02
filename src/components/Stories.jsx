import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

import api from "../services/api";

export function Stories() {
  const { user } = useAuth();

  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({});

  const { isOpen, onOpen, onClose } = useDisclosure();

  async function loadStories() {
    const { data } = await api.get("/narrativas");
    setStories(data);
  }

  function handleStory(story) {
    setStory(story);
    onOpen();
  }

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <Box pb="20">
      {stories.map((story, index) => (
        <Box
          mt="8"
          bg="surface.primary"
          boxShadow="rgb(11 43 158 / 15%) 0px 6px 20px -6px"
          p="6"
        >
          <Box
            key={index}
            size="lg"
            mb="4"
            color="text.quarternary"
            lineHeight="1"
            w="full"
          >
            <Flex>
              <Avatar size="md" name={user?.username} src="" mr="4" />
              <Box mt="1">
                <Text color="text.primary" fontWeight="bold" fontSize="md">
                  {user?.username}
                </Text>
                <Text color="gray.500" mt="1">
                  @{user?.username}
                </Text>
              </Box>
            </Flex>

            <Text color="text.primary" mt="4" fontSize="xl" fontWeight="bold">
              {story.titulo}
            </Text>

            <Text
              color="text.secondary"
              mt="4"
              fontSize="md"
              fontWeight="normal"
              lineHeight="1.3"
              noOfLines={5}
            >
              {story.conteudo}
            </Text>

            <Flex w="full" justify="center">
              <Button
                colorScheme="purple"
                mt="6"
                size="sm"
                w="24"
                variant="outline"
                onClick={() => handleStory(story)}
              >
                Ler mais
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color="text.primary" mt="4" fontSize="xl" fontWeight="bold">
              {story.titulo}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="span" color="gray.500">
              Por: @{user?.username}
            </Text>

            <Text
              color="text.secondary"
              mt="4"
              fontSize="md"
              fontWeight="normal"
              lineHeight="1.3"
            >
              {story.conteudo}
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
