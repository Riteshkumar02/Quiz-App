import React from 'react';
import "./Navcss.css";

export default function Nav() 
{
  return (
    <div>
 <div className="navbar">
        <img className="logo" alt="pic" src="https://t3.ftcdn.net/jpg/05/33/02/64/360_F_533026436_RdelY5mOOgkuRD7gga7MDbESWFqxNsVO.jpg" height="90" width="200" />
        <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">☰</label>
            <div className="menu">
                <li>Home</li>
                <li>About</li>
                <li className="services">
                    <p>Services</p>
                    <ul className="dropdown">
                        <li>Dropdown 1</li>
                        <li>Dropdown 2</li>
                        <li>Dropdown 3</li>
                        <li>Dropdown 4</li>
                        <li>Dropdown 5</li>
                    </ul>
                </li>
                <li>Contact</li>
            </div>
        </ul>
    </div>
    </div>
  )
}
