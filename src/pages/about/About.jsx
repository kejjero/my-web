import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import slideArt from '../../images/about-1.svg'
import slideVector from '../../images/about-2.svg'
import slideUi from '../../images/about-3.svg'
import welcomeImage from '../../images/welcome.svg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import stats1 from '../../images/stats/stats1.svg'
import stats2 from '../../images/stats/stats2.svg'
import stats3 from '../../images/stats/stats3.svg'
import exp from '../../images/exp.svg'
import javascript from "../../images/skills/javascript.svg";
import react from "../../images/skills/react.svg";
import reactRouter from "../../images/skills/react-router.svg";
import css from "../../images/skills/css.svg";
import webpack from "../../images/skills/webpack.svg";
import mongodb from "../../images/skills/mongodb.svg";
import nodejs from "../../images/skills/nodejs.svg";
import express from "../../images/skills/express.svg";
import typescript from "../../images/skills/typescript.svg";
import redux from "../../images/skills/redux.svg";
import scss from "../../images/skills/sass.svg";
import sc from "../../images/skills/sc.png";
import html from "../../images/skills/html.svg";
import art1 from "../../images/arts/art_1.jpg";
import art2 from "../../images/arts/art_2.jpg";
import art3 from "../../images/arts/art_3.jpg";
import art4 from "../../images/arts/art_4.jpg";
import art5 from "../../images/arts/art_5.jpg";
import {useEffect, useState} from "react";
import {Chip} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import illustration from '../../images/arts/illustration.svg'
import slideArtMobile from '../../images/about/about-1_mobile.svg'
import slideVectorMobile from '../../images/about/about-2_mobile.svg'
import slideUiMobile from '../../images/about/about-3_mobile.svg'

function About() {
    const [scroll, setScroll] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const checkScrollPosition = () => {
        setScroll(window.scrollY)
    };

    const items = [
        {image: slideArt, title: 'Развиваю себя как цифрового художника'},
        {image: slideUi, title: 'Практикуюсь в создании UX/UI дизайна'},
        {image: slideVector, title: 'Создаю векторные иллюстрации'},
    ]

    const itemsMobile = [
        {image: slideArtMobile, title: 'Развиваю себя как цифрового художника'},
        {image: slideUiMobile, title: 'Практикуюсь в создании UX/UI дизайна'},
        {image: slideVectorMobile, title: 'Создаю векторные иллюстрации'},
    ]

    const arts = [
        {image: art1},
        {image: art2},
        {image: art3},
        {image: art4},
        {image: art5},
    ]

    const slidesArts = arts.map((item, index) => {
        return (
            <SwiperSlide key={index}
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'center'
                         }}>
                <img className="arts__img" src={item.image} alt={item.title}/>
            </SwiperSlide>
        )
    })

    const slides = items.map((item, index) => {
        return (
            <SwiperSlide key={index}
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'center'
                         }}>
                <h3 className="slider__title">{item.title}</h3>
                <img className="slider__image" src={item.image} alt={item.title}/>
            </SwiperSlide>
        )
    })

    const slidesMobile = itemsMobile.map((item, index) => {
        return (
            <SwiperSlide key={index}
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'center'
                         }}>
                <h3 className="slider__title">{item.title}</h3>
                <img className="slider__image" src={item.image} alt={item.title}/>
            </SwiperSlide>
        )
    })

    useEffect(() => {
        window.addEventListener("scroll", checkScrollPosition)
        return () => window.removeEventListener("scroll", checkScrollPosition)
    }, [])


    return (
        <div className="about">
            <section className="welcome">
                <div className="welcome__text-wrapper">
                    <h2>Привет, друг!</h2>
                    <em className="subtitle">Я креативный веб-разработчик <br/> из Сибири 🎨
                    </em>
                    <div className="welcome__p-wrapper">
                        <p className="paragraph">
                            Создаю пользовательские веб-интерфейсы с использованием
                            <span style={{color: '#F1DC50'}}> JavaScript</span>,
                            <span style={{color: '#0096ff'}}> TypeScript</span>,
                            <span style={{color: '#00D8FF'}}> React</span> и
                            <span style={{color: '#764ABC'}}> Redux</span>.
                        </p>
                    </div>
                    {
                        window.screen.width > 780
                        &&
                        <button
                            className={`welcome__button ${scroll > 150 ? '' : "welcome__button_open"}`}
                            type="button"
                        >
                            <a href="#info">
                                <svg width="27" height="45" viewBox="0 0 27 45" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="0.5" width="26" height="44" rx="13" stroke="#D9D9D9"/>
                                    <circle cx="13.5" cy="9.5" r="4.5" fill="#D9D9D9" className="welcome__circle"/>
                                </svg>
                            </a>
                        </button>
                    }
                </div>
                <img className="welcome__image" src={welcomeImage} alt=""/>
            </section>
            <section className="info" id="info">
                <div className="info__wrapper">
                    <div className="info__box-image">
                        <img className="info__image x1"
                             src="https://avon-061.ru/wp-content/uploads/c/e/c/cec1118855cc6bd3762ec2fce1c8bfdf.jpg"
                             alt=""/>
                        <img className="info__image x2"
                             src="https://www.1000ideas.ru/upload/coworking.jpeg" alt=""/>
                        <img className="info__image x3"
                             src="https://kakexpert.ru/wp-content/uploads/2018/12/rabota-plansheta-e1545928283748.jpg"
                             alt=""/>
                        <img className="info__image x4"
                             src="https://img.freepik.com/free-photo/handsome-hipster-stylish-bearded-man-in-jacket-and-sunglasses-walking-alone-in-street-with-backpack-on-bicycle-healthy-active-lifestyle-traveler-backpacker_285396-5501.jpg?size=626&ext=jpg"
                             alt=""/>
                    </div>
                    <div className="info__box-text">
                        <h3 className="title"><span className="cube"></span>Моя история</h3>
                        <p className="paragraph">
                            Свой путь начал с того, что в качестве хобби занимался рисованием в растровой и векторной
                            графике, а еще немного ковырялся с кодом.
                        </p>
                        <p className="paragraph">
                            Проработав несколько лет юристом, а после и аналитиком, мое хобби переросло в работу. Я
                            зарекомендовал себя иллюстратором / web-администратором.
                        </p>
                        <p className="paragraph">
                            Нащупав нужное направление, я приступил к изучению Python / Django. Однако быстро осознал,
                            что больше ориентирован на создание "оболочки продукта", нежели на то, что происходит "под
                            капотом".
                        </p>
                        <p className="paragraph">
                            Все это привело меня к пользовательским интерфейсам, от создания которых, я получаю искренне
                            удовольствие!
                        </p>
                    </div>
                </div>
            </section>
            <section className="skills">
                <div className="skills__wrapper">
                    <div className="skills__exp">
                        <h3 className="title skills__title"><span className="cube"></span>Опыт проектной разработки</h3>
                        <img src={exp} alt="exp"/>
                    </div>
                    <div className="skills__position">
                        <div className="skills__hard-skills">
                            <h3 className="title"><span className="cube"></span>Языки и технологии</h3>
                            <ul className="portfolio__skills">
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={javascript} alt="javascript"/>
                                    <h4 className="portfolio__skill-name">JavaScript</h4>
                                </li>
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
                                    <img className="portfolio__skill-image" src={webpack} alt="webpack"/>
                                    <h4 className="portfolio__skill-name">WebPack</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={html} alt="html"/>
                                    <h4 className="portfolio__skill-name">HTML</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={css} alt="css"/>
                                    <h4 className="portfolio__skill-name">CSS</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={scss} alt="scss"/>
                                    <h4 className="portfolio__skill-name">SCSS</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={sc} alt="scss"/>
                                    <h4 className="portfolio__skill-name">Styled components</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={nodejs} alt="nodejs"/>
                                    <h4 className="portfolio__skill-name">Node.js</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={express} alt="express"/>
                                    <h4 className="portfolio__skill-name">Express</h4>
                                </li>
                                <li className="portfolio__skill">
                                    <img className="portfolio__skill-image" src={mongodb} alt="mongodb"/>
                                    <h4 className="portfolio__skill-name">mongoDB</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="skills__dashboard">
                            <h3 className="title"><span className="cube"></span>Наиболее часто используемые языки</h3>
                            <article className="dashboard">
                                <div className="dashboard__wrapper">
                                    <ul className="dashboard__line">
                                        <li className="dashboard__line-js"></li>
                                        <li className="dashboard__line-ts"></li>
                                        <li className="dashboard__line-css"></li>
                                        <li className="dashboard__line-scss"></li>
                                        <li className="dashboard__line-html"></li>
                                    </ul>
                                    <ul className="dashboard__legend">
                                        <li className="dashboard__legend-item dashboard__type_js">JavaScript</li>
                                        <li className="dashboard__legend-item dashboard__type_ts">TypeScript</li>
                                        <li className="dashboard__legend-item dashboard__type_css">CSS</li>
                                        <li className="dashboard__legend-item dashboard__type_scss">SCSS</li>
                                        <li className="dashboard__legend-item dashboard__type_html">HTML</li>
                                    </ul>

                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slider">
                <h3 className="title slider__name"><span className="cube">
                </span>А еще я...</h3>
                <div className="slider__main-box">
                    <div className="slider__wrapper">
                        <Swiper
                            id="swiper"
                            modules={[Navigation, Pagination, Autoplay]}
                            autoplay={true}
                            loop={true}
                            spaceBetween={500}
                        >
                            {
                                window.screen.width > 1180 ? slides : slidesMobile
                            }
                        </Swiper>
                        <span>
                    </span>
                    </div>
                </div>
            </section>
            <section className="stats">
                <div className="stats__text-box">
                    <h3 className="title"><span className="cube"></span>Маленькие достижения</h3>
                    <p className="paragraph">
                        За 2021-2022гг. я в достаточной мере спрогрессировал по всем направлениям, которые развиваю в
                        себе. В 2022 году главным моим приоритетом остается веб-разработка. Ей я уделяю большую часть
                        свободного времени, чтобы выйти на новый для себя уровень.
                    </p>
                </div>
                <ul className="stats__cards">
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats1} alt=""/>
                        </div>
                        <div className="stats__description">
                            <h4 className="stats__count">6</h4>
                            <p className="stats__paragraph"><span style={{color: '#4B98F2'}}>WEB</span>-проектов</p>
                        </div>
                    </li>
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats2} alt=""/>
                        </div>
                        <div className="stats__description">
                            <h4 className="stats__count">3</h4>
                            <p className="stats__paragraph"><span style={{color: '#4B98F2'}}>UI</span>-дизайна</p>
                        </div>
                    </li>
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats3} alt=""/>
                        </div>
                        <div className="stats__description">
                            <h4 className="stats__count">8</h4>
                            <p className="stats__paragraph"><span style={{color: '#4B98F2'}}>CG</span>-артов</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="arts">
                <div className="arts__text-box">
                    <h3 className="title arts__title"><span className="cube"></span>CG-портфолио </h3>
                    <p className="paragraph">
                        Небольшое портфолио цифровых артов, выполненных в растровой графике (Adobe Photoshop +
                        графический
                        планшет).
                    </p>
                    <p className="paragraph">
                        Более подробнее с моим творчеством можно ознакомиться в инстаграме и на артстейшене.
                    </p>
                    <div className="arts__links">
                        <a className="arts__link" href="https://instagram.com/kejero.arts/" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="Instagram"
                                icon={<InstagramIcon/>}
                                variant="outlined"
                                color="secondary"
                                size="medium"
                            />
                        </a>
                        <a className="arts__link" href="https://www.artstation.com/kejero" target="_blank">
                            <Chip
                                style={{cursor: "pointer"}}
                                label="Artstation"
                                icon={<PhotoFilterIcon/>}
                                variant="outlined"
                                color="info"
                                size="medium"
                            />
                        </a>
                    </div>
                    {
                        window.screen.width > 1190 &&
                        <div className="arts__illustration">
                            <img style={{width: '100%'}} src={illustration} alt=""/>
                        </div>
                    }
                </div>

                <div className="arts__slider-wrapper">
                    <Swiper
                        id="arts"
                        modules={[Navigation, Pagination]}
                        loop={true}
                        freeMode={true}
                        watchSlidesProgress={true}
                    >
                        {slidesArts}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true} spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesVisibility={true}
                        watchSlidesProgress={true}
                        className="mySwiper"
                    >
                        {slidesArts}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default About;