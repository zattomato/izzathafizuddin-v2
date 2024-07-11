import React, {ReactNode} from "react";
// import NavigationBar from "./NavigationBar.tsx";
import FooterBar from "./FooterBar.tsx";
import FadeIn from "react-fade-in";


interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            {/*<header style={{ height: '10vh'}}>*/}
            {/*    <NavigationBar />*/}
            {/*</header>*/}
            <main style={{ minHeight: '60vh'}}>
                {children}
            </main>
            <footer style={{ minHeight: '5vh'}}>
                <FadeIn delay={1500} transitionDuration={1200}> 
                    <FooterBar />
                </FadeIn>
            </footer>
        </div>
    )
}

export default Layout