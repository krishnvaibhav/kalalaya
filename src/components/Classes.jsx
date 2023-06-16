import {
  Box,
  Divider,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import bhImg from "../images/cropped-Priya-Mohiniyattam.jpg";
import muImg from "../images/cropped-Ramesh-Sitar-1.webp";
import PcImg from "../images/Bollywood-1-2020-21.jpg";
import { StyledTypoClass } from "../Styles/style";

const Classes = () => {
  return (
    <Box bgcolor={"#704241"}>
      <Typography textAlign={"center"} variant="h4" p={2} color={"white"}>
        Classes We Offer
      </Typography>
      <Box p={3}>
        <Typography
          color={"white"}
          textAlign={"center"}
          variant="h5"
          fontWeight={500}
        >
          DANCE
        </Typography>
        <Stack
          p={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack
            p={3}
            m={3}
            spacing={5}
            flex={1}
            justifyContent={"end"}
            alignItems={"center"}
          >
            <StyledTypoClass variant="h6">Bharayhantyam</StyledTypoClass>
            <StyledTypoClass variant="h6">Kathak</StyledTypoClass>
            <StyledTypoClass variant="h6">Mohiniyattam</StyledTypoClass>
            <StyledTypoClass variant="h6">Folk Dance</StyledTypoClass>
            <StyledTypoClass variant="h6">Semi Classic</StyledTypoClass>
            <StyledTypoClass variant="h6">Bollywood Dance</StyledTypoClass>
          </Stack>
          <Box
            justifyContent={"center"}
            display={{ md: "flex", xs: "none" }}
            flex={2}
          >
            <ImageList sx={{ width: "70%" }} cols={2}>
              <ImageListItem>
                <img src={bhImg} srcSet={bhImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bhImg} srcSet={bhImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bhImg} srcSet={bhImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={bhImg} srcSet={bhImg} alt="" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Stack>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />
      <Box p={3}>
        <Typography
          color={"white"}
          textAlign={"center"}
          variant="h5"
          fontWeight={500}
        >
          MUSIC
        </Typography>
        <Stack
          p={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            justifyContent={"center"}
            display={{ md: "flex", xs: "none" }}
            flex={2}
          >
            <ImageList sx={{ width: "70%" }} cols={2}>
              <ImageListItem>
                <img src={muImg} srcSet={muImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={muImg} srcSet={muImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={muImg} srcSet={muImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={muImg} srcSet={muImg} alt="" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
          <Stack
            p={3}
            m={3}
            spacing={5}
            flex={1}
            justifyContent={"end"}
            alignItems={"start"}
          >
            <StyledTypoClass variant="h6">Guitar</StyledTypoClass>
            <StyledTypoClass variant="h6">Keyboard</StyledTypoClass>
            <StyledTypoClass variant="h6">Drums</StyledTypoClass>
            <StyledTypoClass variant="h6">Carnatic Vocal</StyledTypoClass>
            <StyledTypoClass variant="h6">Sitar</StyledTypoClass>
            <StyledTypoClass variant="h6">Violin</StyledTypoClass>
            <StyledTypoClass variant="h6">Mandolin</StyledTypoClass>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ backgroundColor: "white" }} />

      <Box p={3}>
        <Typography
          color={"white"}
          textAlign={"center"}
          variant="h5"
          fontWeight={500}
        >
          PERSONAL CLASSES
        </Typography>
        <Stack
          p={3}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack
            p={3}
            m={3}
            spacing={5}
            flex={1}
            justifyContent={"end"}
            alignItems={"cencenter"}
          >
            <StyledTypoClass variant="h6">Special Occasion</StyledTypoClass>
            <StyledTypoClass variant="h6">Personal Classes</StyledTypoClass>
            <StyledTypoClass variant="h6">Bollywood Workshop</StyledTypoClass>
            <StyledTypoClass variant="h6">
              Instrumental Classes for Bollywood / Tamil / Malayalam Songs
            </StyledTypoClass>
          </Stack>
          <Box
            justifyContent={"center"}
            display={{ md: "flex", xs: "none" }}
            flex={2}
          >
            <ImageList sx={{ width: "70%" }} cols={2}>
              <ImageListItem>
                <img src={PcImg} srcSet={PcImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={PcImg} srcSet={PcImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={PcImg} srcSet={PcImg} alt="" loading="lazy" />
              </ImageListItem>
              <ImageListItem>
                <img src={PcImg} srcSet={PcImg} alt="" loading="lazy" />
              </ImageListItem>
            </ImageList>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Classes;
