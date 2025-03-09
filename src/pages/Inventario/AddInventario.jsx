import React, { useState, useEffect} from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Container,
  HStack,
  Button,
  Select,
  Flex,
  Spacer,
  Text
} from "@chakra-ui/react";
import { useNavigate, Form } from "react-router-dom";
import { TfiSave } from "react-icons/tfi";
import { addInventario } from "../../datos/inventario";
import { fetchTipos } from "../../datos/tipos";
import { fetchEstados } from "../../datos/estados";
import { fetchAlmacenes } from "../../datos/almacenes"


export default function AddInventario() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    equipo: "",
    etiqueta: "",
    numero_serie: "",
    tipo: "",
    estado: "",
    almacen: "",
    marca: "",
    peso: "",
    numero_bultos: "",
    coste_adecuacion: "",
    valor_estimado: "",
    reservadoa: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [tipos, setTipos] = useState([]);
  const [estados, setEstados] = useState([]);
  const [almacenes, setAlmacenes] = useState([]);


  useEffect(() => {
    fetchTipos(setTipos);
    fetchEstados(setEstados);
    fetchAlmacenes(setAlmacenes);
  }, []);


  const createInventario = (event) => {
    event.preventDefault();
    addInventario(formData);
    console.log(formData);
    navigate("/Inventario");
  };

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
          <form onSubmit={createInventario}>
            <HStack spacing={4} mb={3}>
              <FormControl isRequired>
                <FormLabel>Equipo</FormLabel>
                <Input name="equipo" placeholder="Equipo" onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Etiqueta</FormLabel>
                <Input name="etiqueta" placeholder="Etiqueta" onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Tipo</FormLabel>
                <Select name="tipo" placeholder="-" onChange={handleChange}>
                  {
                    tipos.map((value)=>(
                      <option key={value.id} value={value.id}>
                        {value.tipo}
                      </option>
                    ))
                  }
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Estado</FormLabel>
                <Select name="estado" placeholder="-" onChange={handleChange}>
                  {
                    estados.map((value)=>(
                      <option key={value.id} value={value.id}>
                        {value.estado}
                      </option>
                    ))
                  }
                </Select>
              </FormControl>
            </HStack>
            <HStack spacing={4} mb={3}>
              <FormControl>
                <FormLabel>Marca</FormLabel>
                <Input name="marca" placeholder="Marca" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Nº Serie</FormLabel>
                <Input name="numero_serie" placeholder="Nº Serie" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Peso</FormLabel>
                <Input name="peso" placeholder="Peso" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Número de bultos</FormLabel>
                <Input name="numero_bultos" placeholder="Nº bultos" onChange={handleChange} />
              </FormControl>
            </HStack>
            <HStack spacing={4} mb={3}>
              <FormControl>
                <FormLabel>Coste adecuación (€)</FormLabel>
                <Input name="coste_adecuacion" placeholder="Coste adecuación" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Valor estimado (€)</FormLabel>
                <Input name="valor_estimado" placeholder="Valor estimado" onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Reservado a</FormLabel>
                <Input name="reservadoa" placeholder="Reservado" onChange={handleChange} />
              </FormControl>
            </HStack>
            <HStack spacing={4} mb={3}>
              <FormControl isRequired>
                <FormLabel>Ubicación</FormLabel>
                <Select name="almacen" placeholder="-" onChange={handleChange}>
                  {
                    almacenes.map((value)=>(
                      <option key={value.id} value={value.id}>
                        {value.almacen}
                      </option>
                    ))
                  }
                </Select>
              </FormControl>
            </HStack>
            <Flex justifyContent="center" pt={5}>
              <Button type="submit" fontSize={18} size="lg" variant="outline" colorScheme="blue" onClick={createInventario} leftIcon={<TfiSave />}>
                Guardar
              </Button>
            </Flex>
          </form>
        </Form>
      </Box>
    </Container>
  );
}
