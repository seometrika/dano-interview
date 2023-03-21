import { Grid, Typography, useMediaQuery } from "@mui/material"

const BaseItem = ({ image, label, active, handler }) => {
    const isPhone = useMediaQuery('(max-width:600px)')
    return (
        <Grid item xs={4} onClick={handler}>
            <img
                src={image}
                style={isPhone ?
                    {
                        height: active ? "170px" : "120px",
                        opacity: active ? 1 : 0.3,
                        display: "block",
                        width: "100%",
                        objectFit: "cover",
                        transition: ".3s"
                    }
                    :
                    {
                        height: active ? "270px" : "220px",
                        opacity: active ? 1 : 0.3,
                        display: "block",
                        width: "100%",
                        objectFit: "cover",
                        transition: ".3s"
                    }}
            />
            <Typography sx={isPhone ?
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: active ? "#e91d2a" : "transparent",
                    color: active ? "#ffffff" : "#929292",
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    textAlign:"center",
                    height: "60px",
                    transition: ".3s"
                }
                :
                {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: active ? "#e91d2a" : "transparent",
                    color: active ? "#ffffff" : "#929292",
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    height: "100px",
                    transition: ".3s"
                }}>
                {label}
            </Typography>
        </Grid>
    )
}

export default BaseItem