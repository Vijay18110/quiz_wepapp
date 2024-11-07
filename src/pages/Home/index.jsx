import React, { useContext, useEffect, } from 'react'
import Container from '../../componets/Container';
import styles from './index.module.css';
import Questions from '../../componets/Questions';
import { questions } from '../../data/qdata';
import { ctx } from '../../store/quiz';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const { onsubmit, submit, onSeeAns, onchange, correctAns, question, loadQuestion, showCorrectAns } = useContext(ctx);
    useEffect(() => {
        localStorage.setItem("questions", JSON.stringify(questions));
        loadQuestion();
        if (!localStorage.getItem('token')) {
            navigate('/register');
        }
    }, []);
    return (
        <Container>
            <div className={styles.cont}>
                <div>
                    <span>Javascript</span>
                    <span>Interview MCQ's</span>
                </div>
            </div>
            {
                !submit ? question.map(q => {
                    return (
                        <Questions submit={submit} onchange={onchange} key={q.id} question={q} />
                    )
                })
                    :
                    <div className={styles.cont1}> <div> {correctAns}/ {question.length} </div></div>
            }
            <div className={styles.btnCont}>
                <div className={styles.cont}>
                    {!submit ? <button onClick={onsubmit} className={styles.btn}>submit</button> :
                        <button onClick={onSeeAns} className={styles.btn}>back</button>
                    }
                </div>
                {
                    !submit && <div onClick={showCorrectAns} className={styles.cont}>
                        <button className={styles.btn}>
                            correct ans
                        </button>
                    </div>
                }
            </div>
        </Container >
    )
}
export default Home;