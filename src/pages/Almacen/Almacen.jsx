import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Center,
  Container,
} from "@chakra-ui/react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { fetchAlmacenes, deleteAlmacen } from "../../datos/almacenes";
import "../../Almacen.css";
import { NavLink, useNavigate } from "react-router-dom";
import ColumnaDeAcciones from "../../component/ColumnaDeAcciones";

const tableStyles = {
  color: "black",
  bg: "gray.50",
  ":hover": {
    color: "blue",
  },
};
const buttonStyles = {
  color: "black",
  bg: "gray.50",
  variant: "link",
  ":hover": {
    bg: "gray.100",
    color: "blue",
    textTransform: "uppercase",
  },
};

export default function Almacen() {
  const [rowData, setRowData] = useState([]); // Initialize with an empty array
  const [almacenIsDeleted, setalmacenIsDeleted] = useState(false)
  const gridRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAlmacenes(setRowData);
  }, [, almacenIsDeleted]); // Empty dependency array ensures this runs only once


  const updateRouteAlmacen = (data) => {
    return `/Almacen/update/${data.id}?almacen=${data.almacen}&laboratorio=${data.laboratorio}`
  }
  const ColunaAccionesAlmacen = (p) => {
    return <ColumnaDeAcciones data={p.data} deleteAction={deleteAlmacen} updateRoute={updateRouteAlmacen} event={setalmacenIsDeleted} />
  }

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      floatingFilter: true,
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    }),
    []
  );

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    {
      field: "laboratorio",
      filter: "agTextColumnFilter",
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    },
    {
      field: "almacen",
      filter: "agTextColumnFilter",
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
    },{
      cellRenderer: ColunaAccionesAlmacen,
      filter: "agTextColumnFilter",
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
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

  const [botonpulsado, setbotonPulsado] = useState();

  return (
    <Container
      id="almac"
      pl="10px"
      pr="10px"
      pt="100"
      as="section"
      maxWidth="50%"
      maxHeight="100%"
    >
      <Center height="20px"></Center>
      <div className="ag-theme-quartz" style={{ height: "700px" }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          animateRows={true}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection={"multiple"}
          paginationPageSize={13}
          paginationPageSizeSelector={[13, 30]}
          pagination={true}
        ></AgGridReact>
        <NavLink to={"/Almacen/add"}>
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