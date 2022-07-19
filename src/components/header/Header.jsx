import logo from '../../images/logo.svg'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import HeaderBar from "./HeaderBar"
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

function Header({isOpenBurger, setIsOpenBurger}) {
    const [onBurgerMenu, setOnBurgerMenu] = useState(false);
    useEffect(() => {
        if (window.screen.width < 920) {
            setOnBurgerMenu(true)
        }
    }, [])


    return (
        onBurgerMenu ?
            <HeaderBar
                isOpenBurger={isOpenBurger}
                setIsOpenBurger={setIsOpenBurger}
            /> :
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
                        <Button
                            variant="outlined"
                            size="medium"
                            startIcon={<ContactPageOutlinedIcon />}
                        >
                            резюме
                        </Button>
                    </a>
                </nav>
            </header>
    )
}

export default Header;