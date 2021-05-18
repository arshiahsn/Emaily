import React, {Component} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';



export default function Header(){
    const auth = useSelector(state => state.auth);


    function renderContent() {
        switch (auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link 
                to={auth ? '/surveys' : '/' } 
                lassName="left brand-logo"
                >
                Emaily
                </Link>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}