import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <Stack
      direction={{ lg: "row", md: "column" }}
      marginTop={"24px"}
      p={5}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={"#1a1a1a"}
    >
      <Typography color={"white"} m={2}>
        © 2023 KALALAYA. All rights reserved. All graphics and pictures on this
        website are the copyrighted intellectual property of kalalaya.
      </Typography>
      <Stack direction={"row"} m={2}>
        <Link m={1}>
          <InstagramIcon />
        </Link>
        <Link m={1}>
          <FacebookIcon />
        </Link>
        <Link m={1}>
          <MailIcon />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
