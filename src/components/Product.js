import styled from "@emotion/styled"
import { Typography } from "@mui/material"

const Link = styled("a")(({ theme }) => ({
    display: "block",
    position: "relative",
    zIndex:2,
    textAlign: "center",
    height: "100%",
    color: "#000000",
    ">img": {
        height: "200px",
        maxWidth:"80%",
        objectFit:"contain"
    },
    ">.text": {
        color: "#000000",
        fontSize: "16px",
        fontFamily: "Arial",
        padding: "15px 0 5px"
    },
    "&::before": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%",
        backgroundColor: "#e7e7e7",
        zIndex: "-1",
        transition: "1s"
    },
    "&:hover": {
        color:"#ffffff",
        ">.text": {
            color:"#ffffff"
        },
        "&::before": {
            backgroundColor: "#e91d2a",
            height:"60%"
        }
    }
}))

const Product = ({ href, img, title }) => {
    return (
        <Link href={href} target="_blank">
            <img src={img} alt={title} />
            <Typography className="text">{title}</Typography>
        </Link>
    )
}

export default Product