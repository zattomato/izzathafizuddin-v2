import {Box, Grid, Link, Stack} from "@mui/joy";
import logo_cropped from "../assets/izzathafizuddin-logo_small-black_cropped.png";

const FooterBar = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{width: '80%', maxWidth: 600}}
            >
                <Stack>
                    <Box sx={{marginRight: 2}}>
                        <Link
                            href="/"
                            underline="none"
                            sx={{color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                        >
                            <img
                                src={logo_cropped}
                                width="35"
                                className="d-inline-block align-top"
                                alt="izzathafizuddin logo"
                            />
                        </Link>
                    </Box>
                    <Box>
                        <p>By Izzat H.</p>
                    </Box>
                </Stack>
                <Stack>
                <Box sx={{marginRight: 2}}>
                        <Link
                            href="https://www.linkedin.com/in/izzathafizuddinazmi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                        >
                            <p>LinkedIn</p>
                        </Link>
                    </Box>
                    <Box sx={{marginRight: 2}}>
                        <Link
                            href="mailto:izzathwork@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                        >
                            <p>E-Mail</p>
                        </Link>
                    </Box>
                    {/*<Box sx={{marginRight: 2}}>
                        <Link
                            href="#Resume"
                            underline="none"
                            sx={{color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                        >
                            <p>Resume</p>
                        </Link>
                    </Box>*/}
                    <Box sx={{marginRight: 2}}>
                        <Link
                            href="https://github.com/zattomato"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="none"
                            sx={{color: 'inherit', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                        >
                            <p>GitHub</p>
                        </Link>
                    </Box>
                </Stack>
            </Grid>
        </div>
    )
}

export default FooterBar