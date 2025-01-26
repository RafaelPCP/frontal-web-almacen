import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Navbar2 from "../component/Navbar2"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../component/Sidebar"
import { div } from "framer-motion/client"
import Cabecera from "../component/cabecera"
import Clave from "../component/clave"

export default function Layoutclave(){
  return(
    <div>
       <Outlet></Outlet>
    </div>
           
         
  )
}