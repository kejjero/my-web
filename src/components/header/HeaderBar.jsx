import {useRef} from "react";

function HeaderBar({isOpenBurger, setIsOpenBurger}) {
    const refBurger = useRef();

    return (
        <header className="header-bar">
            <div className="header-bar__wrapper">
                <input ref={refBurger} id="menu__toggle" type="checkbox" checked={isOpenBurger} onClick={() => setIsOpenBurger(!isOpenBurger)}/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
            </div>
        </header>
    )
}


export default HeaderBar;