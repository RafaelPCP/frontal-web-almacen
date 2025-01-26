// export const almacenes = [
//   { id: "1", Laboratorio: "Granada", Almacen: "Granada" },
//   { id: "2", Laboratorio: "Córdoba", Almacen: "Córdoba" },
//   { id: "3", Laboratorio: "Málaga", Almacen: "Málaga" },
//   { id: "4", Laboratorio: "Sevilla", Almacen: "Sevilla" },
//   { id: "5", Laboratorio: "Almería", Almacen: "Almería" },
//   { id: "6", Laboratorio: "Cuevas Bajas", Almacen: "Almería" },
//   { id: "7", Laboratorio: "Madrid", Almacen: "Getafe" },
//   { id: "8", Laboratorio: "Valladolid", Almacen: "Valladolid" },
//   { id: "9", Laboratorio: "Zamora", Almacen: "Zamora" },
//   { id: "10", Laboratorio: "Salamanca", Almacen: "Salamanca" },
//   { id: "11", Laboratorio: "Asturias", Almacen: "Oviedo" },
// ];

import {apiRequest} from "./communs"


export const fetchAlmacenes = async () => {
  try {
    const almacenes = await apiRequest("almacenes", "GET");
    console.log("Fetched almacenes:", almacenes);
    return almacenes;
  } catch (error) {
    console.error("Failed to fetch almacenes:", error.message);
  }
};
