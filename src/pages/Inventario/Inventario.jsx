import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { Button, Center, Container } from "@chakra-ui/react";
import {} from "@chakra-ui/icons";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import { NavLink } from "react-router-dom";
import { fetchInventarios, deleteInventario } from "../../datos/inventario";

import ColumnaDeAcciones from "../../component/ColumnaDeAcciones";


export default function Inventario() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState([]);
  const [inventarioIsDeleted, setinventarioIsDeleted] = useState(false)

  useEffect(() => {
    fetchInventarios(setRowData);
  }, [, inventarioIsDeleted]);

  const updateRouteInventario = (data) => {
    return `/Almacen/update/${data.id}?almacen=${data.almacen}&laboratorio=${data.laboratorio}`
  }
  const ColunaAccionesInventario = (p) => {
    return <ColumnaDeAcciones data={p.data} deleteAction={deleteInventario} updateRoute={updateRouteInventario} event={setinventarioIsDeleted} />
  }


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
      field: "almacen.almacen",
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
      field: "estado.estado",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      field: "tipo.tipo",
      filter: "agTextColumnFilter",
      editable: true,
      flex: true,
    },
    {
      cellRenderer: ColunaAccionesInventario,
      filter: "agTextColumnFilter",
      flex: true
    }
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
        <NavLink to={"/Inventario/add"}>
          <Button
            colorScheme="blue"
            size="s"
            onClick={() => setbotonPulsado("Inventario")}
          >
            Añadir
          </Button>
        </NavLink>
      </div>
    </Container>
  );
}
