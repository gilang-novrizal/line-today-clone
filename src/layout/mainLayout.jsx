import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from '../components/carousel'
import LargeHeadline from '../components/largeHeadline'
import SmallHeadline from '../components/smallHeadline'
import { Link, useLocation } from "react-router-dom"
import { KeyboardArrowRight } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
    root: {
        background: "#f3f3f3",
        padding: "2rem",
        minHeight: "100vh"
    },
    newsContainer: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    title: {
        fontWeight: "bold",
        marginBottom: "1rem"
    },
    cardContainer: {
        background: "#fff",
        padding: "1rem",
        margin: "2rem 0",
        borderRadius: "5px"
    },
    link: {
        color: "inherit",
        textDecoration: "none",
        display: "flex",
        alignItems: "center"
    },
    linkTitle: {
        fontWeight: "bold"
    },
    linkContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    }

}))

const MainLayout = (props) => {
    const location = useLocation()
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Carousel
                data={props.category?.templates?.[1].type === 50? props.category?.templates?.[1]?.sections?.[0]?.articles : null}
            />
            {props.category?.templates?.[1]?.sections?.[1]?.articles?.map((articles) => {
                return (
                    <SmallHeadline
                        articles={articles} />
                )
            })}
            {props.category?.templates.map((templates, idx) => {
                if ((templates.type === 59 || templates.type === 63 || templates.type === 6301 || templates.type === 6303) && idx !== 1) {
                    if (templates.title === "BERITA TERBARU") {
                        return (
                            <div className={classes.cardContainer}>
                                {(templates.type === 63 || templates.type === 6301) && location.pathname === "/TOP" ?
                                    <Link to={`/${templates.title?.split(" ")[0]}`} className={classes.link}>
                                        <Typography variant="h6" className={classes.title}>{templates.title}</Typography>
                                    </Link>
                                    :
                                    <Typography variant="h6" className={classes.title}>{templates.title}</Typography>}
                                {
                                    templates?.sections?.[0].articles.slice(0, 10).map((articles) => {
                                        return (
                                            <SmallHeadline
                                                articles={articles} />
                                        )
                                    })
                                }
                            </div>
                        )
                    } else {
                        return (
                            <div className={classes.cardContainer}>
                                {(templates.type === 63 || templates.type === 6301) && (location.pathname === "/TOP" || location.pathname === "/") ?
                                    <Link 
                                        to={templates.title === "LOCAL NEWS" ? `/REGIONAL` : templates.title === "VIDEO-NEWS"? `/VIDEOS` :  `/${templates.title?.split(" ")[0]}`} 
                                        className={classes.link}>
                                        <Typography variant="h6" className={classes.title}>{templates.title}</Typography>
                                    </Link>
                                    :
                                    <Typography variant="h6" className={classes.title}>{templates.title}</Typography>}
                                <div className={classes.newsContainer}>
                                    {
                                        templates?.sections?.[0].articles.map((articles) => {
                                            return (
                                                <LargeHeadline
                                                    articles={articles} />
                                            )
                                        })
                                    }
                                </div>
                                {((templates.type === 63 || templates.type === 6301) && (location.pathname === "/TOP" || location.pathname === "/")) &&
                                    <div className={classes.linkContainer}>
                                        <Link
                                            to={templates.title === "LOCAL NEWS" ? `/REGIONAL` : templates.title === "VIDEO-NEWS" ? `/VIDEOS` : `/${templates.title?.split(" ")[0]}`}
                                            className={classes.link}>
                                            <Typography variant="body">Lihat Lainnya</Typography>
                                            <KeyboardArrowRight />
                                        </Link>
                                    </div>}
                            </div>
                        )
                    }
                }
            })}
        </div>
    )
}

export default MainLayout
