import {Link} from "react-router-dom";
import {Button} from "@mui/material";

function PanelList({isOpenBurger}) {
    return(
        <div className={`panel-list ${isOpenBurger && "panel-list__type_open"}`}>
            <div className={`panel-list__block ${isOpenBurger && "panel-list__block_open"}`}>
                <div className="panel-list__wrapper">
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
                            <Button
                                variant="outlined"
                                size={"medium"}
                            >
                                резюме
                            </Button>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default PanelList;