import { Box, Typography } from "@mui/material";
import React from "react";

const Gem = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffe4a7",
        width: "100%",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        mt: "10px",
        maxWidth: "450px ",
        margin: "0 auto",
      }}
    >
      <Box sx={{ display: "flex", padding: "10px" }}>
        <img src="../src/assets/bitlogo/gem.png" alt="" />
        <Typography variant="span" sx={{ ml: "2px" }}>
          امتیاز شما
        </Typography>
      </Box>
      <Box>
        <span>
          <strong>99</strong>
        </span>
        <Typography variant="span">امتیاز </Typography>
      </Box>
    </Box>
  );
};

export default Gem;
