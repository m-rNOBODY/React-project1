import React from "react"
// import ReactDom from "react-dom"
import logo from "../logo.svg"
import "../App.css"

export default function Navbar(){
    return (
        <nav className="nav">
            <img className="logo" src={logo} />
            <h3 className="nav-header">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}