export const actuaciones = [
  {
    id: "1",
    actuacion: "Pintar",
  },
  {
    id: "2",
    actuacion: "Electrónica",
  },
  {
    id: "3",
    actuacion: "Electricidad",
  },
  {
    id: "4",
    actuacion: "Mecanizado",
  },
  {
    id: "5",
    actuacion: "Actualización",
  },
];

import * as communs from "./communs";

export const fetchActuacionesById = async(setState, id) => {
  console.log("called")
  communs.fetchData(`actuaciones${id}`, setState);
};

export const fetchActuaciones = async (setState) => {
  communs.fetchData("actuaciones", setState);
};

export const addActuacion = async (newActuacion) => {
  communs.addData("actuaciones", newActuacion);
};

export const updateActuacion = async (actuacionId, updatedData) => {
  communs.updateData("actuaciones",actuacionId,updatedData);
};

export const deleteActuacion = async (actuacionId) => {
  communs.deleteData("actuaciones", actuacionId);
};
