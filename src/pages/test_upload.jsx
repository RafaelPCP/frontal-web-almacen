import { useState } from "react";
import {
    Container,
    Center
  } from "@chakra-ui/react";
import { addListadodocumentos } from "../datos/listadodocumentos"

export default function DocumentoUpload() {
    const [formData, setFormData] = useState({
        titulo: "",
        documento: "",
        fecha: "2025-03-01",
        datos_del_documento:"",
        producto: 1 // Esto esta fijado a 0 pero en la realidad habra que fijarlo al producto que sea
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, datos_del_documento: e.target.files[0] });
    };

    const handleSubmit = (e)=>{
        console.log("handling")
        addListadodocumentos(formData);
        console.log("handled")
    }

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
                    <h2 className="text-lg font-bold mb-4">Upload a File</h2>
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required/><br/><br/>
                        
                        <label htmlFor="documento">Documento:</label>
                        <input type="text" id="documento" name="documento" value={formData.documento} onChange={handleChange} required/><br/><br/>
                        
                        <label htmlFor="fecha">Fecha:</label>
                        <input type="date" id="fecha" name="fecha" value={formData.fecha} onChange={handleChange} required/><br/><br/>
                        
                        <label htmlFor="datos_del_documento">Datos del Documento:</label>
                        <input type="file" id="datos_del_documento" name="datos_del_documento" onChange={handleFileChange} required/><br/><br/>                        
                        
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </Container>
    );
}
