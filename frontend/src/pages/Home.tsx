import {Box} from "@mui/joy";
import IzzatHafizuddin from "../components/IzzatHafizuddin.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Experience from "../components/Experience.tsx";
import FadeIn from "../components/FadeIn.tsx";

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
                <FadeIn delay={1500} transitionDuration={1800}>
                    <Experience/>
                </FadeIn>
                <FadeIn delay={1700} transitionDuration={2000}>
                    <hr style={{color: 'lightgray'}}/>
                    <br/>
                </FadeIn>
            </Box>
        </div>
    )
}