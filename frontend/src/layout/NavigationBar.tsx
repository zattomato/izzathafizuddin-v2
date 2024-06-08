import {Box, Grid, Link } from "@mui/joy";
import {useEffect, useState} from "react";
import logo_cropped from '../assets/izzathafizuddin-logo_small-black_cropped.png'


const NavigationBar = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div style={{ marginTop: 40 , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{width: '80%', maxWidth: 600}}
            >
                <Grid
                    container
                    justifyContent="flex-start"
                    sx={{ marginRight: 2}}
                >
                    <Link
                        href="/"
                        underline="none"
                        sx={{ color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
                    >
                        <img
                            src={logo_cropped}
                            width="25"
                            className="d-inline-block align-top"
                            alt="izzathafizuddin logo"
                        />
                    </Link>
                </Grid>
                {/*{windowWidth < 430 ? (
                    <Box>
                    </Box>
                ) : (
                    <Grid
                        container
                        justifyContent="flex-end"
                        sx={{ marginRight: 2}}
                    >
                        <Grid sx={{ marginRight: 2}}>
                            <Link
                                href="#About"
                                underline="none"
                                sx={{ color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
                            >
                                <p>About</p>
                            </Link>
                        </Grid>
                        <Grid sx={{ marginRight: 2}}>
                            <Link
                                href="#Experience"
                                underline="none"
                                sx={{ color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
                            >
                                <p>Experience</p>
                            </Link>
                        </Grid>
                        <Grid sx={{ marginRight: 2}}>
                            <Link
                                href="#Connect"
                                underline="none"
                                sx={{ color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit' }}
                            >
                                <p>Connect</p>
                            </Link>
                        </Grid>
                    </Grid>
                )}*/}
            </Grid>
        </div>
    )
}

export default NavigationBar