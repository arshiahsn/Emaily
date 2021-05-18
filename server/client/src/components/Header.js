import React, {Component} from 'react';
import {useDispatch, useSelector} from 'react-redux';




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
                <a className="left brand-logo">
                Emaily
                </a>
                <ul className="right">
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
}