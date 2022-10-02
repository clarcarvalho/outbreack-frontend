import { useState } from "react";

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Heading,
  Textarea,
  Input,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { useAuth } from "../hooks/useAuth";

import api from "../services/api";
import { useToast } from "../hooks/useToast";

export function CreateStory() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { user } = useAuth();
  const { notifySuccess, notifyError } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(title, content);

    try {
      await api.post("/narrativas", {
        username: user.username,
        title,
        content,
      });

      onClose();
      notifySuccess("Narrativa criada com sucesso");
    } catch ({ response }) {
      notifyError(response.data.message);
    }
  }

  return (
    <Box
      bg="surface.primary"
      boxShadow="rgb(11 43 158 / 15%) 0px 6px 20px -6px"
      p="6"
    >
      <Heading
        size="lg"
        fontSize="2xl"
        color="text.primary"
        lineHeight="1.2"
        textAlign="center"
      >
        Encreva uma história e compartilhe com milhares de pessoas
      </Heading>

      <Image
        src="https://thumbs.dreamstime.com/b/conceito-de-di%C3%A1rio-feminino-escrita-mulheres-estudante-estudando-com-livro-personagem-feliz-escreve-o-plano-para-dia-seguinte-no-226248673.jpg"
        alt="Imagem de uma mulher escrevendo"
        h="64"
        mx="auto"
      />
      <Button
        mt="4"
        colorScheme="purple"
        size="lg"
        w="full"
        color="white"
        fontWeight="bold"
        onClick={onOpen}
      >
        Escrever uma história
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent w="35vw">
          <ModalCloseButton />
          <ModalBody pt="8">
            <Input
              placeholder="Título da história"
              _placeholder={{
                color: "gray.900",
                fontWeight: "bold",
                fontSize: "2xl",
              }}
              fontSize="2xl"
              fontWeight="bold"
              color="gray.900"
              variant="ghost"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              placeholder="Escreva sua história"
              variant="ghost"
              size="lg"
              h="60vh"
              textAlign="justify"
              onChange={(e) => setContent(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="purple" mr={3} onClick={handleSubmit}>
              Postar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
