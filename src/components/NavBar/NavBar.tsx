import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText} from "@material-ui/core"
import { Home } from "@material-ui/icons"
import "./NavBar.css";

const navLinks: {title: string, path: string}[] = [
    {title: "Blog", path: "#"},
    {title: "Projects", path: "#"},
    {title: "Contact", path: "#"}
];

const NavBar = () => {
    const navList = navLinks.map(
        ({title, path}) => {
            return(
                <a href={path} key={title}>
                    <ListItem>
                        <ListItemText primary={title}/>
                    </ListItem>
                </a>
            );
        }
    );
    console.log("Debug: ", navList);
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="home">
                    <Home font-size="large"/>
                </IconButton>
                <List component="nav" aria-labelledby="main nav">
                    {navList}       
                </List>
           </Toolbar>
        </AppBar>
    );
};

export default NavBar;