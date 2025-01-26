import React from "react";

import {
  UnlockIcon,
  SettingsIcon,
  ViewIcon,
  CalendarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Menu,
  useToast,
  Heading,
  Spacer,
  Avatar,
  AvatarBadge,
  SkipNavLink,
  SkipNavContent,
  ButtonGroup,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";

export default function MenuPrincipal() {
  const [botonpulsado, setbotonPulsado] = useState("Gestión de equipos");

  console.log(botonpulsado);

  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Succesfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon></UnlockIcon>,
    });
  };

  const buttonStyles = {
    color: "white",
    bg: "gray.700",
    variant: "link",
    ":hover": {
      bg: "gray.700",
      color: "yellow",
      textTransform: "uppercase",
    },
  };

  return (
    <Box
      bg="gray.100"
      position="fixed"
      width="100%"
      boxSize="100%"
      zIndex="55"
      top="0"
    >
      <Box bg="gray.700" width="100%" height="50px" zIndex="55" top="0">
        <ButtonGroup padding="3" direction="row" spacing={4} size="sm">
          <Button
            onClick={() => setbotonPulsado("Almacenes")}
            sx={buttonStyles}
          >
            Almacenes
          </Button>
          <Button
            onClick={() => setbotonPulsado("Inventario")}
            as={Button}
            sx={buttonStyles}
            leftIcon={<CalendarIcon />}
          >
            Inventario
          </Button>
          <Button onClick={() => setbotonPulsado("Empresas")} sx={buttonStyles}>
            Empresas
          </Button>
          <Button
            onClick={() => setbotonPulsado("Usuarios")}
            as={Button}
            sx={buttonStyles}
            leftIcon={<ViewIcon />}
          >
            Usuarios
          </Button>
          <Menu onClick={() => setbotonPulsado("Configuración")}>
            <MenuButton
              sx={buttonStyles}
              as={Button}
              leftIcon={<SettingsIcon />}
            >
              Configuración Productos
            </MenuButton>
            <MenuList display="inline-grid" bg="black">
              <MenuItem onClick={() => setbotonPulsado("Tipo de producto")}>
                Tipo
              </MenuItem>
              <MenuItem onClick={() => setbotonPulsado("Estados del producto")}>
                Estados
              </MenuItem>
              <MenuItem
                onClick={() =>
                  setbotonPulsado("Tipo de actuaciones sobre el producto")
                }
              >
                Actuaciones
              </MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Box>
      <Flex
        position="fixed"
        as="nav"
        p="18px"
        alignItems="center"
        bg="gray.100"
        color="green.300"
        w="100%"
        border="1px"
        height="20px"
        borderRadius="2xl"
        marginY="2"
        textAlign="left"
      >
        <Button variant="ghost" size="sm" bg="gray.100" leftIcon={<SunIcon />}>
          {" "}
          {botonpulsado}
        </Button>
      </Flex>
      <Box
        bg="gray.1300"
        w="100%"
        p={4}
        color="white"
        border="1px"
        height="100%"
        borderRadius="2xl"
        marginY="2"
      ></Box>
    </Box>
  );
}
