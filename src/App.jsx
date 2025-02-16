import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useParams,
} from "react-router-dom";

// Login
import AuthGuard from "./component/AuthGuard";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import Identificacion, { enterClave } from "./pages/Identificacion";
import MenuPrincipal from "./pages/MenuPrincipal";
import Profile from "./pages/Profile";
import Almacen from "./pages/Almacen";
import Empresas from "./pages/Empresas";
import Inventario from "./pages/Inventario";
import Usuario from "./pages/Usuario";
import Configura from "./pages/Configura";
import FichaProducto from "./pages/Fichaproducto";
import AddAlmacen from "./pages/AddAlmacen";
import AddEstados from "./pages/AddEstados";
import AddTipo from "./pages/AddTipo";

import { ProductDetails } from "./pages/ProductDetails";
import TiposProducto from "./pages/TiposProducto";
import EstadosProducto from "./pages/EstadosProducto";
import ActuacionesProducto from "./pages/ActuacionesProducto";
import AddActuaciones from "./pages/AddActuaciones";
import AddInventario from "./pages/AddInventario";
import AddEmpresas from "./pages/AddEmpresas";

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
        path="tiposproducto"
        element={
          <AuthGuard>
            <TiposProducto />
          </AuthGuard>
        }
      ></Route>
      <Route
        path="tiposproducto/add"
        element={
          <AuthGuard>
            <AddTipo />
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
        path="estadosproducto/add"
        element={
          <AuthGuard>
            <AddEstados />
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
      <Route
        path="empresas/add"
        element={
          <AuthGuard>
            <AddEmpresas />
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
