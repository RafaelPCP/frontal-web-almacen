export const empresas = [
  {
    id: "1",
    nombre: "Cemosa",
    ubicación: "Málaga",
    contacto: "Félix",
  },
  {
    id: "2",
    nombre: "BAC",
    ubicación: "Barcelona",
    contacto: "Luis Rodríguez",
  },
  {
    id: "3",
    nombre: "Eptisa",
    ubicación: "Basauri",
    contacto: "Javier",
  },
  {
    id: "4",
    nombre: "TPF EXTREMADURA",
    ubicación: "Don Benito",
    contacto: "Juan Antonio",
  },
  {
    id: "5",
    nombre: "Intemac",
    ubicación: "Torrejon de la Calzada",
    contacto: "Silvia",
  },
  {
    id: "6",
    nombre: "Applus",
    ubicación: "Sada",
    contacto: "Adriano Miranda",
  },
  {
    id: "7",
    nombre: "Galaicontrol",
    ubicación: "Vigo",
    contacto: "Miguel",
  },
  {
    id: "8",
    nombre: "Cemosa Euskontrol",
    ubicación: "Bilbao",
    contacto: "Alejandro",
  },
  {
    id: "9",
    nombre: "Votarantin",
    ubicación: "Málaga",
    contacto: "Lorenzo",
  },
  {
    id: "10",
    nombre: "Lafarge ",
    ubicación: "Madrid",
    contacto: "Javier",
  },
];


import * as communs from "./communs";

export const fetchEmpresas = async (setState) => {
  communs.fetchData("empresas", setState);
};

export const addEmpresa = async (newEmpresa) => {
  communs.addData("empresas", newEmpresa);
};

export const updateEmpresa = async (empresaId, updatedData) => {
  communs.updateData("empresas",empresaId,updatedData)
};

export const deleteEmpresa = async (empresaId) => {
  communs.deleteData("empresas",empresaId)
};
