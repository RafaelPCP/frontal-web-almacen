import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Navbar2 from "../component/Navbar2";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../component/Sidebar";
import { div } from "framer-motion/client";
import Cabecera from "../component/cabecera";
import Clave from "../component/clave";

export default function RootLayout(estado) {
  if (!estado) return null;

  return (
    <Grid gridTemplateRows="1fr,1fr" bg="gray.50">
      <GridItem gras="section" rowSpan="1" bg="gray.700" height="50px">
        <Cabecera></Cabecera>

        <Navbar2></Navbar2>
      </GridItem>
      <GridItem as="main" ml="0px" mr="0px">
        <Outlet></Outlet>
      </GridItem>
    </Grid>
  );
}

//<Navbar2></Navbar2>
/*
export default function RootLayout(){
  return(

       <Navbar></Navbar>
      <Outlet></Outlet>
    
  )
}


*/

/*
export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
      <GridItem 
      as="aside"
      colSpan={{base:6,lg:2,xl:1}}
      //bg="purple.400"
      bg="brand.600"
      minHeight="100hv"
      p={{base:'20px', lg:'30px', xl:'40px'}}
      >
      <Sidebar></Sidebar>
      </GridItem>      
      <GridItem
      as="main"
      colSpan={{base:6,lg:4}}      
      p="40px"
      >
        <Navbar></Navbar>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
*/
