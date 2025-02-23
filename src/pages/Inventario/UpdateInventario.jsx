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
import { useNavigate, Form, useSearchParams, useParams} from "react-router-dom";
import { TfiSave } from "react-icons/tfi";
import { updateInventario } from "../../datos/inventario";
import { fetchTipos } from "../../datos/tipos";
import { fetchEstados } from "../../datos/estados";
import { fetchAlmacenes } from "../../datos/almacenes"


export default function UpdateInventario() {

  const [searchParams] = useSearchParams();
  const { id } = useParams();

  const equipo = searchParams.get("equipo")
  const etiqueta = searchParams.get("etiqueta")
  const numero_serie = searchParams.get("numero_serie")
  const tipo = searchParams.get("tipo")
  const estado = searchParams.get("estado")
  const almacen = searchParams.get("almacen")
  const marca = searchParams.get("marca")
  const peso = searchParams.get("peso")
  const numero_bultos = searchParams.get("numero_bultos")
  const coste_adecuacion = searchParams.get("coste_adecuacion")
  const valor_estimado = searchParams.get("valor_estimado")
  const reservadoa = searchParams.get("reservadoa")
  const imagen = searchParams.get("imagen")

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    equipo:equipo,
    etiqueta:etiqueta,
    numero_serie:numero_serie,
    tipo:tipo,
    estado:estado,
    almacen:almacen,
    marca:marca,
    peso:peso,
    numero_bultos:numero_bultos,
    coste_adecuacion:coste_adecuacion,
    valor_estimado:valor_estimado,
    reservadoa:reservadoa,
    imagen:imagen
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


  const atualizarInventario = (event) => {
    event.preventDefault();
    updateInventario(id,formData);
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
          <form onSubmit={atualizarInventario}>
            <HStack spacing={4} mb={3}>
              <FormControl isRequired>
                <FormLabel>Equipo</FormLabel>
                <Input name="equipo" value={formData.equipo} onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Etiqueta</FormLabel>
                <Input name="etiqueta" value={formData.etiqueta} onChange={handleChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Tipo</FormLabel>
                <Select name="tipo" value={formData.tipo} onChange={handleChange}>
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
                <Select name="estado" value={formData.estado} onChange={handleChange}>
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
                <Input name="marca" value={formData.marca} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Nº Serie</FormLabel>
                <Input name="numero_serie" value={formData.numero_serie} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Peso</FormLabel>
                <Input name="peso" value={formData.peso} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Número de bultos</FormLabel>
                <Input name="numero_bultos" value={formData.numero_bultos} onChange={handleChange} />
              </FormControl>
            </HStack>
            <HStack spacing={4} mb={3}>
              <FormControl>
                <FormLabel>Coste adecuación (€)</FormLabel>
                <Input name="coste_adecuacion" value={formData.coste_adecuacion} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Valor estimado (€)</FormLabel>
                <Input name="valor_estimado" value={formData.valor_estimado} onChange={handleChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Reservado a</FormLabel>
                <Input name="reservadoa" value={formData.reservadoa} onChange={handleChange} />
              </FormControl>
            </HStack>
            <HStack spacing={4} mb={3}>
              <FormControl isRequired>
                <FormLabel>Ubicación</FormLabel>
                <Select name="almacen" value={formData.almacen} onChange={handleChange}>
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
              <Button type="submit" fontSize={18} size="lg" variant="outline" colorScheme="blue" onClick={atualizarInventario} leftIcon={<TfiSave />}>
                Guardar
              </Button>
            </Flex>
          </form>
        </Form>
      </Box>
    </Container>
  );
}
