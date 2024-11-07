import React, { useContext, useRef, useState } from 'react';
import Container from '../Container';
import styles from './index.module.css';
import { ctx } from '../../store/quiz';
const Questions = ({ question, onchange }) => {
    const { isCorrect, selectedIndex, selectedQuestionId, submit, showCorrect } = useContext(ctx);
    const inp1 = useRef();
    const inp2 = useRef();
    const inp3 = useRef();
    const inp4 = useRef();
    return (
        <Container>
            <div className={styles.qCont}>
                <div className={styles.quest}>
                    <h2><span>{question.id})</span> {question.question}</h2>
                </div>
                <div className={styles.opt}>
                    <div>
                        <input ref={inp1} onChange={(e) => onchange(e, question.correctAnswer, inp1, 0, question.id)} type="radio" value="1" name={question.id} id="" />
                        <lable styles={showCorrect && isCorrect ? { color: "green" } : { color: "red" }}>{question.options[0]}</lable>
                    </div>
                    <div>
                        <input ref={inp2} onChange={(e) => onchange(e, question.correctAnswer, inp2, 1, question.id)} type="radio" value="2" name={question.id} id="" />
                        <lable >{question.options[1]}</lable>
                    </div>
                    <div>
                        <input ref={inp3} onChange={(e) => onchange(e, question.correctAnswer, inp3, 2, question.id)} type="radio" value="3" name={question.id} id="" />
                        <lable >{question.options[2]}</lable>
                    </div>
                    <div>
                        <input ref={inp4} onChange={(e) => onchange(e, question.correctAnswer, inp4, 3, question.id)} type="radio" value="4" name={question.id} id="" />
                        <lable>{question.options[3]}</lable>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Questions;