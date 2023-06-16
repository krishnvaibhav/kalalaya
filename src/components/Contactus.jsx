import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const Contactus = () => {
  return (
    <div>
      <Typography color={"secondary"} align="center" m={5} variant="h4">
        Contact Us
      </Typography>
      <Container
        style={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        sx={{ width: { lg: "50%", md: "70%", xs: "90%" } }}
      >
        <TextField
          color="secondary"
          fullWidth
          label="Enter Email"
          variant="outlined"
          sx={{ margin: 2 }}
        />
        <TextField
          color="secondary"
          fullWidth
          label="Enter Name"
          variant="outlined"
          sx={{ margin: 2 }}
        />
        <TextField
          color="secondary"
          fullWidth
          label="Enter Message"
          variant="outlined"
          multiline
          rows={4}
          sx={{ margin: 2 }}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          color="secondary"
          sx={{ margin: 2 }}
        >
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default Contactus;
