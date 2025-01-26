import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged our",
      description: "Succesfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon></UnlockIcon>,
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" bg="blue.300" color="white">
      <Heading fontSize="xl">Gestión de equipos</Heading>
      <Spacer></Spacer>
      <HStack spacing="20px">
        <Avatar size="xs" name="inmaq" bg="purple" src={"/img/inmaq.png"}>
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white"></Text>
          </AvatarBadge>
        </Avatar>

        <Text>inmaq.produccion@inmaq.es</Text>
        <Button colorScheme="blue" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}

/*
    <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">1</Box>
        <Box w="150px" h="50px" bg="blue">2</Box>
        <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
        <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    </Flex>
    
  )
}
*/
