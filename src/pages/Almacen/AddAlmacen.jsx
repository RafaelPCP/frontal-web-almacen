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
import { addAlmacen } from "../../datos/almacenes";

export default function AddAlmacen() {
  const navigate = useNavigate();

  const [laboratorio, setLaboratorio] = React.useState("");
  const [almacen, setAlmacen] = React.useState("");

  const createAlmacen = (event) => {
    event.preventDefault();
    addAlmacen({ laboratorio, almacen });
    console.log({ laboratorio, almacen });
    navigate("/Almacen");
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
              Ficha del Equipo
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
              <FormLabel>Laboratorio</FormLabel>
              <Input
                placeholder="Laboratorio"
                onChange={(e) => setLaboratorio(e.target.value)}
              />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={450}
              isRequired
            >
              <FormLabel>Almacen</FormLabel>
              <Input
                placeholder="Almacen"
                onChange={(e) => setAlmacen(e.target.value)}
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
          onClick={createAlmacen}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
