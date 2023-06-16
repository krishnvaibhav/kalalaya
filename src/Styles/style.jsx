import styled from "@emotion/styled";
import { Box, Link, Stack, Typography } from "@mui/material";
import cover from "../images/cover img.jpg";

export const NavLink = styled(Link)(({ theme }) => ({
  color: theme.palette.light.main,
  textDecoration: "none",
  "&:hover": {
    opacity: "0.7",
  },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
  borderRadius: 50,
  color: "white",
  backgroundColor: theme.palette.secondary.main,
  padding: 20,
  margin: 30,
}));
export const StyledStack2 = styled(Stack)(({ theme }) => ({
  borderRadius: 50,
  color: "white",
  backgroundColor: theme.palette.primary.main,
  padding: 20,
  margin: 30,
}));

export const StyledTypoClass = styled(Typography)(({ theme }) => ({
  fontWeight: "300px",
  border: `1px ${theme.palette.light.main} solid `,
  color: theme.palette.light.main,
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.dark.main,
    color: "white",
  },
}));
