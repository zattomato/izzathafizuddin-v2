import React from "react";
import {IconButton, Grid, Link} from "@mui/joy";

const Experience = () => {
    return (
        <React.Fragment>
            <h3>Experience</h3>
            <p style={{color: 'gray'}}>More details in my{' '}
                <Link
                    href="https://www.linkedin.com/in/izzathafizuddinazmi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{color: 'gray', textDecoration: 'none', fontFamily: 'inherit', fontSize: 'inherit'}}
                >
                    <p>LinkedIn.</p>
                </Link>
            </p>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid>
                    <div>
                        <h4>Digi Telecommunications
                            {/*<IconButton variant="plain" href="#as-link">
                                <ArrowUpRight color="#000000" size={14}/>
                            </IconButton>*/}
                        </h4>
                        <h5 style={{color: 'gray'}}>Associate Software Engineer Intern</h5>
                    </div>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>July - December 2022</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid>
                    <div>
                        <h4>MoneyMatch
                            {/*<IconButton variant="plain" href="#as-link">
                                <ArrowUpRight color="#000000" size={14}/>
                            </IconButton>*/}
                        </h4>
                        <h5 style={{color: 'gray'}}>Software Engineering Intern</h5>
                    </div>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>June - September 2023</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid>
                    <div>
                        <h4>Dell Technologies
                            {/*<IconButton variant="plain" href="#as-link">
                                <ArrowUpRight color="#000000" size={14}/>
                            </IconButton>*/}
                        </h4>
                        <h5 style={{color: 'gray'}}>Software Engineer 1 - IT Development Programme</h5>
                    </div>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>March 2024 - Present</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid>
                    <div>
                        <h4>FTM Tech Sdn. Bhd.
                            {/*<IconButton variant="plain" href="#as-link">
                                <ArrowUpRight color="#000000" size={14}/>
                            </IconButton>*/}
                        </h4>
                        <h5 style={{color: 'gray'}}>Freelance Company.  <i>Using technology to provide solutions.</i></h5>
                    </div>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>February 2024 - Present</h5>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default Experience