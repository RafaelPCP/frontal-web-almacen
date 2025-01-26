import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink, useLoaderData } from "react-router-dom";

export default function Sidebar() {
    
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
        <ListItem>
            <NavLink to="/">
                <ListIcon as={CalendarIcon} color="white"></ListIcon>
                Dashboard
            </NavLink>            
        </ListItem>
        <ListItem>
            <NavLink to="/create">
            <ListIcon as={EditIcon} color="white"></ListIcon>
                New Task
            </NavLink>            
        </ListItem>
        <ListItem>
            <NavLink to="/profile">
            <ListIcon as={AtSignIcon} color="white"></ListIcon>
                Profile
            </NavLink>            
        </ListItem>
    </List>
  )
}

