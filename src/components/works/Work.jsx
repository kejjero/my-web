import {useParams} from "react-router";
import Marsik from "./Marsik";
import Mesto from "./Mesto";
import Nedelka from "./Nedelka";
import {Link} from "react-router-dom";
import {Button, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Work() {
    const params = useParams();
    const workId = Number(params.workId);

    return (
        <section className="work">
            <nav className="work__navigation">
                <Link to="/portfolio">
                    <Button variant="outlined" size="small">
                        <IconButton>
                            <ArrowBackIcon color={"primary"}/>
                        </IconButton>
                    </Button>
                </Link>
            </nav>
            {workId === 1 && <Marsik/>}
            {workId === 2 && <Mesto/>}
            {workId === 3 && <Nedelka/>}
        </section>
    )
}

export default Work;