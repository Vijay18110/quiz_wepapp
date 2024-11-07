import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Public = ({ element }) => {
    const navigate = useNavigate();
    useEffect(() => {
    }, [])
    return (<>
        <div>{element}</div>
    </>
    )
}
export default Public