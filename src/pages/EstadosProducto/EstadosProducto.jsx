import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import {
  Container,
} from "@chakra-ui/react";
import {} from "@chakra-ui/icons";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { fetchEstados } from "../../datos/estados";

export default function EstadosProducto() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]); // Initialize with an empty array
  useEffect(() => {
    fetchEstados(setRowData);
  }, []); // Empty dependency array ensures this runs only once


  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      editable: false,
      maxWidth: "30",
    },
    {
      field: "estado",
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
          paginationPageSizeSelector={[10]}
          pagination={true}
        ></AgGridReact>
      </div>
    </Container>
  );
}