import * as React from "react";
import { enableRipple } from "@syncfusion/ej2-base";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Container,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { Form, useNavigate } from "react-router-dom";
import { TfiSave } from "react-icons/tfi";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Flex, Spacer } from "@chakra-ui/react";
import { addEmpresa } from "../datos/empresas";

export default function AddEmpresas() {
  const navigate = useNavigate();

  const [nombre, setNombre] = React.useState("");
  const [ubicación, setUbicacion] = React.useState("");
  const [contacto, setContacto] = React.useState("");

  const createEmpresa = (event) => {
    event.preventDefault();
    addEmpresa({ nombre, ubicación, contacto });
    console.log({ nombre, ubicación, contacto });
    navigate("/Empresas");
  };

  enableRipple(true);
  return (
    <Container
      id="almac"
      pl="10px"
      pr="10px"
      pt="120"
      as="section"
      maxWidth="100%"
      maxHeight="100%"
      centerContent
    >
      <Box borderWidth="2px" borderColor="blue.900" width={1000}>
        <Box
          textAlign="center"
          fontSize={28}
          pb="1"
          bg="blue.900"
          color="yellow"
        >
          <Flex p="2">
            <Spacer />
            <Text textAlign="center" fontSize={28}>
              Empresa
            </Text>
            <Spacer />
            <button onClick={() => navigate(-1)}>{} ↩️</button>
          </Flex>
        </Box>
        <Form>
          <HStack spacing={4} mb={3}>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={450}
              isRequired
            >
              <FormLabel>Nombre</FormLabel>
              <Input
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={450}
              isRequired
            >
              <FormLabel>Ubicacion</FormLabel>
              <Input
                placeholder="Ubicacion"
                onChange={(e) => setUbicacion(e.target.value)}
              />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={450}
              isRequired
            >
              <FormLabel>Contacto</FormLabel>
              <Input
                placeholder="Contacto"
                onChange={(e) => setContacto(e.target.value)}
              />
            </FormControl>
          </HStack>
        </Form>
      </Box>
      <Box p={5}>
        <Button
          fontSize={18}
          size="lg"
          variant="outline"
          colorScheme="blue"
          align="center"
          leftIcon={<TfiSave />}
          onClick={createEmpresa}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
