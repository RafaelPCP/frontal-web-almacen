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
import {  fetchActuaciones, deleteActuacion } from "../../datos/actuaciones"
import { NavLink } from "react-router-dom";

import ColumnaDeAcciones from "../../component/ColumnaDeAcciones";

export default function ActuacionesProducto() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [actuacionIsDeleted, setActuacionIsDeleted] = useState(false)
  useEffect(() => {
    fetchActuaciones(setRowData);
  }, [actuacionIsDeleted]);  
  
  const updateRouteActuacion = (data) => {
    return `update/${data.id}?actuacion=${data.actuacion}`
  }
  const ColunaAccionesActuacion = (p) => {
    return <ColumnaDeAcciones data={p.data} deleteAction={deleteActuacion} updateRoute={updateRouteActuacion} event={setActuacionIsDeleted} />
  }
  
  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      floatingFilter: true,
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    }),
    []
  );

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
    },{
      cellRenderer: ColunaAccionesActuacion,
      filter: "agTextColumnFilter",
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    },
  ]);

  
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
        <Center height="20px"></Center>
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