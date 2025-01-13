import { Box } from "@mui/material";
import React from "react";
import notFoundImage from "../assets/not/404.jpg";

const NotFind = () => {
  return (
    <Box
      cla
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img
        src={notFoundImage}
        alt="not found page Image"
        style={{ width: "100%" }}
      />
    </Box>
  );
};

export default NotFind;
