import {createContext, useContext} from "react";

const InterviewContext = createContext({})

const useInterviewContext = () => useContext(InterviewContext);

export {useInterviewContext}
export default InterviewContext