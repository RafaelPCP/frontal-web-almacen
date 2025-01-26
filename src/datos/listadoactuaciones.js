export const listadoactuaciones = [
  {
    id: "1",
    id_producto: "1",
    actuacion: "Pintar",
    fecha: "01/03/2024",
  },
  {
    id: "2",
    id_producto: "1",
    actuacion: "Electricidad",
    fecha: "01/05/2024",
  },
  {
    id: "3",
    id_producto: "2",
    actuacion: "Pintar",
    fecha: "01/07/2024",
  },
];

import * as communs from "./communs";

export const fetchListadoactuaciones = async (setState) => {
  communs.fetchData("listadoactuacion", setState);
};

export const addListadoactuacion = async (newListadoactuacion) => {
  communs.addData("listadoactuacion", newListadoactuacion);
};

export const updateListadoactuacion = async (listadoactuacionId, updatedData) => {
  communs.updateData("listadoactuacion",listadoactuacionId,updatedData)
};

export const deleteListadoactuacion = async (listadoactuacionId) => {
  communs.deleteData("listadoactuacion",listadoactuacionId)
};