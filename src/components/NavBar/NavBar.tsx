import React from "react";
import { AppBar, Toolbar, IconButton, 
    List, ListItem, ListItemText, Container} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Home } from "@material-ui/icons";

const navLinks: {title: string, path: string}[] = [
    {title: "Blog", path: "#"},
    {title: "Projects", path: "#"},
    {title: "Contact", path: "#"}
];

const useStyles = makeStyles(
    {
        navDisplayFlex: {
            display: "flex",
            justifyContent: "space-between"
        },
        linkText: {
            textDecoration: "none",
            textTransform: "uppercase",
            color: "white",
            display: "inline-block"
        }
    }
);

const NavBar = () => {
    const classes = useStyles();
    const navList = navLinks.map(
        ({title, path}) => {
            return(
                <a href={path} key={title} className={classes.linkText}>
                    <ListItem>
                        <ListItemText primary={title}/>
                    </ListItem>
                </a>
            );
        }
    );
    return (
        <AppBar position="static">
            <Toolbar>
                <Container className={classes.navDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large"/>
                    </IconButton>
                    <List component="nav" aria-labelledby="main nav">
                        {navList}       
                    </List>
                </Container>
           </Toolbar>
        </AppBar>
    );
};

export default NavBar;