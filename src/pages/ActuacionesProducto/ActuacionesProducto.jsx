import { useMemo, useRef, useState, useEffect } from "react";
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

import { NavLink } from "react-router-dom";
import { fetchActuaciones } from "../../datos/actuaciones"

export default function ActuacionesProducto() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetchActuaciones(setRowData);
  }, []); // Empty dependency array ensures this runs only once



  const [botonpulsado, setbotonPulsado] = useState();


  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      editable: false,
      maxWidth: "30",
    },
    {
      field: "actuacion",
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
        <NavLink to={"/ActuacionesProducto/add"}>
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