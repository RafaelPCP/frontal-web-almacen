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
import { addActuacion } from "../datos/actuaciones";

export default function AddActuaciones() {
  const navigate = useNavigate();

  const [actuacion, setActuacion] = React.useState("");

  const createActuacion = (event) => {
    event.preventDefault();
    addActuacion({ actuacion });
    console.log({ actuacion });
    navigate("/ActuacionesProducto");
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
              Actuaciones Producto
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
              <FormLabel>Actuacion</FormLabel>
              <Input
                placeholder="Actuacion"
                onChange={(e) => setActuacion(e.target.value)}
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
          onClick={createActuacion}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
