import logo from '../images/logo.svg'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="logo"/>
            </Link>
            <nav className="header__nav">
                <ul>
                    <li><Link to="/about">Обо мне</Link></li>
                    <li><Link to="/portfolio">Портфолио</Link></li>
                    <li><Link to="/service">Услуги</Link></li>
                    <li><Link to="/blog">Блог</Link></li>
                </ul>
                <a href="https://career.habr.com/kejero" target="_blank">
                    <Button variant="outlined">
                        резюме
                    </Button>
                </a>
            </nav>
        </header>
    )
}

export default Header;