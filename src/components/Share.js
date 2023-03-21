import styled from "@emotion/styled"
import vk from "../assets/vk.png"
import wa from "../assets/wa.png"
import tg from "../assets/tg.png"
import bgr from "../assets/bgr.png"
import { useMediaQuery } from "@mui/material"


const Wrapper = styled("div")(({ theme }) => ({
    backgroundColor: "#e7e7e7",
    display: "flex",
    minHeight: "115px",
    marginBottom: 40
}))

const Title = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3f3f3f",
    fontSize: "24px",
    textTransform: "uppercase",
    color: "#ffffff",
    fontFamily: "Arial",
    flex: "1",
    clipPath: "polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0% 100%);"
}))

const List = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "20px 40px"
}))

const Icon = styled("a")(({ theme }) => ({
    backgroundImage: `url(${bgr})`,
    backgroundSize: "contain",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "grayscale(1)",
    "&:hover": {
        filter: "grayscale(0)"
    }
}))


const Share = () => {
    const isPhone = useMediaQuery('(max-width:600px)')

    return (
        <Wrapper style={isPhone ? { flexDirection: "column", gap: "20px" } : {}}>
            <Title style={isPhone ? { textAlign: "center", lineHeight: "1.5", clipPath: "none" } : {}}>поделиться результатами</Title>
            <List>
                <Icon href="https://vk.com/public149804744">
                    <img src={vk} />
                </Icon>
                <Icon>
                    <img src={wa} />
                </Icon>
                <Icon href="https://t.me/danogips_russia">
                    <img src={tg} />
                </Icon>
            </List>
        </Wrapper>
    )
}

export default Share