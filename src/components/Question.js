import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material"
import { useInterviewContext } from "../context/InterviewContext"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"

const QuestionLabel = styled(FormLabel)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "#000000",
    "&.Mui-focused": {
        color: "#000000",
    }
}))

const Control = styled(FormControlLabel)(({ theme }) => ({

    ">.MuiFormControlLabel-label": {
        fontSize: "14px",
        fontFamily: "Arial",
        color: "#000000"
    },
    ">.Mui-checked + .MuiFormControlLabel-label": {
        color: "#e91d2a",
        fontWeight: "bold",
    }
}))

const Question = (props) => {
    const { question, active } = props
    const { onAnswer } = useInterviewContext()
    const [value, setValue] = useState(null)

    const handler = (event) => {
        setValue(event.target.value)
        setTimeout(() =>
            onAnswer(question.variants[event.target.value])
            , 500)
    }

    useEffect(() => {
        setValue(null)
    }, [question])

    return (
        <FormControl sx={{ display: "block" }}>
            <QuestionLabel id="demo-row-radio-buttons-group-label">{question.label}</QuestionLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handler}
            >
                {question.variants.map((variant, index) => (
                    <Control
                        key={variant.label}
                        value={index}
                        control={<Radio sx={{
                            color: "#000000",
                            '&.Mui-checked': {
                                color: "#e91d2a",
                            },
                        }} />}
                        disabled={!active}
                        label={variant.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default Question