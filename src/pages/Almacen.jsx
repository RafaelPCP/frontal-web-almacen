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
import { fetchAlmacenes } from "../datos/almacenes";
import "../Almacen.css";
import {
  _FloatingFilterModule,
  DateFilter,
  FilterManager,
  FilterWrapperComp,
} from "ag-grid-community";

const MyCellComponent = (p) => {
  return (
    <>
          <button onClick={() => window.alert("Accion!")}>+</button>   {" "}
      {p.value} {" "}
    </>
  );
};

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
  // Row Data: The data to be displayed.

  /*
  const [rowData, setRowData] = useState([
    { Laboratorio: "Granada", Ubicacion: "Granada" },
    { Laboratorio: "Córdoba", Ubicacion: "Córdoba" },
    { Laboratorio: "Málaga", Ubicacion: "Málaga" },
    { Laboratorio: "Sevilla", Ubicacion: "Sevilla" },
    { Laboratorio: "Almería", Ubicacion: "Almería" },
    { Laboratorio: "Cuevas Bajas", Ubicacion: "Almería" },
    { Laboratorio: "Madrid", Ubicacion: "Getafe" },
    { Laboratorio: "Valladolid", Ubicacion: "Valladolid" },
    { Laboratorio: "Zamora", Ubicacion: "Zamora" },
    { Laboratorio: "Salamanca", Ubicacion: "Salamanca" },
    { Laboratorio: "Asturias", Ubicacion: "Oviedo" },
  ]);
*/
  const [rowData, setRowData] = useState([]); // Initialize with an empty array
  const gridRef = useRef();
  //const [rowData,setRowData]=useState();
  useEffect(() => fetchAlmacenes(setRowData), []); // Empty dependency array ensures this runs only once

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
      cellRenderer: MyCellComponent,
      filter: "agTextColumnFilter",
      filterParams: { buttons: ["apply", "clear", "cancel", "reset"] },
      checkboxSelection: true,
    },
    {
      field: "almacen",
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
        <Button align={"center"} colorScheme="blue">
          Añadir
        </Button>
      </div>
    </Container>
  );
}
/*
export default function Almacen() {
  return (
   
    <Container id="almac" pl='10px' pr='10px' pt='100'  as ="section"  > 
    <Center height='20px'></Center>
        <TableContainer>
              <Table variant='simple'>
                <TableCaption >Listado de almacenes</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Id</Th>
                    <Th>Ubicación</Th> 
                    <Th>p</Th> 
                  </Tr>
                </Thead>
                <Tbody >
                  <Tr sx={tableStyles}>
                    <Td>01</Td>
                    <Td>Laboratorio Granada</Td>   
                    <Td>
                        <Button   
                          sx={buttonStyles} as={Button} leftIcon={<ArrowRightIcon />} >                          
                        </Button>
                    </Td>                 
                  </Tr>
                  <Tr sx={tableStyles}>
                    <Td>02</Td>
                    <Td>Laboratorio Jaén</Td>   
                    <Td>
                        <Button   
                          sx={buttonStyles} as={Button} leftIcon={<ArrowRightIcon />} >                          
                        </Button>
                    </Td>                   
                  </Tr>
                  <Tr sx={tableStyles}>
                    <Td>03</Td>
                    <Td>Laboratorio Córdoba</Td>   
                    <Td>
                        <Button   
                          sx={buttonStyles} as={Button} leftIcon={<ArrowRightIcon />} >                          
                        </Button>
                    </Td>                    
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>  
                  <Td>-</Td>  
                  <Td>-</Td>  
                  <Td>-</Td>                   
                  </Tr>
                </Tfoot>
              </Table>
        </TableContainer>
    </Container>
  )
}
*/
