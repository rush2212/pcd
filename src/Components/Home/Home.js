import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import HeroImg from "../../Assets/hero.png";
import { orange } from "@mui/material/colors";
import Paper from '@mui/material/Paper';
import Whyus from "./Section/Whyus";
import OurServices from "./OurServices_Section/OurServices";
import Demoserv1 from "./OurServices_Section/demoserv1";
import Demo2 from "./OurServices_Section/Demo2";
import HowWeWork from "./HowWeWork/HowWeWork";
import Tech from "./TechStack/Tech";
import Cloud from "./TechStack/cloud";
import T1_demo from "./TechStack/T1.js";
const Home = () => {
  return (
    <>
      <Nav />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          sx={{ textAlign: "left", paddingRight: "2rem", paddingLeft: "2rem" }}
        >
          <Grid container sx={{ ml: 4, mb: 2 }}>
            <Grid item xs={12} lg={12}>
              <h2
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5.6rem)",
                  fontWeight: "bold",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                Making your web development{" "}
                <span style={{ color: "#763E8E" }}>
                  experience simple & pain free
                </span>
              </h2>
              <p
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                  color: "#000",
                  lineHeight: "1.6",
                  textAlign: "left",
                }}
              >
                Transform your online presence with our streamlined solutions.
                We blend expertise with simplicity for a stress-free experience.
                Transform your online presence with our streamlined solutions.
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="flex-end"
            sx={{ ml: 2, mb: 2 }}
          >
            <Grid item xs={12} md={12} lg={12}>
              <Button
                variant="contained"
                size="large"
                sx={{ mb: 5, mr: 2, fontSize: "1.5rem" }}
              >
                Explore Services
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ mb: 5, mr: 2, fontSize: "1.5rem",backgroundColor:orange }}
              >
                Get in Touch
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6} md={6} style={{ height: "100vh" }}>
          <img
            src={HeroImg}
            style={{ height: "80%", width: "100%", objectFit: "cover" }}
            alt="Hero Image"
          />
        </Grid>

      </Grid>
      <Grid>

      </Grid>
      <Whyus/>
      <OurServices/>
      <Demo2/>
    <Demoserv1/>
      <HowWeWork/>
      <Tech/>
      <Cloud/>
      <T1_demo/>
      

      
    </>
  );
};

export default Home;
