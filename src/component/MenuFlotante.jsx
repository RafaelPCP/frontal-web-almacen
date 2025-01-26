import * as React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ListadoActuaciones from "../component/ListadoActuaciones";

export default function MenuFlotante(id) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        Actuaciones
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Listado de actuaciones:</DrawerHeader>

          <DrawerBody>
            <Box borderWidth="2px" borderColor="blue.900">
              {<ListadoActuaciones idproducto={id}></ListadoActuaciones>}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme="blue">Añadir</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
