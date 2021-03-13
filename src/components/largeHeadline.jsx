import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        width: "30vw"
    },
    imgCont: {
        maxWidth: "100%",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "5px"
        
    },
    img: {
        width: "100%",
        overflow: "hidden",
        borderRadius: "5px"
    },
    textCont: {
        width: "100%",
        marginTop: "12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    link: {
        color: "inherit",
        textDecoration: "none"
    },
    title:{
        fontWeight: 700
    },
    "@media (min-width: 768px)":{
        container:{
          width: "40vw",
        }
    },
    "@media (min-width: 1024px)":{
        container:{
          width: "20vw",
        }
    }
}))

const LargeHeadline = (props) => {
    const classes = useStyles()
    return (
        <a href={props.articles.url.url} className={classes.link}>
            <div className={classes.container}>
                <div className={classes.imgCont}>
                    <img className={classes.img} src={props.articles.thumbnail ? `https://obs.line-scdn.net/${props.articles.thumbnail.hash}` : null} alt="" />
                </div>
                <div className={classes.textCont}>
                    <Typography variant="subtitle2" className={classes.title}>{props.articles.title}</Typography>
                    <Typography variant="caption">{props.articles.publisher}</Typography>
                </div>
            </div>
        </a>
    )
}

export default LargeHeadline
