import Question from "../Question";
import questions from "../../data/questions";
import {useState} from "react";
import InterviewContext from "../../context/InterviewContext";
import { Grid, Paper, Stack, styled} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const Interview = () => {
    const [question,setQuestion] = useState(questions[0])
    const [result,setResult] = useState([])
    const [prevIndex, setPrevIndex] = useState(0)

    const onAnswer = (variant) => {
        if (variant.result)
            setResult((prev) => [...prev, ...variant.result])
        if (variant.subQuestion) {
            questions.splice(questions.indexOf(question) + 1, 0, variant.subQuestion);
            console.log(questions)
        }


        console.log(questions.indexOf(question))
        const index = questions.indexOf(question)
        if (index < questions.length) {
            const next = questions[index + 1]
            setQuestion(next)
        } else
            setQuestion(undefined)


    };

    return (
        <InterviewContext.Provider value={{question, onAnswer}}>
            <Grid container spacing={2}>
                {question &&
                    <Grid item xs={8}>
                        <Question question={question}/>
                    </Grid>
                }
                <Grid item xs={4}>
                    <Stack spacing={2}>
                        {result.map((item, index) => (
                            <Item key={index} elevation={8}>{index + 1}. {item}</Item>
                        ))}

                    </Stack>
                </Grid>
            </Grid>
        </InterviewContext.Provider>
    );
};

export default Interview;