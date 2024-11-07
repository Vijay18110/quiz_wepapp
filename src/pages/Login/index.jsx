import React, { useRef, useState } from 'react'
import Container from '../../componets/Container';
import { useForm } from 'react-hook-form';
import styles from './index.module.css';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const Navigate = useNavigate();
    const pass = useRef(null);
    const { handleSubmit, reset, register, onSubmit, formState: { errors } } = useForm();
    const [click, setClick] = useState(false)
    const [inputType, setinputType] = useState('password');
    const onclick = () => {
        setClick(!click);
        setinputType((pre) => pre === "password" ? "text" : "password");
    }
    const login = (data) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.email === data.email && user.password === data.password) {
            localStorage.setItem("token", data.email);
            Navigate('/')
        } else {
            alert("please enter valid email or password");
        }
    }
    return (
        <Container>
            <div className={styles.formCont}>
                <form onSubmit={handleSubmit((data) => { login(data) })}>
                    <h1>Login form</h1>
                    <div className={styles.inputController}>
                        <input type='email' {...register("email", { required: true })} placeholder='Email' />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={styles.inputController}>
                        <input id="pass" type={inputType} {...register("password", { required: true })} placeholder='Password' />
                        <p className={styles.eye} onClick={onclick}>
                            {!click ? <IoIosEyeOff size={30} /> : <IoMdEye size={30} />}
                        </p>
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className={styles.checkbox}>
                        <input type="checkbox"  {...register("check", { required: true })} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.   consequatur expedita. Accusamus enim vitae deleniti!</p>
                    </div>

                    <div className={styles.inputController}>
                        <input type="submit" value="Login" />
                    </div>
                    <p>
                        Don't Have An Account! Register
                    </p>

                </form>
            </div>
        </Container>
    )
}
export default Login;