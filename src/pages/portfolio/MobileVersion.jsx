import {Chip} from "@mui/material";
import work1 from "../../images/work-mars.png"
import work2 from '../../images/nedelka.jpeg'
import work3 from '../../images/mesto.jpeg'
import typescript from "../../images/skills/typescript.svg"
import react from "../../images/skills/react.svg"
import redux from "../../images/skills/redux.svg"
import javascript from '../../images/skills/javascript.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import reactRouter from '../../images/skills/react-router.svg'
import scss from '../../images/skills/sass.svg'
import sc from '../../images/skills/sc.png'
import css from '../../images/skills/css.svg'
import webpack from '../../images/skills/webpack.svg'
import mongodb from '../../images/skills/mongodb.svg'
import nodejs from '../../images/skills/nodejs.svg'
import express from '../../images/skills/express.svg'
import axios from "../../images/skills/axios.svg";
import materialUi from "../../images/skills/material-ui.svg";


function MobilePortfolio() {
    return(
        <ul className="portfolio__works">
            <li className="portfolio__work">
                <h2 className="portfolio__title">Марсик</h2>
                <div className="portfolio__preview">
                    <img className="portfolio__image" src={work1} alt="mars"/>
                </div>
                <div className="portfolio__info">
                    <p className="portfolio__description">
                        Сервис доставки Марсианской еды. Проект разработан в связке React.js / Redux / TypeScript.
                        Пользователь добавляет в корзину понравившиеся блюда из меню с последующим оформлением
                        заказа.
                    </p>
                    <div className="portfolio__stack">
                        <ul className="portfolio__skills">
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={typescript} alt="typescript"/>
                                <h4 className="portfolio__skill-name">TypeScript</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={react} alt="react"/>
                                <h4 className="portfolio__skill-name">React</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={redux} alt="redux"/>
                                <h4 className="portfolio__skill-name">Redux Toolkit</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={reactRouter} alt="redux"/>
                                <h4 className="portfolio__skill-name">React Router</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={materialUi} alt="material-ui"/>
                                <h4 className="portfolio__skill-name">Material UI</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={axios} alt="axios"/>
                                <h4 className="portfolio__skill-name">Axios</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={scss} alt="scss"/>
                                <h4 className="portfolio__skill-name">SCSS</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={sc} alt="scss"/>
                                <h4 className="portfolio__skill-name">Styled components</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__links">
                        <a className="portfolio__link" href="https://github.com/kejjero/mars-food" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="GitHub"
                                icon={<GitHubIcon/>}
                                variant="outlined"
                                color="primary"
                                size="medium"
                            />
                        </a>
                        <a className="portfolio__link" href="https://kejjero.github.io/mars-food/" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="Demo"
                                icon={<LinkIcon/>}
                                variant="outlined"
                                color="success"
                                size="medium"
                            />
                        </a>
                    </div>
                </div>
            </li>
            <li className="portfolio__work">
                <h2 className="portfolio__title">Mesto</h2>
                <div className="portfolio__preview">
                    <img className="portfolio__image" src={work3} alt="mesto"/>
                </div>
                <div className="portfolio__info">
                    <p className="portfolio__description">
                        Прототип социальной сети. Фуллстек проект,
                        изначально написан на чистом js с
                        использованием функциональных и классовых компонентов.
                        В последующем перенесен на React. Добавлено взаимодействие
                        с собственным API а также регистрация и авторизация пользователя
                        через JWT токен.
                    </p>
                    <div className="portfolio__stack">
                        <ul className="portfolio__skills">
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={javascript} alt="javascript"/>
                                <h4 className="portfolio__skill-name">JavaScript</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={react} alt="react"/>
                                <h4 className="portfolio__skill-name">React</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={reactRouter} alt="redux"/>
                                <h4 className="portfolio__skill-name">React Router</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={axios} alt="axios"/>
                                <h4 className="portfolio__skill-name">Axios</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={css} alt="scss"/>
                                <h4 className="portfolio__skill-name">CSS</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={webpack} alt="scss"/>
                                <h4 className="portfolio__skill-name">WebPack</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={mongodb} alt="scss"/>
                                <h4 className="portfolio__skill-name">MongoDB</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={nodejs} alt="scss"/>
                                <h4 className="portfolio__skill-name">NodeJS</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={express} alt="scss"/>
                                <h4 className="portfolio__skill-name">Express</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__links">
                        <a className="portfolio__link" href="https://github.com/kejjero/mars-food" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="GitHub"
                                icon={<GitHubIcon/>}
                                variant="outlined"
                                color="primary"
                                size="medium"
                            />
                        </a>
                        <a className="portfolio__link" href="https://kejjero.github.io/mars-food/" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="Demo"
                                icon={<LinkIcon/>}
                                variant="outlined"
                                color="success"
                                size="medium"
                            />
                        </a>
                    </div>
                </div>
            </li>
            <li className="portfolio__work">
                <h2 className="portfolio__title">Неделька</h2>
                <div className="portfolio__preview">
                    <img className="portfolio__image" src={work2} alt="nedelka"/>
                </div>
                <div className="portfolio__info">
                    <p className="portfolio__description">
                        Прогноз погоды на неделю. В основу функционала заложено получение данных прогноза погоды
                        через API One Call по Иркутской области.
                    </p>
                    <div className="portfolio__stack">
                        <ul className="portfolio__skills">
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={typescript} alt="typescript"/>
                                <h4 className="portfolio__skill-name">TypeScript</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={react} alt="react"/>
                                <h4 className="portfolio__skill-name">React</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={reactRouter} alt="redux"/>
                                <h4 className="portfolio__skill-name">React Router</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={axios} alt="axios"/>
                                <h4 className="portfolio__skill-name">Axios</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={scss} alt="scss"/>
                                <h4 className="portfolio__skill-name">SCSS</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={materialUi} alt="material-ui"/>
                                <h4 className="portfolio__skill-name">Material UI</h4>
                            </li>
                            <li className="portfolio__skill">
                                <img className="portfolio__skill-image" src={sc} alt="scss"/>
                                <h4 className="portfolio__skill-name">Styled components</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="portfolio__links">
                        <a className="portfolio__link" href="https://github.com/kejjero/mars-food" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="GitHub"
                                icon={<GitHubIcon/>}
                                variant="outlined"
                                color="primary"
                                size="medium"
                            />
                        </a>
                        <a className="portfolio__link" href="https://kejjero.github.io/mars-food/" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="Demo"
                                icon={<LinkIcon/>}
                                variant="outlined"
                                color="success"
                                size="medium"
                            />
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default MobilePortfolio;