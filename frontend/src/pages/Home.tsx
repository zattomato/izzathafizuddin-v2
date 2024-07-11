import {Box} from "@mui/joy";
import IzzatHafizuddin from "../components/IzzatHafizuddin.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Experience from "../components/Experience.tsx";
import FadeIn from "react-fade-in";

export default function Home() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: '80%', maxWidth: 600}}>
                <FadeIn transitionDuration={600}>
                    <IzzatHafizuddin/>
                </FadeIn>
                <br/>
                <FadeIn delay={900} transitionDuration={1200}>
                    <AboutMe/>
                </FadeIn>
                <br/>
                <FadeIn delay={1100} transitionDuration={1200}>
                    <Experience/>
                </FadeIn>
                <FadeIn delay={1300} transitionDuration={1200}>
                    <hr style={{color: 'lightgray'}}/>
                    <br/>
                </FadeIn>
            </Box>
        </div>
    )
}