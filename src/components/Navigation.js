import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from 'antd'

const navLinks = [
    {
        title: 'Home',
        path: '/Home'
    },
    {
        title: 'Listing',
        path: '/Listing'
    },
    {
        title: 'Table',
        path: '/table'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation() {

    const [menuActive, setmenuActive] = useState(false)

    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">HouseFinder</span>
            <div className={`menu-content-container  ${menuActive && 'active'} `}>
                <ul>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <span className="menu-avatar-container">
                {/**
                     * <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={36}/>
                */}
                
                    <Avatar style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                    }} size={40}> HOMIE-11</Avatar>
                </span>
                
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={()=>setmenuActive(!menuActive)}/>
        </nav>
    )
}
