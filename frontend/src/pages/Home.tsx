import {Box} from "@mui/joy";
import IzzatHafizuddin from "../components/IzzatHafizuddin.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Experience from "../components/Experience.tsx";
import Connect from "../components/Connect.tsx";
import Projects from "../components/Projects.tsx";

export default function Home() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: '80%', maxWidth: 600}}>
                <IzzatHafizuddin />
                <br/>
                <AboutMe />
                <br/>
                <Experience />
                <br/>
                <br/>
                <hr style={{ color: 'lightgray'}}/>
                <br/>
                {/*<Projects />
                <br/>
                <Connect />
                <br/>*/}
            </Box>
        </div>
)
}