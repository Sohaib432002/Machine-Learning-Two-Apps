import { useState } from "react";
import { Link } from "react-router-dom"

const header = () => {
    const [clicked, setclicked] = useState(false)
    const [showinfo, setshowinfo] = useState(false)
    return (
        
        <div className='header' >
            <div className="img_logo">
                <img src="/images/logo_img.png" style={{width:70}} alt="error" />
            </div>
            <div className="nav">
                <div className="navlist">
                    <ul>
                        <li className='nav_option'><a href="home">Home</a></li>
                        <li className='nav_option'><a href="app">Predict</a></li>
                        <li className='nav_option'><a href="about">About Apps</a></li>
                        <li className='nav_option'><a href="contact">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="box" onClick={() => {
                setclicked(!clicked)
            }
            }>
                <span className="1"
                    style={{ display: clicked ? 'none' : "block" }}
                ></span>
                <span className="2"
                    style={{
                        transform: clicked ? 'rotate(60deg)' : 'rotate(0deg)',
                        transition: 'transform 0.5s ease-in-out',
                        position: clicked ? 'absolute' : ''
                    }}>
                </span>
                <span className="3"
                    style={{
                        transform: clicked ? 'rotate(124deg)' : 'rotate(0deg)',
                        transition: 'transform 0.5s ease-in-out',

                    }}
                ></span>
            </div>
            <div className="nav-mobile"
            >
                <div className="navlist-mobile"
                    style={{
                        opacity: clicked ? 1 : 0,
                        transform: clicked ? 'translateX(0px)' : 'translateX(100px)',
                        transition: 'all 0.3s ease-in-out',
                        visibility: clicked ? 'visible' : 'hidden', // hide without removing from layout
                        pointerEvents: clicked ? 'auto' : 'none'
                    }}>
                    <ul>
                        <li className='nav_option'><Link to="/home">Home</Link></li>
                        <li className='nav_option'><Link to="/app">Predict</Link></li>
                        <li className='nav_option'><Link to="about">About</Link></li>
                        <li className='nav_option'><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default header;