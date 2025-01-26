import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Center,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  UnlockIcon,
  SettingsIcon,
  ViewIcon,
  CalendarIcon,
  SunIcon,
} from "@chakra-ui/icons";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { empresas } from "../datos/empresas";

import {
  _FloatingFilterModule,
  DateFilter,
  FilterManager,
  FilterWrapperComp,
} from "ag-grid-community";
import { blueGrey, red } from "@mui/material/colors";

import { NavLink } from "react-router-dom";

//import { BotonFlotante } from "../component/BotonFlotante";

/*
const MyCellComponent = (p) => {
  return (
    <>
       <button onClick={() => window.alert("Accion!")}>+</button>{" "}
      {p.value}{" "}
    </>
  );
};
*/
//<button onClick={() => window.alert("Acción")}>⏹️</button> {p.value}{" "}
const MyCellComponent = (p) => {
  return (
    <>
      <button onClick={() => <NavLink to="/FichaProducto"></NavLink>}></button>
      {p.value}{" "}
    </>
  );
};

const ficha = () => {
  <NavLink to="/FichaProducto"></NavLink>;
};
/*
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
*/
export default function Empresas() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState(empresas);

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
      field: "nombre",
      filter: "agTextColumnFilter",
      cellRenderer: MyCellComponent,
      editable: true,
    },
    {
      field: "ubicación",
      filter: "agNumberColumnFilter",
      editable: true,
    },
    {
      field: "contacto",
      filter: "agTextColumnFilter",
      editable: true,
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
      maxWidth="50%"
      maxHeight="100%"
    >
      <Center height="20px"></Center>{" "}
      <div className="ag-theme-quartz" style={{ height: "750px" }}>
        {" "}
        <AgGridReact
          editType="fullRow"
          ref={gridRef}
          rowData={empresas}
          animateRows={true}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={"multiRow"}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 20]}
          pagination={true}
        ></AgGridReact>{" "}
      </div>
      <Button align={"center"} colorScheme="blue">
        Añadir
      </Button>
    </Container>
  );
}
