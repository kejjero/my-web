import {Link} from "react-router-dom";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import logo from "../../images/logo.svg"
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import {arrayMenu} from "../../utils/utils";
import {useState} from "react";

function PanelList({isOpenBurger, setIsOpenBurger, setActiveIndexBurger}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#4B98F2',
            },
        },
    });

    const checkActive = (i) => {
        setActiveIndex(i)
    }

    // function closeBurger() {
    //     setIsOpenBurger(false)
    //     setActiveIndexBurger(null)
    // }

    return (
        <div className={`panel-list ${isOpenBurger && "panel-list__type_open"}`}>
            <div className="panel-list__background">
            <div className={`panel-list__block ${isOpenBurger && "panel-list__block_open"}`}>
                <div className="panel-list__wrapper">
                    <Link to="/">
                        <img className="panel-list__logo" src={logo} alt="logo"/>
                    </Link>
                    <nav className="panel-list__nav">
                        <ul>
                            {
                                arrayMenu.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className={`${activeIndex === index ? 'header__active' : ''}`}
                                            onClick={() => checkActive(index)}
                                        >
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <a
                            className="panel-list__button-resume"
                            href="https://career.habr.com/kejero"
                            target="_blank"
                        >
                            <ThemeProvider theme={theme}>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    startIcon={<ContactPageOutlinedIcon/>}
                                >
                                    резюме
                                </Button>
                            </ThemeProvider>
                        </a>
                    </nav>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PanelList;