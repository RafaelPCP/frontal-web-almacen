export const estados = [
  {
    id: "1",
    estado: "En reparación",
  },
  {
    id: "2",
    estado: "No operativo",
  },
  {
    id: "3",
    estado: "Operativo",
  },
  {
    id: "4",
    estado: "Reservado",
  },
];


import * as communs from "./communs";

export const fetchEstados = async (setState) => {
  communs.fetchData("estados", setState);
};

export const addEstado = async (newEstado) => {
  communs.addData("estados", newEstado);
};

export const updateEstado = async (estadoId, updatedData) => {
  communs.updateData("estados",estadoId,updatedData)
};

export const deleteEstado = async (estadoId) => {
  communs.deleteData("estados",estadoId)
};