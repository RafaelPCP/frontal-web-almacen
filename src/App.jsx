import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// Login
import AuthGuard from "./component/AuthGuard";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Identificacion from "./pages/Identificacion";
import MenuPrincipal from "./pages/MenuPrincipal";
import Almacen from "./pages/Almacen/Almacen";
import Empresas from "./pages/Empresas/Empresas";
import Inventario from "./pages/Inventario/Inventario";
import Usuario from "./pages/Usuario";
import Configura from "./pages/Configura";
import FichaProducto from "./pages/FichaProducto";
import AddAlmacen from "./pages/Almacen/AddAlmacen";

import TiposProducto from "./pages/TiposProducto/TiposProducto";
import EstadosProducto from "./pages/EstadosProducto/EstadosProducto";
import ActuacionesProducto from "./pages/ActuacionesProducto/ActuacionesProducto";
import AddActuaciones from "./pages/ActuacionesProducto/AddActuaciones";
import AddInventario from "./pages/Inventario/AddInventario";
import UpdateAlmacen from "./pages/Almacen/UpdateAlmacen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        path="Identificacion"
        element={<Identificacion></Identificacion>}
      ></Route>
      <Route
        path="MenuPrincipal"
        element={
          <AuthGuard>
            <MenuPrincipal />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="almacen"
        element={
          <AuthGuard>
            <Almacen />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="almacen/add"
        element={
          <AuthGuard>
            <AddAlmacen />
          </AuthGuard>
        }
      ></Route>
        <Route
        path="almacen/update/:id"
        element={
          <AuthGuard>
            <UpdateAlmacen />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="tiposproducto"
        element={
          <AuthGuard>
            <TiposProducto />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="estadosproducto"
        element={
          <AuthGuard>
            <EstadosProducto />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="actuacionesproducto"
        element={
          <AuthGuard>
            <ActuacionesProducto />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="actuacionesproducto/add"
        element={
          <AuthGuard>
            <AddActuaciones />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="inventario"
        element={
          <AuthGuard>
            <Inventario />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="inventario/add"
        element={
          <AuthGuard>
            <AddInventario />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="inventario/:id"
        element={
          <AuthGuard>
            <FichaProducto />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="usuario"
        element={
          <AuthGuard>
            <Usuario />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="configuracion"
        element={
          <AuthGuard>
            <Configura />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="configuracion"
        element={
          <AuthGuard>
            <Configura />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="empresas"
        element={
          <AuthGuard>
            <Empresas />
          </AuthGuard>
        }
      ></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

/*
 <Route path="FichaProducto" element={<FichaProducto />}>
        <Route path=":id/:equipo" element={<FichaProducto />} />
        <Route path=":equipo" element={<FichaProducto />} />
      </Route>
      */
