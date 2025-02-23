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
  Select,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import { Form, useNavigate } from "react-router-dom";
import { TfiSave } from "react-icons/tfi";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Flex, Spacer } from "@chakra-ui/react";
import { addInventario } from "../../datos/inventario";

export default function AddInventario() {
  const navigate = useNavigate();
  const [equipo, setEquipo] = React.useState("");
  const [etiqueta, setEtiqueta] = React.useState("");
  const [nºserie, setNºserie] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [marca, setMarca] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [nbultos, setNbultos] = React.useState("");
  const [costeadecuacion, setCosteadecuacion] = React.useState("");
  const [valorestimado, setValorestimado] = React.useState("");
  const [reservadoa, setReservadoa] = React.useState("");
  const [almacen, setAlmacen] = React.useState("");
  const [imagen, setImagen] = React.useState("");

  const createInventario = (event) => {
    event.preventDefault();
    addInventario({
      equipo,
      etiqueta,
      nºserie,
      tipo,
      estado,
      marca,
      peso,
      nbultos,
      costeadecuacion,
      valorestimado,
      reservadoa,
      almacen,
      imageninicial,
    });
    console.log({
      equipo,
      etiqueta,
      nºserie,
      tipo,
      estado,
      marca,
      peso,
      nbultos,
      costeadecuacion,
      valorestimado,
      reservadoa,
      almacen,
      imageninicial,
    });
    navigate("/Inventario");
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
        ></Box>
        <Form>
          <HStack spacing={4} mb={3}>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={450}
              isRequired
            >
              <FormLabel>Equipo</FormLabel>
              <Input
                placeholder="Equipo"
                onChange={(e) => setEquipo(e.target.value)}
              />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={100}
              isRequired
            >
              <FormLabel>Etiqueta</FormLabel>
              <Input
                placeholder="Etiqueta"
                onChange={(e) => setEtiqueta(e.target.value)}
              />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              isRequired
              width={150}
            >
              <FormLabel>Tipo</FormLabel>
              <Select onChange={cambiarTipo} placeholder="Seleccionar"></Select>
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={150}
              isRequired
            >
              <FormLabel>Estado</FormLabel>
              <Select
                onChange={cambiarEstado}
                placeholder="Seleccionar"
              ></Select>
            </FormControl>
          </HStack>
          <HStack spacing={4} mb={3}>
            <FormControl borderColor="blue.900" pl="10px" width={400}>
              <FormLabel>Marca</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Marca"
                  onChange={(e) => setMarca(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>NºSerie</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Nº Serie"
                  onChange={(e) => setNºserie(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Peso</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Peso"
                  onChange={(e) => setPeso(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Número de bultos</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Nº bultos"
                  onChange={(e) => setNbultos(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <HStack spacing={4} mb={3}>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Coste adecuación</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Coste adecuación"
                  onChange={(e) => setCosteadecuacion(e.target.value)}
                />
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Valor estimado</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Valor estimado"
                  onChange={(e) => setValorestimado(e.target.value)}
                />
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={300}>
              <FormLabel>Reservado a:</FormLabel>
              <InputGroup size="sm">
                <Input
                  placeholder="Reservado"
                  onChange={(e) => setReservadoa(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </HStack>
          <Flex pb="10px" spacing={4}>
            <Box
              pr="10px"
              pt="5px"
              pl="10px"
              pb="10px"
              borderWidth="2px"
              borderRadius="lg"
              overflow="hidden"
              borderColor="blue.900"
            >
              <Image pl="10px" boxSize="200px"></Image>
            </Box>
            <Box>
              <Form>
                <HStack spacing={4} mb={3} p={4}>
                  <FormLabel>Ubicación:</FormLabel>
                  <FormControl
                    borderColor="blue.900"
                    pl="10px"
                    width={200}
                    isRequired
                  >
                    <Select
                      onChange={cambiarAlmacen}
                      placeholder="Seleccionar"
                    ></Select>
                  </FormControl>
                </HStack>
              </Form>
            </Box>
          </Flex>
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
          onClick={createInventario}
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}
