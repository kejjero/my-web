import '../scss/app.scss'
import Header from "./Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Blog from "../pages/Blog";

function App() {
  return (
      <div className="wrapper">

          <Header/>
          <main className="content">
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
