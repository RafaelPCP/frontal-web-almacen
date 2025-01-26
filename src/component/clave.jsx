import { Box, Button, Center,  Container, FormControl, FormLabel, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { Form, NavLink, redirect } from "react-router-dom";




 export default function Clave(){

    const boxStyles={
        p:"10px",
        marginY:"0px",
        color:"gray.500",
        fontSize:"xs",
        marginLeft:"0px",
        bg:"orange.200",
        ':hover':{
          color:'black',
          bg:'blue.200'
        }
      }
      
      let usuario,clave

 return(
  <Container  as ="section"  > 
    <Center height='200px'>
      <Box boxSize='200px'  >
        <Image  height='200' src='/img/inmaq.png'></Image>        
      </Box>   
    </Center> 
    <Heading textAlign="center" fontSize="4xl" color="blue.600" marginY="0px" padding="0px"> GESTIÓN DE EQUIPOS</Heading>        
    <Box  sx={boxStyles} >        
      (c) Inmaq. Sistema de gestión del Servicio técnico, mantenimiento de equipos y reparación.    
    </Box>
    
    <Box maxW="280px">      
      <Form method="post" action=""  >
        <FormControl isRequired mb="10px">
            <FormLabel>Usuario </FormLabel>
            <Input fontSize="xs" placeholder="correo electrónico" type="text" name="Usuario" value={usuario} ></Input>                      
        </FormControl>
        <FormControl isRequired mb="40px">
            <FormLabel>Usuario </FormLabel>
            <Input  fontSize="xs" placeholder="clave" type="password" name="Clave" value={clave}></Input>                                  
        </FormControl>       
          <Button colorScheme="blue" type="submit" fontSize="sm" > 
               <NavLink to="/Profile"> Aceptar</NavLink>         
          
          </Button>               
      </Form> 
    </Box>    

  </Container>
 )
}

//<NavLink to="/MenuPrincipal"> Aceptar</NavLink> 

export const enterClave=async({request})=> {
  const data =await request.formData()
  const task={
    user: data.get('Usuario'),
    keyword: data.get('Clave')
  }
console.log(task)
return redirect('/')
}


 