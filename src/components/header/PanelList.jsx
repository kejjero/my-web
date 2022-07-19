import {Link} from "react-router-dom";
import {Button, createTheme, ThemeProvider} from "@mui/material";
import logo from "../../images/logo.svg"
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

function PanelList({isOpenBurger}) {

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

    return (
        <div className={`panel-list ${isOpenBurger && "panel-list__type_open"}`}>
            <div className={`panel-list__block ${isOpenBurger && "panel-list__block_open"}`}>
                <div className="panel-list__wrapper">
                    <Link to="/">
                        <img className="panel-list__logo" src={logo} alt="logo"/>
                    </Link>
                    <nav className="panel-list__nav">
                        <ul>
                            <li><Link to="/about">Обо мне</Link></li>
                            <li><Link to="/portfolio">Портфолио</Link></li>
                            <li><Link to="/service">Услуги</Link></li>
                            <li><Link to="/blog">Блог</Link></li>
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
                                    startIcon={<ContactPageOutlinedIcon />}
                                >
                                    резюме
                                </Button>
                            </ThemeProvider>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PanelList;