import info from "../images/info.jpeg"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Manipulation, Navigation, Pagination} from 'swiper'
import 'swiper/css';
import slideArt from '../images/about-1.svg'
import slideVector from '../images/about-2.svg'
import slideUi from '../images/about-3.svg'
import welcomeImage from '../images/welcome.svg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function About() {

    const items = [
        {image: slideArt, title: 'развиваю себя как цифрового художника'},
        {image: slideUi, title: 'практикуюсь в создании UX/UI дизайна'},
        {image: slideVector, title: 'создаю векторные иллюстрации'},
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
                <h4 className="slider__subtitle">{item.title}</h4>
                <img className="slider__image" src={item.image} alt={item.title}/>
            </SwiperSlide>
        )
    })


    return (
        <div className="about">
            <section className="welcome">
                <div className="welcome__text-wrapper">
                    <h2>Привет, друг!</h2>
                    <em className="subtitle">Я креативный веб-разработчик из Сибири 🎨
                        <h3>Создаю сайты:</h3>
                        <ul>
                            <li>Продумываю UI дизайн</li>
                            <li>Рисую красочные иллюстрации</li>
                            <li>Пишу качественные SPA-приложения</li>
                        </ul>
                    </em>
                    <div className="welcome__button-wrapper">
                        <section id="section03" className="demo">
                            <a><span></span></a>
                        </section>
                    </div>
                </div>
                <img src={welcomeImage} alt=""/>
            </section>
            <section className="slider">
                <h3 className="title" style={{textAlign: 'center'}}>А еще я...</h3>
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
                    <span></span>
                </div>
            </section>
            <section className="info">
                <div className="info__box-image">
                    <img src={info} alt="avatar"/>
                    <span>
                    </span>
                </div>
                <div className="info__box-text">
                    <h3 className="title">Расскажу немного о себе</h3>
                    <p>Свой путь я начинал с изучения Python, но быстро осознал, что больше ориентирован на создание
                        «оболочки» продукта,
                        нежели на то, что происходит «за ширмой» проекта.</p>
                    <p>Свой путь я начинал с изучения Python, но быстро осознал, что больше ориентирован на создание
                        «оболочки» продукта,
                        нежели на то, что происходит «за ширмой» проекта.
                        Свой путь я начинал с изучения Python, но быстро осознал, что больше ориентирован на создание
                        «оболочки» продукта,
                        нежели на то, что происходит «за ширмой» проекта.</p>
                </div>
            </section>
        </div>
    )
}

export default About;