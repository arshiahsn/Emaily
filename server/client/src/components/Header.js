import React, {Component} from 'react';





export default function Header(){
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="left brand-logo">
                Emaily
                </a>
                <ul className="right">
                    <li>
                        <a>Login With Google</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}