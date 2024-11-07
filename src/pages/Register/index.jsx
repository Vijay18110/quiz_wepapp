import React, { useRef, useState } from 'react'
import Container from '../../componets/Container';
import { useForm } from 'react-hook-form';
import styles from './index.module.css';
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const Navigate = useNavigate();
    const pass = useRef(null);
    const { handleSubmit, reset, register, onSubmit, formState: { errors } } = useForm();
    const [click, setClick] = useState(false)
    const [inputType, setinputType] = useState('password');
    const onclick = () => {
        setClick(!click);
        setinputType((pre) => pre === "password" ? "text" : "password");
    }
    const getData = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        Navigate('/login');
    }
    return (
        <Container>
            <div className={styles.formCont}>
                <form onSubmit={handleSubmit((data) => { getData(data) })}>
                    <h1>Registration form</h1>
                    <div className={styles.inputController}>
                        <input {...register("name", { required: true })} placeholder='Name' />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className={styles.inputController}>
                        <input type='email' {...register("email", { required: true })} placeholder='Email' />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className={styles.inputController}>
                        <input {...register("Country", { required: true })} placeholder='Country' />
                        {errors.Country && <span>This field is required</span>}

                    </div>
                    <div className={styles.inputController}>
                        <input {...register("phone", { required: true })} placeholder='Phone' />
                        {errors.phone && <span>This field is required</span>}
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
                        <input type="submit" value="CREATE ACCOUNT" />
                    </div>
                    <p>
                        Already have an account! login
                    </p>

                </form>
            </div>
        </Container>
    )
}
export default Register;