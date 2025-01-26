export const tipos = [
  {
    id: "1",
    tipo: "Prensas",
  },
  {
    id: "2",
    tipo: "Estufas",
  },
  {
    id: "3",
    tipo: "Geotecnia",
  },
  {
    id: "4",
    tipo: "Medición",
  },
];

import * as communs from "./communs";

export const fetchTipos = async (setState) => {
  communs.fetchData("tipos", setState);
};

export const addTipos = async (newTipos) => {
  communs.addData("tipos", newTipos);
};

export const updateTipos = async (tiposId, updatedData) => {
  communs.updateData("tipos",tiposId,updatedData)
};

export const deleteTipos = async (tiposId) => {
  communs.deleteData("tipos",tiposId)
};

