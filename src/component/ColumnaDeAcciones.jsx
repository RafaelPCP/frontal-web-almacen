import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ColumnaDeAcciones = ({ data, deleteAction, updateRoute }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        size="xs"
        colorScheme="red"
        onClick={() => {
          deleteAction(data.id); // Call the passed delete action
        }}
      >
        Eliminar
      </Button>
      <Button
        size="xs"
        colorScheme="blue"
        onClick={() => {
          navigate(updateRoute(data)); // Dynamically navigate using passed route
        }}
      >
        Actualizar
      </Button>
    </>
  );
};

export default ColumnaDeAcciones;
