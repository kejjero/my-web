import '../scss/app.scss'
import Header from "./header/Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio"
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import PanelList from "./header/PanelList";
import {useState} from "react";
import PopupEmail from "./PopupEmail";
import PopupCooperation from "./PopupCooperation";
import Work from "./works/Work";

function App() {
    const [isOpenBurger, setIsOpenBurger] = useState();
    const [openPopupEmail, setOpenPopupEmail] = useState(false);
    const [openPopupCooperation, setOpenPopupCooperation] = useState(false);
    const [successCopyEmail, setSuccessCopyEmail] = useState(false);

    return (
        <div className="wrapper">
            <Header
                setIsOpenBurger={setIsOpenBurger}
                isOpenBurger={isOpenBurger}
            />
            <main className="content">
                <PanelList
                    isOpenBurger={isOpenBurger}
                    setIsOpenBurger={setIsOpenBurger}
                />
                <PopupEmail
                    openPopupEmail={openPopupEmail}
                    setOpenPopupEmail={setOpenPopupEmail}
                    successCopyEmail={successCopyEmail}
                    setSuccessCopyEmail={setSuccessCopyEmail}
                />
                <PopupCooperation
                    openPopupCooperation={openPopupCooperation}
                    setOpenPopupCooperation={setOpenPopupCooperation}
                />
                <Routes>
                    <Route path="/"
                           element={<Home
                            setOpenPopupEmail={setOpenPopupEmail}
                            setSuccessCopyEmail={setSuccessCopyEmail}
                            setOpenPopupCooperation={setOpenPopupCooperation}
                           />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/portfolio/" element={<Portfolio/>}/>
                    <Route path="/service" element={<Service/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/portfolio/work/:workId" element={<Work/>}/>
                </Routes>
            </main>
            <Footer
                setOpenPopupEmail={setOpenPopupEmail}
                setSuccessCopyEmail={setSuccessCopyEmail}
            />
        </div>
    )
}

export default App;
