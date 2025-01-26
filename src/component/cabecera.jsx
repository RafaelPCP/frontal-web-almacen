import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Cabecera() {
  const toast = useToast();

  const handleLogout = () => {
    localStorage.removeItem("authHeader");
    showToast();
  };

  const navegar = () => {
    <NavLink to="/Identificacion">
      <Button colorScheme="blue" onClick={showToast}>
        Logout
      </Button>
    </NavLink>;
  };

  const textoStyles = {
    color: "white",
    bg: "gray.700",
    variant: "link",
    ":hover": {
      bg: "gray.700",
      color: "yellow",
      textTransform: "uppercase",
    },
  };

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
    <>
      <Box>
        <Flex as="nav" p="1px" alignItems="center" bg="gray.700" color="white">
          <Heading as="b" fontSize="xl">
            Gestión
          </Heading>
          <Heading color="yellow" as="b" fontSize="xl">
            EQUIPOS
          </Heading>

          <Spacer></Spacer>
          <HStack spacing="20px">
            <Avatar size="xs" name="inmaq" bg="purple" src={"/img/inmaq.png"}>
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">
                  3
                </Text>
              </AvatarBadge>
            </Avatar>
            <Text>inmaq.mantenimiento@inmaq.es</Text>
            <NavLink to="/Identificacion">
              <Button colorScheme="blue" onClick={handleLogout}>
                Logout
              </Button>
            </NavLink>
          </HStack>
        </Flex>
      </Box>
      <Box>
        <Text bg="gray.700" color="white" fontSize="xs" sx={textoStyles}>
          © 2025 Ingenieria y maquinaria de ensayos para laboratorios SL
        </Text>
      </Box>
    </>
  );
}
/*
<NavLink to="/Identificacion">
<Button colorScheme="blue" onClick={showToast}>Logout</Button>
</NavLink>
*/
