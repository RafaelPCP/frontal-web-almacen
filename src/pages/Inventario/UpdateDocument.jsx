import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import {
  Container,
  Center
} from "@chakra-ui/react";
import { updateListadodocumentos } from "../../datos/listadodocumentos";

export default function UpdateDocument() {
  const { id } = useParams(); // Get the id value from the URL
  const [searchParams] = useSearchParams(); // Get the search parameters from the URL
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const idDocumento= searchParams.get("idDocumento");
  const [formData, setFormData] = useState({
    titulo: searchParams.get("titulo") || "", // Set the default value from searchParams
    documento: searchParams.get("documento") || "", // Set the default value from searchParams
    fecha: searchParams.get("fecha") || "2025-03-01", // Set the default value from searchParams
    datos_del_documento: "",
    producto: id || "", // Initialize producto as an empty string
    idDocumento: searchParams.get("idDocumento") || "", // Set the default value from searchParams
  });

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      titulo: searchParams.get("titulo") || "",
      documento: searchParams.get("documento") || "",
      fecha: searchParams.get("fecha") || "2025-03-01",
      producto: id || "",
      idDocumento: searchParams.get("idDocumento") || "",
    }));
  }, [id, searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, datos_del_documento: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await updateListadodocumentos(idDocumento,formData);
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container
      id="almac"
      pl="10px"
      pr="10px"
      pt="100"
      as="section"
      maxWidth="50%"
      maxHeight="100%"
    >
      <Center height="20px"></Center>
      <div className="ag-theme-quartz" style={{ height: "700px" }}>
        <div className="p-4 max-w-md mx-auto border rounded shadow">
          <h2 className="text-lg font-bold mb-4">Update Document</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Título:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label htmlFor="documento">Documento:</label>
            <input
              type="text"
              id="documento"
              name="documento"
              value={formData.documento}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
            <br />
            <br />

            <label htmlFor="datos_del_documento">Datos del Documento:</label>
            <input
              type="file"
              id="datos_del_documento"
              name="datos_del_documento"
              onChange={handleFileChange}
              required
            />
            <br />
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Container>
  );
}