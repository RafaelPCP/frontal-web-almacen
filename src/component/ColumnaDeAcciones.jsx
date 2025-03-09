import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ColumnaDeAcciones = ({ data, deleteAction, updateRoute, event}) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        size="xs"
        colorScheme="red"
        onClick={() => {
          deleteAction(data.id).then(()=>{event(prevState => !prevState)}); // Call the passed delete action
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
