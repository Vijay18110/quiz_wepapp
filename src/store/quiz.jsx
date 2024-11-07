import { createContext, useEffect, useReducer } from "react";
export const ctx = createContext({
    onsubmit: () => { },
    onSeeAns: () => { },
    correctAns: 0,
    onchange: () => { },
    selected: false,
    selectedIndex: "",
    selectedQuestionId: 0,
    questions: [],
    showCorrect: false,
});
const ContextProvider = ({ children }) => {
    const reducer = (state, action) => {
        if (action.type === "SUBMIT") {
            return (
                {
                    ...state, submit: !state.submit
                }
            );
        }
        if (action.type === "SHOW_CORRECT_ANS") {
            return (
                {
                    ...state, showCorrect: true,
                }
            );
        }
        if (action.type === "ICR") {
            var obj;
            var remainingOBJ;
            if (action.payload.c == action.payload.e.target.value) {
                return (
                    obj = state.questions.filter((q) => q.correctAnswer == action.payload.e.target.value && action.payload.id === q.id),
                    remainingOBJ = state.questions.filter((q) => action.payload.id !== q.id),
                    obj[0].selectedCorrect = true,
                    localStorage.setItem("questions", JSON.stringify([...obj, ...remainingOBJ])),
                    { ...state, correctAns: state.correctAns + 1, isCorrect: true, selectedIndex: action.payload.index, selectedQuestionId: action.payload.id }
                )
            }
            else {
                return { ...state }
            }
        }
        if (action.type === "LOAD") {
            return { ...state, questions: JSON.parse(localStorage.getItem('questions')) }
        }
    }
    const onsubmit = () => {
        dispatch({ type: "SUBMIT" });
    }
    const onSeeAns = () => {
        dispatch({ type: "SUBMIT" });
    }
    const onchange = (e, c, r, index, id) => {
        dispatch({
            type: "ICR",
            payload: {
                e, c, r, index, id
            }
        });
    }
    const loadQuestion = () => {
        dispatch({
            type: "LOAD"
        });
    }
    const showCorrectAns = () => {
        dispatch({
            type: "SHOW_CORRECT_ANS"
        })

    }
    const [state, dispatch] = useReducer(reducer, { submit: false, correctAns: 0, isCorrect: false, selectedIndex: "", selectedQuestionId: "", questions: [], showCorrect: false });
    const value = {
        onsubmit: onsubmit,
        submit: state.submit,
        onSeeAns: onSeeAns,
        correctAns: state.correctAns,
        onchange: onchange,
        isCorrect: state.isCorrect,
        selectedIndex: state.selectedIndex,
        selectedQuestionId: state.selectedQuestionId,
        question: state.questions,
        loadQuestion: loadQuestion,
        showCorrectAns: showCorrectAns,
        showCorrect: state.showCorrect,
    }
    return <ctx.Provider value={value}>{children}</ctx.Provider>
}
export default ContextProvider;