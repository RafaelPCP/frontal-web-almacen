import * as React from "react";
import { FabComponent } from "@syncfusion/ej2-react-buttons";
import { enableRipple } from "@syncfusion/ej2-base";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Container,
  HStack,
  Image,
  Select,
  InputRightAddon,
  InputGroup,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import imagenes from "../assets/imagenes";
import { Form, useNavigate, useParams } from "react-router-dom";
import { estados } from "../datos/estados";
import { tipos } from "../datos/tipos";
import { inventario } from "../datos/inventario";
import { TfiSave } from "react-icons/tfi";
import { FaTasks } from "react-icons/fa";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { almacenes } from "../datos/almacenes";
import MenuActuaciones from "../component/MenuActuaciones";
import MenuDocumentos from "../component/MenuDocumentos";
import { Flex, Spacer } from "@chakra-ui/react";
//import { useParams } from "react-router-dom";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function FichaProducto() {
  //const params = useParams();
  const { id } = useParams();

  // const navigate = useNavigate();
  const navigate = useNavigate();

  const [Estado, SetEstado] = React.useState("");
  const [Tipo, SetTipo] = React.useState("");
  const [Almacen, SetAlmacen] = React.useState("");
  const [Imagen, setImagen] = React.useState("");

  const cambiarEstado = ({ estado }) => {
    SetEstado(estado);
  };
  const cambiarTipo = ({ tipo }) => {
    SetTipo(tipo);
  };
  const cambiarAlmacen = ({ almacen }) => {
    SetUbicacion(almacen);
  };

  const resultado = inventario.filter((dato) => dato.id === id);
  const [primerciclo, Setprimerciclo] = React.useState(true);

  console.log("Resultado", resultado[0]);

  function cargar({ primerciclo }) {
    if (primerciclo) {
      Setprimerciclo(false);

      return (
        <li className="item">
          {cambiarEstado(resultado[0].estado)}
          {cambiarTipo(resultado[0].tipo)}
        </li>
      );
    }
    return <li className="item">{name}</li>;
  }

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
            <MenuDocumentos idproducto={id}></MenuDocumentos>
            <Spacer />
            <Text textAlign="center" fontSize={28}>
              Ficha del Equipo
            </Text>
            <Spacer />
            <button onClick={() => navigate(-1)}>{} ↩️</button>
            <MenuActuaciones idproducto={id}></MenuActuaciones>
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
              <FormLabel>Equipo, id({id})</FormLabel>
              <Input value={resultado[0].equipo} placeholder="Denominación" />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              width={100}
              isRequired
            >
              <FormLabel>Etiqueta</FormLabel>
              <Input value={resultado[0].etiqueta} placeholder="Etiqueta" />
            </FormControl>
            <FormControl
              borderColor="blue.900"
              pl="10px"
              isRequired
              width={150}
            >
              <FormLabel>Tipo</FormLabel>
              <Select
                onChange={cambiarTipo}
                value={tipos.id}
                placeholder="Seleccionar"
              >
                {tipos.map((tipos) => (
                  <option key={tipos.id} value={tipos.id}>
                    {tipos.tipo}
                  </option>
                ))}
              </Select>
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
                value={estados.estado}
                placeholder="Seleccionar"
              >
                {estados.map((estados) => (
                  <option key={estados.id} value={estados.id}>
                    {estados.estado}
                  </option>
                ))}
              </Select>
            </FormControl>
          </HStack>
          <HStack spacing={4} mb={3}>
            <FormControl borderColor="blue.900" pl="10px" width={400}>
              <FormLabel>Marca</FormLabel>
              <InputGroup size="sm">
                <Input value={resultado[0].marca} placeholder="Marca" />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>NºSerie</FormLabel>
              <InputGroup size="sm">
                <Input value={resultado[0].nºserie} placeholder="Nº Serie" />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Peso</FormLabel>
              <InputGroup size="sm">
                <Input value={resultado[0].peso} placeholder="Peso" />
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Número de bultos</FormLabel>
              <InputGroup size="sm">
                <Input value={resultado[0].nbultos} placeholder="Nº bultos" />
              </InputGroup>
            </FormControl>
          </HStack>
          <HStack spacing={4} mb={3}>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Coste adecuación</FormLabel>
              <InputGroup size="sm">
                <Input
                  value={resultado[0].costeadecuacion}
                  placeholder="Coste adecuación"
                />
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={200}>
              <FormLabel>Valor estimado</FormLabel>
              <InputGroup size="sm">
                <Input
                  value={resultado[0].valorestimado}
                  placeholder="Valor estimado"
                />
                <InputRightAddon>€</InputRightAddon>
              </InputGroup>
            </FormControl>
            <FormControl borderColor="blue.900" pl="10px" width={300}>
              <FormLabel>Reservado a:</FormLabel>
              <InputGroup size="sm">
                <Input
                  value={resultado[0].Reservadoa}
                  placeholder="Reservado"
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
              <Image
                pl="10px"
                boxSize="200px"
                src={imagenes[resultado[0].imagenfinal].imagen}
              ></Image>
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
                      value={almacenes.Almacen}
                      placeholder="Seleccionar"
                    >
                      {almacenes.map((almacenes) => (
                        <option key={almacenes.id} value={almacenes.id}>
                          {almacenes.Almacen}
                        </option>
                      ))}
                    </Select>
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
        >
          Guardar
        </Button>
      </Box>
    </Container>
  );
}

// {ListadoActuaciones}

/*
 <Select
                    onChange={cambiarUbicacion}
                    value={almacenes.Ubicacion}
                    placeholder="Seleccionar"
                  >
                    {tipos.map((almacenes) => (
                      <option key={almacenes.id} value={almacenes.id}>
                        {almacenes.Ubicacion}
                      </option>
                    ))}
                  </Select>

*/
/*
<Image pl="10px" boxSize="200px" src={pulidora}></Image>
*/
