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
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { Form, useNavigate, useParams, useSearchParams} from "react-router-dom";
import { TfiSave } from "react-icons/tfi";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { fetchAlmacenById, updateAlmacen } from "../../datos/almacenes";

export default function UpdateAlmacen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const almacenOriginal = searchParams.get("almacen"); 
  const laboratorioOriginal = searchParams.get("laboratorio")
 
  const [laboratorio, setLaboratorio] = React.useState(laboratorioOriginal);
  const [almacen, setAlmacen] = React.useState(almacenOriginal);

  const actualizarAlmacen = (event) => {
    event.preventDefault();
    updateAlmacen(id,{ laboratorio, almacen });
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
                value={laboratorio}
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
                value={almacen}
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
          onClick={actualizarAlmacen}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
