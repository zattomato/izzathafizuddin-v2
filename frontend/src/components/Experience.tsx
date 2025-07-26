import React from "react";
import { Avatar, Grid, Link, Stack } from "@mui/joy";
import Digi from "../assets/Digi.jpg";
import MoneyMatch from "../assets/MoneyMatch.png";
import Dell from "../assets/Dell_Logo.png";
import FTM from "../assets/FTM.jpg";

const experiences = [
    {
        company: "Digi Telecommunications",
        logo: Digi,
        initials: "DG",
        position: "Associate Software Engineer Intern",
        duration: "July - December 2022",
        note: "Telecommunications Provider | Merged with Celcom to form CelcomDigi",
        link: "https://www.celcomdigi.com/"
    },
    {
        company: "MoneyMatch",
        logo: MoneyMatch,
        initials: "MM",
        position: "Software Engineering Intern - Backend",
        duration: "June - September 2023",
        note: "Digital Remittance and Cross-border Payments Provider",
        link: "https://www.moneymatch.co/"
    },
    {
        company: "Dell Technologies",
        logo: Dell,
        initials: "D",
        position: "Software Engineer 1 - IT Development Programme",
        duration: "March 2024 - Present",
        note: "Global Tech Leader in Digital Transformation",
        link: "https://www.dell.com/"
    },
    {
        company: "FTM Tech",
        logo: FTM,
        initials: "F",
        position: "Co-Founder & Software Engineer",
        duration: "February 2024 - Present",
        note: "202403185991 (003624216-H)",
        email: "izzathafizuddin@ftmtech.com.my",
        link: "https://ftmtech.com.my"
    }
];

const Experience = () => {
    return (
        <React.Fragment>
            <h2>Experience</h2>
            <p style={{ color: "gray" }}>
                Based in Malaysia. More details in my{" "}
                <Link
                    href="https://www.linkedin.com/in/izzathafizuddinazmi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        color: "gray",
                        fontFamily: "inherit",
                        fontSize: "inherit"
                    }}
                >
                    LinkedIn.
                </Link>
            </p>

            {experiences.map((exp, idx) => (
                <Grid
                    key={idx}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ marginBottom: 5 }}
                >
                    <Grid xs={12} sm={6}>
                        <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}
                        >
                            <Stack
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar
                                    alt={exp.company}
                                    src={exp.logo}
                                    size={exp.company === "FTM Tech" ? "md" : "sm"}
                                >
                                    {exp.initials}
                                </Avatar>
                                <Stack justifyContent="flex-start" spacing={0.5}>
                                    <h4 style={{ margin: 0 }}>{exp.company}</h4>
                                    {exp.note && (
                                        <p
                                            style={{
                                                color: "gray",
                                                fontSize: 10,
                                                fontStyle: "italic",
                                                margin: 0
                                            }}
                                        >
                                            {exp.note}
                                        </p>
                                    )}
                                </Stack>
                            </Stack>
                        </a>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        display="flex"
                        justifyContent={{ xs: "flex-start", sm: "flex-end" }}
                        alignItems="center"
                    >
                        <h5 style={{ color: "gray" }}>{exp.duration}</h5>
                    </Grid>
                    <Grid xs={12}>
                        <h5 style={{ color: "dimgray", marginTop: 2}}>
                            {exp.position}
                        </h5>
                        {exp.email && (
                            <p
                                style={{
                                    color: "gray",
                                    fontSize: 12,
                                    // marginTop: 0
                                }}
                            >
                                Interested to work with us? Just e-mail me at{" "}
                                <a
                                    href={`mailto:${exp.email}`}
                                    style={{
                                        color: "#616161",
                                        textDecoration: "none"
                                    }}
                                >
                                    {exp.email}
                                </a>
                            </p>
                        )}
                    </Grid>
                </Grid>
            ))}
        </React.Fragment>
    );
};

export default Experience;
