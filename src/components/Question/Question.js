import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useInterviewContext} from "../../context/InterviewContext";
import {useEffect, useState} from "react";

const Question = (props) => {
    const {question} = props;
    const {onAnswer} = useInterviewContext()
    const [value,setValue] = useState(null)

    const handler = (event) => {
        setValue(event.target.value)
        setTimeout(() =>
                onAnswer(question.variants[event.target.value])
            , 500);
    };

    useEffect(()=> {
        setValue(null);
    },[question])

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{question.label}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={value}
                onChange={handler}
            >
                {question.variants.map((variant,index) => (
                    <FormControlLabel
                        key={variant.label}
                        value={index}
                        control={<Radio/>}
                        label={variant.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default Question;