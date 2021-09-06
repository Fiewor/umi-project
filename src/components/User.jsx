import React from 'react'
import {Link} from "react-router-dom"

const UserPage = () => {
    return (
        <Link to="/user">
            <div className="card">
            <p className="name">Leanne Graham</p>
            <p className="email">Sincere@april.biz</p>
            </div>
        </Link>
    )
}

export default UserPage
