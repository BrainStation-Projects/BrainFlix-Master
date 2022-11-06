import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import upload from "../../assets/icons/upload.svg";


function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="BrainFlix logo" className="header__logo-img"></img>
            </div>
