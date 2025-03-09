export const listadodocumentos = [
  {
    id: "1",
    id_producto: "6",
    titulo: "manual pulidora",
    documento: "manualpulidora",
    fecha: "01/03/2024",
  },
  {
    id: "2",
    id_producto: "1",
    titulo: "marcado CE pulidora",
    documento: "marcadoCEpulidora",
    fecha: "01/05/2024",
  },
  {
    id: "3",
    id_producto: "2",
    titulo: "manual hormigon",
    documento: "manualhormigon",
    fecha: "01/07/2024",
  },
  {
    id: "4",
    id_producto: "2",
    titulo: "marcado CE hormigon",
    documento: "marcadoCEhormigon",
    fecha: "01/07/2024",
  },
];

import * as communs from "./communs";
export const fetchListadodocumentosWrapper = () => {
  return new Promise((resolve, reject) => {
    fetchListadodocumentos((data) => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Failed to fetch listadodocumentos"));
      }
    });
  });
};
export const fetchListadodocumentos = async (setState) => {
  communs.fetchData("listadosdocumentos", setState);
};
export const fetchListadodocumentosById = async (setState) => {
 communs.fetchData(`listadosdocumentos/${id}`, setState);
};

export const updateListadodocumentos = async (listadodocumentosId, updatedData) => {
  communs.updateData("listadosdocumentos",listadodocumentosId,updatedData)
};

export const deleteListadodocumentos = async (listadodocumentosId) => {
  communs.deleteData("listadosdocumentos",listadodocumentosId)
};

export const addListadodocumentos = async (formData) => {
  const data = new FormData();
  Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
  });
  console.log(`Data: ${data}`);
  communs.addFileData("listadosdocumentos", data);
};


