import React from "react";
// import Link from ReactRouter
import { Link } from "react-router-dom";
const Footer = ({ navLinks }) => (

    <ul className="d-flex mt-4">
        {navLinks.map(link => (
            <li className="list-group-item">
                { /* use Link instead of <a> */}
                <Link to={link.path}>{link.name}</Link>
            </li>
        ))}
    </ul>);

export default Footer;