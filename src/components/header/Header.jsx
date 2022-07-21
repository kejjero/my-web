import logo from '../../images/logo.svg'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import HeaderBar from "./HeaderBar"
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import {arrayMenu} from "../../utils/utils";

function Header({isOpenBurger, setIsOpenBurger}) {
    const [activeIndexBurger, setActiveIndexBurger] = useState(null);

    const [onBurgerMenu, setOnBurgerMenu] = useState(false);

    useEffect(() => {
        if (window.screen.width < 920) {
            setOnBurgerMenu(true)
        }
    }, [])

    const checkActive = (i) => {
        setActiveIndexBurger(i)
    }

    return (
        onBurgerMenu ?
            <HeaderBar
                isOpenBurger={isOpenBurger}
                setIsOpenBurger={setIsOpenBurger}
            /> :
            <header className="header">
                <Link to='/'>
                    <img onClick={() => setActiveIndexBurger(null)} src={logo} alt="logo"/>
                </Link>
                <nav className="header__nav">
                    <ul>
                        {
                            arrayMenu.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${activeIndexBurger === index ? 'header__active' : ''}`}
                                        onClick={() => checkActive(index)}
                                    >
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <a href="https://career.habr.com/kejero" target="_blank">
                        <Button
                            variant="outlined"
                            size="medium"
                            startIcon={<ContactPageOutlinedIcon/>}
                        >
                            резюме
                        </Button>
                    </a>
                </nav>
            </header>
    )
}

export default Header;