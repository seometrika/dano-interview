import Question from "./Question"
import questions0 from "../data/questions"
import { useEffect, useRef, useState } from "react"
import InterviewContext from "../context/InterviewContext"
import { Grid, Paper, Stack, styled, Typography, useMediaQuery } from "@mui/material"
import Product from "./Product"
import Button from "./Button"
import downloadIcon from "../assets/download.png"
import mapIcon from "../assets/map.png"
import arrowIcon from "../assets/arrow.png"
import Share from "./Share"
import Pdf from "react-to-pdf"
import { useToImage } from "@hcorta/react-to-image"

const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2]
}


const Item = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "10px",
    ">.number": {
        width: "57px",
        height: "57px",
        borderRadius: "50%",
        backgroundColor: "#3f3f3f",
        fontSize: "30px",
        color: "#ffffff",
        fontWeight: "800",
        fontFamily: "Arial",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    ">.text": {
        flex: "1",
        fontSize: "16px",
        color: "#000000",
        fontFamily: "Arial",
        ">a": {
            color: "#e91d2a"
        }
    },
    "&:not(:last-child)": {
        ">.number": {
            "&::before": {
                content: '""',
                display: "block",
                borderLeft: "dotted #000",
                position: "absolute",
                top: "100%",
                height: "30px",
                opacity: "0.3"
            }
        }
    }
}))

const Back = styled("div")(({ theme }) => ({
    border: "2px solid #e7e7e7",
    padding: "0 0 80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        borderColor: "#e91d2a"
    }
}))

const tovars = [
    {
        href: "https://www.danogips.ru/katalog/gotovye_shpatlevki_danogips/ultrafinish.html",
        img: "https://www.danogips.ru/images/2023/UF_1-PhotoRoom.png-PhotoRoom.png",
        title: "Danogips UltraFinish"
    },
    {
        href: "https://www.danogips.ru/katalog/gotovye_shpatlevki_danogips/super_finish.html",
        img: "https://www.danogips.ru/images/2023/SF3-PhotoRoom.png-PhotoRoom.png",
        title: "SuperFinish"
    },
    {
        href: "https://www.danogips.ru/katalog/gotovye_shpatlevki_danogips/fill_finish_light.html",
        img: "https://www.danogips.ru/images/2023/FF12,3-PhotoRoom.png-PhotoRoom.png",
        title: "Fill&Finish Light"
    },
    {
        href: "https://www.danogips.ru/katalog/gotovye_shpatlevki_danogips/prospray.html",
        img: "https://www.danogips.ru/images/2023/PS25-PhotoRoom.png-PhotoRoom.png",
        title: "ProSpray"
    },
    {
        href: "https://www.danogips.ru/katalog/gotovye_shpatlevki_danogips/danotop9.html",
        img: "https://www.danogips.ru/images/2023/thumbnail_TOP_Gray_2-PhotoRoom.png-PhotoRoom.png",
        title: "Danogips ProFinish Grey"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_finishing/danotop5.html",
        img: "https://www.danogips.ru/images/2023/DT16,5-PhotoRoom.png-PhotoRoom.png",
        title: "Danogips TOP"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_finishing/danobox.html",
        img: "https://www.danogips.ru/images/2023/BOX.png",
        title: "Danogips BOX"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_polimernaya/shpatlevka_polimernaya_danogips_jet_10.html",
        img: "https://www.danogips.ru/images/2023/3D_10-min.png",
        title: "Danogips JET 10"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_polimernaya/shpatlevka_polimernaya_danogips_jet_3.html",
        img: "https://www.danogips.ru/images/2023/3D_3.png",
        title: "Danogips JET 3"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_polimernaya/danojet9.html",
        img: "https://www.danogips.ru/images/2023/JET_9_FACE-PhotoRoom_png-PhotoRoom.png",
        title: "Danogips JET 9"
    },
    {
        href: "https://www.danogips.ru/katalog/shpatlevka_polimernaya/danojet5.html",
        img: "https://www.danogips.ru/images/2023/JET_5_FACE-PhotoRoom_png-PhotoRoom.png",
        title: "Danogips JET 5"
    },
    {
        href: "https://www.danogips.ru/katalog/gruntyi/danogips_firstcoat.html",
        img: "https://www.danogips.ru/images/2023/FirstCoat-PhotoRoom.png-PhotoRoom.png",
        title: "DANOGIPS FirstCoat"
    },
    {
        href: "https://www.danogips.ru/katalog/gruntyi/danogrunt.html",
        img: "https://www.danogips.ru/images/2023/GRUNT20AP.png",
        title: "Danogips GRUNT (универсальный)"
    },
    {
        href: "https://www.danogips.ru/katalog/gruntyi/danogruntuni.html",
        img: "https://www.danogips.ru/images/2023/GRUNT%20DP-PhotoRoom.png-PhotoRoom.png",
        title: "Danogips GRUNT (глубокого проникновения)"
    },
    {
        href: "https://www.danogips.ru/katalog/gruntyi/danogruntconcentrat.html",
        img: "https://www.danogips.ru/images/2023/GRUNT_Concentrat_3D-PhotoRoom.png-PhotoRoom.png",
        title: "DANO GRUNT (концентрат)"
    },
]

const Interview = ({ id }) => {
    const [data, setData] = useState()
    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState()
    const [result, setResult] = useState([])
    const [length, setLength] = useState(0)
    const [sallers, setSallers] = useState([])
    const [show, setShow] = useState(true)
    const { ref, getJpeg } = useToImage({ backgroundColor: "#FFFFFF" })
    const isPhone = useMediaQuery('(max-width:600px)')
    // const ref = useRef()

    const reload = () => {
        setShow(true)
        setResult([])
        setLength(0)
        fetch(`/interview/questions${id}.json`)
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
                setQuestions(resJson.data)
            })
    }

    useEffect(reload, [id])

    useEffect(() => {
        if (questions && questions.length > 0)
            setQuestion(questions[0])
    }, [questions])

    useEffect(() => {
        const t = tovars.filter(item => {
            for (const res of result) {
                if (res.match(item.href))
                    return true
            }
            return false
        })
        setSallers(t)
    }, [result])

    useEffect(() => {
        if (length > 0 && length === questions.length)
            setShow(false)
    }, [length])

    const onAnswer = (variant) => {
        setLength(length + 1)
        if (variant.result)
            setResult((prev) => [...prev, ...variant.result])
        if (variant.subQuestion) {
            questions.splice(questions.indexOf(question) + 1, 0, variant.subQuestion)
            console.log(questions)
        }


        console.log(questions.indexOf(question))
        const index = questions.indexOf(question)
        if (index < questions.length) {
            const next = questions[index + 1]
            setQuestion(next)
        } else
            setQuestion(undefined)


    }

    return (
        <InterviewContext.Provider value={{ question, onAnswer }}>
            {/* <Typography variant="h4">{data ? data.title : "Опрос не найден"}</Typography> */}
            <Grid container spacing={2} marginTop={4} marginBottom={4}>
                {show ?
                    <Grid item xs={isPhone ? 12 : 6}>
                        <Typography
                            sx={{
                                fontSize: "30px",
                                color: "#3f3f3f",
                                fontWeight: "800",
                                fontFamily: "Arial"
                            }}
                        >
                            ВОПРОСЫ:
                        </Typography>
                        {questions.filter((i, k) => k <= length).map((question, index) => (
                            <Question question={question} active={length === index} key={index} />
                        ))}
                    </Grid>
                    :
                    <Grid item xs={2}>
                        <Back
                            onClick={reload}
                        >
                            <Typography sx={{
                                writingMode: "tb",
                                transform: "rotateZ(180deg)",
                                fontSize: isPhone ? "20px" : "30px",
                                color: "#3f3f3f",
                                fontWeight: "800",
                                fontFamily: "Arial",
                                margin: "100px 0",
                                "&:hover": {
                                    borderColor: "#e91d2a"
                                }
                            }}>К  ВОПРОСАМ</Typography>
                            <img src={arrowIcon} />
                        </Back>
                    </Grid>
                }
                {(!show || !isPhone) &&
                    <Grid item xs={show ? 6 : 10} ref={ref} >

                        <Typography
                            sx={{
                                fontSize: "30px",
                                color: "#3f3f3f",
                                fontWeight: "800",
                                fontFamily: "Arial",
                                textTransform: "uppercase"
                            }}
                        >
                            ОТДЕЛКА <span style={{ color: "#e91d2a" }}>{data && data.title}</span>{"\n"}
                            ПЛАН ДЕЙСТВИЙ:
                        </Typography>
                        <Stack spacing={2} marginBottom={4}>
                            {result.map((item, index) => (
                                <Item key={index} elevation={8}>
                                    <div className="number">{index + 1}</div>
                                    <div className="text" dangerouslySetInnerHTML={{ __html: item }}></div>
                                </Item>
                            ))}
                        </Stack>
                        {questions.length === length &&
                            <>
                                <Typography sx={{
                                    fontSize: "30px",
                                    color: "#3f3f3f",
                                    fontWeight: "800",
                                    fontFamily: "Arial",
                                }}>ВАМ ПОТРЕБУЮТСЯ:</Typography>
                                <Grid container spacing={6} marginBottom={4}>
                                    {sallers.map(item => (
                                        <Grid item xs={isPhone ? 6 : 3} key={item.title}>
                                            <Product {...item} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </>}

                    </Grid>
                }
            </Grid>
            {questions.length === length &&
                <>

                    <div style={{ display: "flex", flexDirection: isPhone ? "column" : "row", alignItems: "center", justifyContent: "center", gap: "20px", margin: "20px 0" }}>
                        <div style={{ flex: "1", border: "solid 1px #c8c8c8" }} />
                        <Button icon={downloadIcon} onClick={getJpeg}>Скачать</Button>
                        <Button href="https://www.danogips.ru/gde_kupit.html" icon={mapIcon}>где купить ?</Button>
                        <div style={{ flex: "1", border: "solid 1px #c8c8c8" }} />
                    </div>
                    <Share />
                </>
            }

        </InterviewContext.Provider>
    )
}

export default Interview