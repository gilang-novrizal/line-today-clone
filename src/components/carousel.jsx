import { makeStyles, Typography } from "@material-ui/core";
import React from "react"
import Slider from "react-slick"

const useStyles = makeStyles(() => ({
    container:{
        width: "100%",
        marginBottom: "5rem"
    },
    imgContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "50vh",
        width: "100%",
        boxSizing: "border-box"
    },
    titleContainer: {
        background: "#fff",
        marginBottom: "-2rem",
        borderRadius: "5px",
        padding: "2rem"
    },
    img:{
        height: "100%",
        width: "auto"
    },
    imgDiv:{
        height: "50vh",
    },
    title:{
        fontWeight: 700
    }
}))
const Carousel = (props) => {
    const classes = useStyles()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className={classes.container}>
            <Slider {...settings}>
                {props.data?.map((articles) => {
                    return (
                        <div className={classes.imgContainer}>
                            <div className={classes.imgDiv}>
                                <img className={classes.img} src={articles.thumbnail ? `https://obs.line-scdn.net/${articles.thumbnail.hash}` : null} alt="" width="100%"  />
                            </div>
                            <div className={classes.titleContainer}>
                                <Typography variant="h6" className={classes.title}>
                                    {articles.title}
                                </Typography>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel