import { useCallback, useMemo, useRef, useState } from "react";
import { Box, Button, ButtonGroup, Center, Container } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { _FloatingFilterModule } from "ag-grid-community";
import { listadodocumentos } from "../datos/listadodocumentos";

export default function ListadoDocumentos(idproducto) {
  console.log(idproducto);

  const resultado = listadodocumentos.filter(
    (dato) => dato.id_producto === idproducto
  );
  console.log("Resultado", resultado[0]);
  const gridRef = useRef();
  const [rowData, setRowData] = useState(resultado);
  const [botonpulsado, setbotonPulsado] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      field: "idproducto",
      editable: false,
    },
    {
      field: "titulo",
      editable: true,
    },
    { field: "fecha", editable: true },
    { field: "documento", editable: true },
  ]);

  //console.log("Resultado", resultado[0].id_actuacion);
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
      pt="0"
      as="section"
      maxWidth="400px"
      maxHeight="100%"
    >
      <Center height="0px"></Center>{" "}
      <div bg="white" className="ag-theme-quartz" style={{ height: "300px" }}>
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
          pagination={false}
        ></AgGridReact>
      </div>
    </Container>
  );
}
