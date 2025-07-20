import React from "react";
import {Avatar, Grid, Link, Stack} from "@mui/joy";
import Digi from "../assets/Digi.jpg"
import MoneyMatch from "../assets/MoneyMatch.png"
import Dell from "../assets/Dell_Logo.png"
import FTM from "../assets/FTM.jpg"

const Experience = () => {
    return (
        <React.Fragment>
            <h2>Experience</h2>
            <p style={{color: 'gray'}}>Based in Malaysia. More details in my{' '}
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
                alignItems="center"
                sx={{ marginBottom: 5}}
            >
                <Grid xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar alt="Digi" src={Digi} size="sm">DG</Avatar>
                        <h4>Digi Telecommunications</h4>
                    </Stack>
                </Grid>
                <Grid xs={6} display="flex" justifyContent="flex-end">
                        <h5 style={{ color: 'gray' }}>July - December 2022</h5>
                </Grid>
                <Grid xs={12}>
                    <h5 style={{color: 'gray'}}>Associate Software Engineer Intern</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginBottom: 5}}
            >
                <Grid xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar alt="MM" src={MoneyMatch} size="sm">MM</Avatar>
                        <h4>MoneyMatch</h4>
                    </Stack>
                </Grid>
                <Grid xs={6} display="flex" justifyContent="flex-end">
                    <h5 style={{ color: 'gray' }}>June - September 2023</h5>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>Software Engineering Intern - Backend</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginBottom: 5}}
            >
                <Grid xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar alt="Dell" src={Dell} size="sm">D</Avatar>
                        <h4>Dell Technologies</h4>
                    </Stack>
                </Grid>
                <Grid xs={6} display="flex" justifyContent="flex-end">
                    <h5 style={{color: 'gray'}}>March 2024 - Present</h5>
                </Grid>
                <Grid>
                    <h5 style={{color: 'gray'}}>Software Engineer 1 - IT Development Programme</h5>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ marginBottom: 5}}
            >
                <Grid xs={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}
                    >
                        <Avatar alt="FTM" src={FTM} size="md">F</Avatar>
                        <Stack justifyContent="flex-start" spacing={0.5}>
                            <h4 style={{ margin: 0 }}>FTM Tech</h4>
                            <p style={{ color: 'gray', fontSize: 10, fontStyle: 'italic', margin: 0 }}>
                                202403185991 (003624216-H)
                            </p>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid xs={6} display="flex" justifyContent="flex-end">
                    <h5 style={{color: 'gray'}}>February 2024 - Present</h5>
                </Grid>
                <Grid xs={12}>
                    <h5 style={{ color: 'gray', marginBottom: 4 }}>Co-Founder & Software Engineer</h5>
                    <p style={{ color: 'gray', fontSize: 12, marginTop: 0 }}>
                        Interested to work with us? Just e-mail me at{' '}
                        <a
                            href="mailto:izzathafizuddin@ftmtech.com.my"
                            style={{ color: '#616161', textDecoration: 'none' }}
                        >
                            izzathafizuddin@ftmtech.com.my
                        </a>
                    </p>
                </Grid>

            </Grid>
        </React.Fragment>

    )
}

export default Experience