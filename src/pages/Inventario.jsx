import { useCallback, useMemo, useRef, useState } from "react";
import { Button, Center, Container } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { _FloatingFilterModule } from "ag-grid-community";
import { blueGrey, red } from "@mui/material/colors";

import { NavLink } from "react-router-dom";
import { inventario } from "../datos/inventario";

export default function Inventario() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(inventario);

  const [botonpulsado, setbotonPulsado] = useState();

  /*
 const MyCellComponent = (p) => {
    return (
      <>
        <NavLink state={{ some: "Prueba envío datos" }} to="/FichaProducto/">
          <Button onClick={() => setbotonPulsado("Ficha Producto")}>▶️</Button>
          console.log({p.value.estado});
        </NavLink>
        {p.value}
      </>
    );
  };
  */
  //     <NavLink to={"/Inventario/" + p.value}>
  //    onClick={() => setbotonPulsado("Ficha Producto")}

  const MyCellComponent = (p) => {
    console.log(p.value);
    return (
      <>
        <NavLink to={"/Inventario/" + p.value}>
          <Button
            colorScheme="white"
            size="s"
            onClick={() => setbotonPulsado("Ficha Producto")}
          >
            🆙
          </Button>
        </NavLink>
        {p.value}
      </>
    );
  };

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      floatingFilter: true,
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    }),
    []
  );

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "id",
      editable: false,
      cellRenderer: MyCellComponent,
      maxWidth: "30",
    },
    {
      field: "equipo",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "etiqueta",
      filter: "agTextrColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "Almacen",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "Reservadoa",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "estado",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "tipo",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
  ]);

  const saveFilterState = useRef();

  const onBtSave = useCallback(() => {
    const filterModel = gridRef.current.api.getFilerMode();
    console.log("Saving Filter Model", filterModel);
    saveFilterState.current = filterModel;
  }, []);

  const onBtApply = useCallback(() => {
    const filterModel = saveFilterState.current;
    console.log("Applying Filter Model", filterModel);
    gridRef.current.api.setFilterModel(filterModel);
  }, []);

  return (
    <Container
      id="almac"
      pl="10px"
      pr="10px"
      pt="100"
      as="section"
      maxWidth="100%"
      maxHeight="100%"
    >
      <Center height="20px"></Center>{" "}
      <div bg="white" className="ag-theme-quartz" style={{ height: "750px" }}>
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
          paginationPageSizeSelector={[10, 20]}
          pagination={true}
        >
          {" "}
        </AgGridReact>{" "}
      </div>
      <div>
        <NavLink to={"/Inventario/" + 0}>
          <Button
            colorScheme="white"
            size="s"
            onClick={() => setbotonPulsado("Ficha Producto")}
          >
            Nuevo
          </Button>
          Nuevo
        </NavLink>
      </div>
    </Container>
  );
}
