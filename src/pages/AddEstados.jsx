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
import { addEstado } from "../datos/estados";

export default function AddEstados() {
  const navigate = useNavigate();

  const [estado, setEstado] = React.useState("");

  const createEstado = (event) => {
    event.preventDefault();
    addEstado({ estado });
    console.log({ estado });
    navigate("/EstadosProducto");
  };
  enableRipple(true);
  return (
    <Container
      id="estad"
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
              Ficha de Estados
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
              <FormLabel>Estado</FormLabel>
              <Input
                placeholder="Estado"
                onChange={(e) => setEstado(e.target.value)}
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
          onClick={createEstado}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
