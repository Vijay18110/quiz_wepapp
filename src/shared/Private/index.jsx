import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Private = ({ element }) => {
    const navigate = useNavigate();
    useEffect(() => {

        // if (!localStorage.getItem('token')) {
        //     navigate('/register');
        // }
    }, [])
    return (
        <div>{element}</div>
    )
}

export default Private;