import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Location = () => {
  return (
    <Container>
      <Divider style={{ width: "100%" }} />
      <Typography color={"secondary"} align="center" m={5} variant="h4">
        Our Locations
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "auto auto auto",
            md: "auto auto",
            xs: "auto",
          },
          marginTop: 5,
        }}
      >
        <Stack
          alignItems={"center"}
          p={3}
          m={3}
          sx={{ border: "1px solid #704241" }}
        >
          <LocationOnIcon color="secondary" fontSize="large" />
          <Typography variant="h6">Welland</Typography>
          <Typography variant="p">Kalalaya Centre</Typography>
          <Typography variant="p">500 Port Road Welland,</Typography>
          <Typography variant="p"> SA 5007</Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          p={3}
          m={3}
          sx={{ border: "1px solid #704241" }}
        >
          <LocationOnIcon color="secondary" fontSize="large" />

          <Typography variant="h6">Mawson Lakes</Typography>
          <Typography variant="p">Mawson Centre</Typography>
          <Typography variant="p">2-8 Main Street</Typography>
          <Typography variant="p">Mawson Lakes, 5095</Typography>
        </Stack>
        <Stack
          alignItems={"center"}
          p={3}
          m={3}
          sx={{ border: "1px solid #704241" }}
        >
          <LocationOnIcon color="secondary" fontSize="large" />
          <Typography variant="h6">Edwardstown</Typography>
          <Typography variant="p">1056b South Road</Typography>
          <Typography variant="p">Edwardstown,</Typography>
          <Typography variant="p"> SA 5039</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Location;
