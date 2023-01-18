import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({ loginData, setLoginData }) {
    const handleLogout = () => {
        setLoginData({
            id: null,
            username: null,
        })
        localStorage.removeItem("token")
    }

    return (
        <div className='nav-cont'>
            <h1>FlatPass</h1>
            {loginData.username && <h2 style={{ "alignSelf": "center" }}>Welcome, {loginData.username}</h2>}
            <div className="btn-group">
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="src/assets/avatardefault_92824.png" />
                </button>
                {loginData.username && <ul className="dropdown-menu">
                    <Link to={"/home"}>
                        <li className="dropdown-item">Home</li>
                    </Link>
                    <Link to={"/"}>
                        <li className="dropdown-item" onClick={handleLogout}>Logout</li>
                    </Link>
                </ul>}
            </div>
        </div>
    )
}

export default NavBar 