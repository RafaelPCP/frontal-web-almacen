import { Box, Button, Center,  Container, FormControl, FormLabel, Heading, Image, Input, Stack } from "@chakra-ui/react";
import { Form, NavLink, redirect } from "react-router-dom";


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

 export default function Idenficacion(){
 return(
  <Container id="identifica" p='100px' as ="section"  > 
    <Center height='200px'>
      <Box boxSize='200px'  >
        <Image height='200'  src='/img/inmaq.png'></Image>        
      </Box>   
    </Center> 
    <Heading textAlign="center" fontSize="4xl" color="blue.600" marginY="0px" padding="0px"> GESTIÓN DE EQUIPOS</Heading>        
    <Box  sx={boxStyles} >        
      (c) INMAQ. Sistema de gestión del Servicio técnico, mantenimiento de equipos y reparación.    
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
              Aceptar
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


 

/*
export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
        <TabList>
            <Tab _selected={{color: 'white', bg:'purple.400'}}>Acount Info</Tab>
            <Tab _selected={{color: 'white', bg:'purple.400'}}>Task History</Tab>
        </TabList>

        <TabPanels>          
          <TabPanel>
            <List spacing={4}>
              <ListItem>
                <ListIcon as={EmailIcon}></ListIcon>
                Email:mario@lñkajsdñlf.com                
              </ListItem>
              <ListItem>
                <ListIcon as={ChatIcon}></ListIcon>
                asfa asdf ads asdf asd                
              </ListItem>
              <ListItem>
                <ListIcon as={StarIcon}></ListIcon>
                asdf asdf ads asdfasasg                
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>

            
          </TabPanel>
        </TabPanels>

    </Tabs>
  )
}
*/