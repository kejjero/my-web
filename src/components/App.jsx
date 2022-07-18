import '../scss/app.scss'
import Header from "./header/Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import PanelList from "./header/PanelList";
import {useState} from "react";

function App() {
    const [isOpenBurger, setIsOpenBurger] = useState();
  return (
      <div className="wrapper">
          <Header
              setIsOpenBurger={setIsOpenBurger}
              isOpenBurger={isOpenBurger}
          />
          <main className="content">
              <PanelList isOpenBurger={isOpenBurger}/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/portfolio" element={<Portfolio/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/blog" element={<Blog/>}/>
              </Routes>
          </main>
          <Footer/>
      </div>
  )
}

export default App;
