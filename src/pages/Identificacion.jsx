import ReactDOM from "react-dom/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import { Form, NavLink, redirect } from "react-router-dom";

import { Show, Hide } from "@chakra-ui/react";

const boxStyles = {
  p: "10px",
  marginY: "0px",
  color: "white",
  fontSize: "xs",
  marginLeft: "0px",
  bg: "purple.500",
  ":hover": {
    color: "black",
    bg: "blue.200",
  },
};

export default function Identificacion() {
  let usuario, clave;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    try {
      const response = await fetch(
        "https://juanpm.pythonanywhere.com/api/almacenes/",
        {
          method: "GET", // Use the appropriate HTTP method (GET/POST)
          headers: {
            Authorization: authHeader,
          },
        }
      );

      if (response.ok) {
        // Login successful
        localStorage.setItem("authHeader", authHeader); // Save the header to localStorage
        setError(""); // Clear any previous errors
        navigate("/inventario"); // Redirect to the user page
      } else {
        // Handle login failure
        setError("Invalid username or password.");
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.log(error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container id="identifica" p="100px" as="section">
      <Center height="200px">
        <Box boxSize="200px">
          <Image height="200" src="/img/inmaq.png"></Image>
        </Box>
      </Center>
      <Heading
        textAlign="center"
        fontSize="4xl"
        color="blue.600"
        marginY="0px"
        padding="0px"
      >
        GESTIÓN DE EQUIPOS
      </Heading>
      <Box sx={boxStyles}>
        (c) Inmaq. Sistema de gestión del Servicio técnico, mantenimiento de
        equipos y reparación.
      </Box>
      <Box maxW="280px">
        <Form action="">
          <FormControl isRequired mb="10px">
            <FormLabel>Usuario </FormLabel>
            <Input
              fontSize="xs"
              placeholder="correo electrónico"
              type="text"
              name="Usuario"
              value={usuario}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl isRequired mb="40px">
            <FormLabel>Clave </FormLabel>
            <Input
              fontSize="l"
              placeholder="clave"
              type="password"
              name="Clave"
              value={clave}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </FormControl>
          <center>
            <Button
              onClick={handleLogin}
              colorScheme="purple"
              type="submit"
              fontSize="sm"
            >
              Aceptar
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </center>
        </Form>
      </Box>
    </Container>
  );
}

//<NavLink to="/MenuPrincipal"> Aceptar</NavLink>

export const enterClave = async ({ request }) => {
  const data = await request.formData();
  const task = {
    user: data.get("Usuario"),
    keyword: data.get("Clave"),
  };
  console.log(task);
  return redirect("/Inventario");
};
