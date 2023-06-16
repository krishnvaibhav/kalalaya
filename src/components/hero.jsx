import { Button, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="content">
        <Typography
          align="center"
          className="heading"
          variant="h2"
          color="primary"
        >
          School of Indian
        </Typography>
        <Typography
          align="center"
          className="heading"
          variant="h2"
          color="primary"
        >
          Music and Dance
        </Typography>
        <Button
          sx={{ marginTop: 4 }}
          variant="outlined"
          size="large"
          color="light"
        >
          Know more
        </Button>
      </div>
    </div>
  );
};

export default Hero;
