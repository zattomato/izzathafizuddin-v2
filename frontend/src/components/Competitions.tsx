import React from "react";
import { Grid } from "@mui/joy";

const competitions = [
  {
    project: "Kira-Kira AI",
    description:
        "Malaysian Personal Financial Advisor AI chat bot for the underbanked, conversing in Tamil, Mandarin and Malay. Uses a RAG AI model on AWS Bedrock with S3 Knowledge Base, and Mesolitica's AI APIs for Malaysian language Speech, Translate and Transcribe. Built with React Native, Expo and ExpressJS. Built in 48 hours.",
    achievement: ["7th place - PayNet's PayHack 2024 Open Finance Hackathon (100+ teams)"],
  },
  {
    project: "HydroponicHub",
    description:
        "Collaborative hydroponic farming mobile application displaying real-time IoT sensor data with analysis, a task scheduling system, and a plant-based information repository. Built with React Native, Expo and Firebase.",
    achievement: [
      "2nd Best Final Year Project in Software Engineering Department, FSKTM UM's Anugerah Projek Akademik Cemerlang (APAC) 2024",
    ],
  },
  {
    project: "Wattamize",
    description:
        "Web application predicting electrical usage and Green House Gas emissions, with location and weather-based energy optimization notifications. Built with Laravel, ReactJS and Supabase (MySQL). Built in 24 hours. Got hired as a full time employee through the hackathon.",
    achievement: ["3rd place - Dell's Hack2Hire Hackathon"],
  },
  {
    project: "Archie - The Archery Coach Alternative",
    description:
        "A physical device to help archers improve their posture, built using an Arduino Uno microcontroller attached to a 3D-printed case worn on the user's arm.",
    achievement: [
      "Oral Grand Winner - Science Castle Malaysia 2018 (Serdang, Malaysia)",
      "Gold Award - World Innovation Creativity Contest (Seoul, Korea)",
    ],
  },
];

const Competitions = () => {
  return (
      <React.Fragment>
        <h2>Competitions</h2>
        <br />

        {competitions.map((comp, idx) => (
            <Grid key={idx} container sx={{ marginBottom: 3 }}>
              <Grid xs={12}>
                <h4 style={{ margin: 0 }}>{comp.project}</h4>
                <p
                    style={{
                      color: "gray",
                      fontSize: 10,
                      fontStyle: "italic",
                      margin: 0,
                    }}
                >
                  {comp.achievement.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < comp.achievement.length - 1 && <br />}
                      </React.Fragment>
                  ))}
                </p>
              </Grid>
              <Grid xs={12}>
                <p style={{ color: "gray", fontSize: 12, marginTop: 2 }}>
                  {comp.description}
                </p>
              </Grid>
            </Grid>
        ))}
      </React.Fragment>
  );
};

export default Competitions;
