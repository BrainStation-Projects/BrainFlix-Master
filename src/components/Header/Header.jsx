import './Header.scss';
import logo from '../../assets/logo/BrainFlix-logo.svg';
import upload from "../../assets/icons/upload.svg";


function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="BrainFlix logo" className="header__logo-img"></img>
            </div>
            <div className='header__middle'>
                <input type="text" className="header__search" placeholder='Search'></input>
                <div className="header__profile header__profile--mobile"></div>
            </div>
            <button className="button header__btn">
                <img src={upload} alt="upload icon" className='button__icon'></img>
                <span className="button__text">UPLOAD</span>
            </button>
            <div className="header__profile header__profile--tablet"></div>
        </header>
    );
}

export default Header;