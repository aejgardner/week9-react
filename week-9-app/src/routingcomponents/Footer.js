import React from "react";
// import Link from ReactRouter
import { Link } from "react-router-dom";
const Footer = () => (
    <ul className="d-flex mt-4">
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/">Home</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/length">Length</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/passwordstrength">Password Strength</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/tempconverter">Temperature Converter</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/rollcall">Roll Call</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/people">People</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/list">List</Link>
        </li>
        <li className="list-group-item">
            { /* use Link instead of <a> */}
            <Link to="/adder">Adder</Link>
        </li>
    </ul>);

export default Footer;

