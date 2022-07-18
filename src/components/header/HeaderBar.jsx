import logo from '../../images/logo_bar.svg'
import {useRef} from "react";
import {Link} from "react-router-dom";

function HeaderBar({isOpenBurger, setIsOpenBurger}) {
    const refBurger = useRef();

    function animationLinesBar(spanArray) {
        if (!isOpenBurger) {
            spanArray[0].style.transform = 'rotate(-45deg)'
            spanArray[0].style.marginTop = '5px'
            spanArray[1].style.display = 'none'
            spanArray[2].style.transform = 'rotate(45deg)'
            spanArray[2].style.marginBottom = '7px'
        } else {
            spanArray[0].style.transform = 'rotate(0)'
            spanArray[0].style.marginTop = '0'
            spanArray[1].style.display = 'block'
            spanArray[2].style.transform = 'rotate(0)'
            spanArray[2].style.marginBottom = '0'
        }
        setIsOpenBurger(!isOpenBurger)
    }

    function rotateLinesBar() {
        const burger = refBurger.current;
        animationLinesBar(burger.children)
    }

    return (
        <header className="header-bar">
            <div className="header-bar__wrapper">
                <Link to="/">
                    <img
                        className="header-bar__logo"
                        src={logo}
                        alt="logo"
                        style={{width: '70px'}}
                    />
                </Link>
                <div
                    className="burger"
                    onClick={() =>
                        rotateLinesBar()

                }
                >
                    <div
                        className="burger__wrapper"
                        ref={refBurger}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default HeaderBar;