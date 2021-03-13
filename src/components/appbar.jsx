import { AppBar, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import {Link, useLocation} from "react-router-dom"

const useStyles = makeStyles(()=>({
    tabs: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title:{
        margin: "1rem"
    },
    categoryContainer:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-flex-start",
        padding: "1rem"
    },
    btn:{
        margin: "0.5rem",
        borderRadius: "20px"
    },
    link:{
        color: "inherit",
        textDecoration: "none"
    },
    tab:{
        borderBottom: "2px solid #000",
        fontWeight: 700,
        color: "#000"
    }
}))


const Appbar = () => {
    const location = useLocation()
    const classes = useStyles()
    const categories = useSelector(state => state.newsReducer.categoryList)

    const [activeTab, setActiveTab] = useState(location.pathname.slice(1))
    const [showAllCat, setShowAllCat] = useState(false)

    const handleChange = (event, newValue)=>{
        setActiveTab(newValue)
    }

    return (
        <AppBar position="sticky" color="light" >
            <Typography variant="h6" fontWeight={700} className={classes.title}>
                 Line Today
            </Typography>
            <div className={classes.tabs}>
                {showAllCat? 
                (
                    <Typography className={classes.title}>
                        Kategori
                    </Typography>
                ) :
                (
                    <Tabs
                        value={activeTab}
                        onChange={handleChange}
                        variant="scrollable" >
                        {categories?.map((cat) => {
                            return (
                                <Link to={`/${cat.name.split(" ")[0].toUpperCase()}`}  className={classes.link}>
                                    <Tab value={cat.id} label={cat.name} className={cat.name.split(" ")[0].toUpperCase() === activeTab? classes.tab : null}/>
                                </Link>

                            )
                        })}
                    </Tabs>
                )
                }
                <IconButton onClick={()=> setShowAllCat(!showAllCat)}>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
            <div className={classes.categoryContainer}>
                {showAllCat && 
                categories?.map((cat)=>{
                    return(
                        <Link to={`/${cat.name.split(" ")[0].toUpperCase()}`} className={classes.link}>
                            <Button 
                                variant={cat.name.split(" ")[0].toUpperCase() === activeTab.split(" ")[0]? "contained" : "outlined"} 
                                className={classes.btn}
                                onClick={() => setActiveTab(cat.name.toUpperCase())}>
                                {cat.name}
                            </Button>
                        </Link>
                    )
                })
                }
            </div>
        </AppBar>
    )
}

export default Appbar
