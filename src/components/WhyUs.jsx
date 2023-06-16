import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import img from "../images/Poster-1-Kalalaya-Inaguration-11-2011-scaled.jpg";
import React from "react";

const WhyUs = () => {
  return (
    <Box>
      <Divider style={{ width: "100%" }} />

      <Stack direction={"row"} p={3} m={3} mb={5}>
        <Box textAlign={"left"} p={3} m={3}>
          <Typography
            color={"secondary"}
            variant="h3"
            fontWeight={100}
            textAlign={"center"}
            p={2}
          >
            Why Us
          </Typography>
          <Typography variant="p">
            Classes for Classical Dances, Music (Instrumental & Vocal) Bollywood
          </Typography>
          <Typography variant="p">
            <Typography variant="h6" color={"secondary"}>
              Beginners
            </Typography>
            Golden Steps to the world of Indian classical dance
          </Typography>
          <Typography variant="p">
            <Typography variant="h6" color={"secondary"}>
              Learners
            </Typography>
            Build-up more confidence with innovative ideas
          </Typography>
          <Typography variant="p">
            <Typography variant="h6" color={"secondary"}>
              Scholars
            </Typography>
            All out to the field of choreography Perform skill in front of large
            gathering including dignitaries Continued every year
          </Typography>
          <Typography>
            <Button
              variant="contained"
              sx={{ margin: "20px 0" }}
              color="secondary"
            >
              Contact Us
            </Button>
          </Typography>
        </Box>
        <Box
          width={"50%"}
          alignItems={"center"}
          justifyContent={"center"}
          display={{ md: "flex", xs: "none" }}
        >
          <img
            width={"100%"}
            src={img}
            alt=""
            style={{ borderRadius: "50px" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default WhyUs;
