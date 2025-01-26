import manualpulidora from "../documentos/MANUAL DE INSTRUCCIONES DESBASTADORA DBP07.pdf";
import manualhormigon from "../documentos/manual rampas.pdf";
import marcardoCEhormigon from "../documentos/certificado de conformidad HDR3000.pdf";
import marcadoCEpulidora from "../documentos/dbp 07 MARCADO CE desbastadora--.pdf";
import vacio from "../documentos/vacio.png";

export default [
  { id: "0", titulo: "vacio", documento: vacio },
  { id: "1", titulo: "manual pulidora", documento: manualpulidora },
  {
    id: "2",
    titulo: "manual hormigon",
    documento: manualhormigon,
  },
  { id: "3", titulo: "marcado CE hormigon", documento: marcardoCEhormigon },
  {
    id: "4",
    titulo: "marcado CE pulidora",
    documento: marcadoCEpulidora,
  },
];
