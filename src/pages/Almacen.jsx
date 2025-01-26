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
import { fetchAlmacenes, deleteAlmacen } from "../datos/almacenes";
import "../Almacen.css";
import {
  _FloatingFilterModule,
  DateFilter,
  FilterManager,
  FilterWrapperComp,
} from "ag-grid-community";
import { Navigate, NavLink } from "react-router-dom";

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
  const gridRef = useRef();
  //const [rowData,setRowData]=useState();
  useEffect(() => {
    fetchAlmacenes(setRowData);
  }, [, deleteAlmacen]); // Empty dependency array ensures this runs only once

  const MyCellComponent = (p) => {
    return (
      <>
        {" "}
        <Button
          size="xs"
          colorScheme="red"
          onClick={() => {
            deleteAlmacen(p.value);
          }}
        >
          Eliminar
        </Button>
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
    },
    {
      field: "id",
      cellRenderer: MyCellComponent,
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
