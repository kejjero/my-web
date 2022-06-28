import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Manipulation, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import slideArt from '../images/about-1.svg'
import slideVector from '../images/about-2.svg'
import slideUi from '../images/about-3.svg'
import welcomeImage from '../images/welcome.svg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import stats1 from '../images/stats/who-people.webp'
import stats2 from '../images/stats/who-awards.webp'
import stats3 from '../images/stats/fundraise.webp'

function About() {

    const items = [
        {image: slideArt, title: 'Развиваю себя как цифрового художника'},
        {image: slideUi, title: 'Практикуюсь в создании UX/UI дизайна'},
        {image: slideVector, title: 'Создаю векторные иллюстрации'},
    ]


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


    return (
        <div className="about">
            <section className="welcome">
                <div className="welcome__text-wrapper">
                    <h2>Привет, друг!</h2>
                    <em className="subtitle">Я креативный веб-разработчик <br/> из Сибири 🎨
                    </em>
                    <button className="welcome__button" type="button">
                        <a href="#info">
                            <svg width="27" height="45" viewBox="0 0 27 45" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="26" height="44" rx="13" stroke="#D9D9D9"/>
                                <circle cx="13.5" cy="9.5" r="4.5" fill="#D9D9D9"/>
                            </svg>
                        </a>
                    </button>
                </div>
                <img className="welcome__image" src={welcomeImage} alt=""/>
            </section>
            <section className="info" id="info">
                <div className="info__box-image">
                    <img className="info__image x1" src="https://images7.alphacoders.com/848/thumb-1920-848894.jpg"
                         alt=""/>
                    <img className="info__image x2"
                         src="https://i.pinimg.com/originals/56/d1/c2/56d1c2938b5c0155c3f5e2db030aa114.jpg" alt=""/>
                    <img className="info__image x3" src="https://altaitop.ru/wp-content/uploads/2020/02/bajk-zim-1.jpg"
                         alt=""/>
                    <img className="info__image x4" src="https://i.artfile.ru/2560x1600_1272281_[www.ArtFile.ru].jpg"
                         alt=""/>
                </div>
                <div className="info__box-text">
                    <h3 className="title"><span className="cube"></span>Моя история</h3>
                    <p className="paragraph">Свой путь я начинал с изучения Python, но быстро осознал, что больше
                        ориентирован на создание
                        «оболочки» продукта,
                        нежели на то, что происходит «за ширмой» проекта.</p>
                    <p className="paragraph">Свой путь я начинал с изучения Python, но быстро осознал, что больше
                        ориентирован на создание
                        «оболочки» продукта,
                        нежели на то, что происходит «за ширмой» проекта.</p>
                </div>
            </section>
            <section className="slider">
                <h3 className="title"><span className="cube">
                </span>А еще я...</h3>
                <div className="slider__main-box">
                    <div className="slider__wrapper">
                        <Swiper
                            id="swiper"
                            modules={[Navigation, Pagination, Autoplay, Manipulation]}
                            autoplay={true}
                            Manipulation
                            loop={true}
                        >
                            {slides}
                        </Swiper>
                        <span>
                    </span>
                    </div>
                </div>
            </section>
            <section className="stats">
                <ul className="stats__cards">
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats1} alt=""/>
                        </div>
                        <h4 className="stats__count">6</h4>
                        <p className="stats__description"><span style={{color: '#4B98F2'}}>Web</span>-проектов</p>
                    </li>
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats2} alt=""/>
                        </div>
                        <h4 className="stats__count">3</h4>
                        <p className="stats__description"><span style={{color: '#4B98F2'}}>UI</span>-дизайна</p>
                    </li>
                    <li className="stats__card">
                        <div className="stats__image-box">
                            <img className="stats__image" src={stats3} alt=""/>
                        </div>
                        <h4 className="stats__count">8</h4>
                        <p className="stats__description"><span style={{color: '#4B98F2'}}>CG</span>-артов</p>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default About;