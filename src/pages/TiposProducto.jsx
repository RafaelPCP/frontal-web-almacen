import { useCallback, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  HStack,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { _FloatingFilterModule } from "ag-grid-community";
import { blueGrey, red } from "@mui/material/colors";

import { NavLink } from "react-router-dom";
import { tipos } from "../datos/tipos";
import { TfiSave } from "react-icons/tfi";
import { FaPencil } from "react-icons/fa6";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";

export default function TiposProducto() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(tipos);

  const [botonpulsado, setbotonPulsado] = useState();

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      editable: false,
      maxWidth: "30",
    },
    {
      field: "tipo",
      editable: true,
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
    }),
    []
  );
  return (
    <Container
      id="id"
      pl="10px"
      pr="10px"
      pt="110"
      as="section"
      maxWidth="500px"
      maxHeight="100%"
    >
      <div bg="white" className="ag-theme-quartz" style={{ height: "700px" }}>
        {" "}
        <AgGridReact
          editType="fullRow"
          ref={gridRef}
          rowData={rowData}
          animateRows={true}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={"multiRow"}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 30]}
          pagination={true}
        ></AgGridReact>
        <NavLink to={"/TiposProducto/add"}>
          <Button
            align={"center"}
            colorScheme="blue"
            onClick={() => setbotonPulsado("Ficha Producto")}
          >
            Añadir
          </Button>
        </NavLink>
      </div>
    </Container>
  );
}

/*
<ButtonGroup variant="outline" spacing="2">
        <Button colorScheme="blue" leftIcon={<FaPencil />}>
          Modificar
        </Button>
        <Button colorScheme="blue" leftIcon={<RiDeleteBack2Fill />}>
          Borrar
        </Button>
        <Button
          fontSize={14}
          colorScheme="purple"
          leftIcon={<IoIosAddCircle />}
        >
          Nuevo Tipo
        </Button>
      </ButtonGroup>
      */
