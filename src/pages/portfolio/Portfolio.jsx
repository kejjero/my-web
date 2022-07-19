import DesktopVersion from "./DesktopVersion";
import MobileVersion from "./MobileVersion";

function Portfolio() {

    return (
        <section className="portfolio">
            {
                window.screen.width > 1100 ? <DesktopVersion/> : <MobileVersion/>}

        </section>
    )
}

export default Portfolio;