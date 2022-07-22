import {Chip} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhotoFilterIcon from "@mui/icons-material/PhotoFilter";
import illustration from "../../images/arts/illustration.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import art1 from "../../images/arts/art_1.jpg";
import art2 from "../../images/arts/art_2.jpg";
import art3 from "../../images/arts/art_3.jpg";
import art4 from "../../images/arts/art_4.jpg";
import art5 from "../../images/arts/art_5.jpg";
import {useState} from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


function Arts () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
    return (
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
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    // thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}

                >
                    {slidesArts}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {slidesArts}
                </Swiper>
            </div>
        </section>
    )
}

export default Arts;