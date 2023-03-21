import { Container, Grid, Typography } from "@mui/material"
import Interview from "./components/Interview"
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"
import BaseItem from "./components/BaseItem"
import { useState } from "react"

function App() {
    const [active, setActive] = useState()

    const data = [
        {
            image: img1,
            label: "Гипсовая штукатурка"
        },
        {
            image: img2,
            label: "Цементная штукатурка"
        },
        {
            image: img3,
            label: "Гипсокартон"
        }
    ]

    return (
        <Container sx={{mt:4}}>
            <Typography
                sx={{
                    fontSize: "36px",
                    color: "#3f3f3f",
                    fontWeight: "bold",
                    fontFamily: "Arial",
                    textAlign: "center"
                }}
            >
                КАКИЕ МАТЕРИАЛЫ DANOGIPS ВЫБРАТЬ?
            </Typography>
            <Typography
                sx={{
                    fontSize: "20px",
                    color: "#6d6e71",
                    fontFamily: "Arial",
                    textAlign: "center",
                    whiteSpace: "pre-wrap",
                    margin:"20px 0"
                }}
            >
                Выберите тип основания, ответьте на вопросы и получите рекомендации {"\n"}
                технических специалистов Danogips
            </Typography>
            <Grid container>
                {data.map((item, index) => (
                    <BaseItem active={index === active} handler={() => setActive(index)} {...item} key={index} />
                ))}
            </Grid>
            {active !== undefined &&
                < Interview id={active + 1} />
            }
        </Container>
    )
}

export default App
