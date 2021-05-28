import { Stack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Stack align="center" justify="center">
      <Link to="/book-info">Book Info</Link>
      <Link to="/check-issue">Check Issue Info</Link>
    </Stack>
  );
};

export default Navigation;
