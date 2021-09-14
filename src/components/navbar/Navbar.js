import React from 'react'
import {navIcon} from "../../datastorage/navData"
import { Link } from "react-router-dom";
import SectionStyle from './style_nav';


export default function Navbar() {
    return (
        <SectionStyle className="sidebar">
          <div className="content">

        <header className="styleLogo">
          <img src="https://daofind.com/images/dao-logo.svg" alt="daofind-official-logo" />
        </header>

        <div className="NavLayout">
          <ul className="navbar">
            {navIcon.map(({logo,title },index)=>{
              return (
                <li key={index}>
            <Link to={`/${title}`}><span style={{margin:"0.5em"}}>{logo}</span> {title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        </div>
      </SectionStyle>
    )
}
