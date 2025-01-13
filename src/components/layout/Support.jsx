import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

const Support = () => {
  return (
    <Box sx={{ maxWidth: "450px", mb: "70px" }}>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "5px",
        }}
      >
        <ListItem
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img src="../src/assets/supporticon/pos-terminal (3).png" alt="" />
          <Typography variant="body1" sx={{ fontFamily: "IRANYekan" }}>
            پذیرندگان
          </Typography>
        </ListItem>
        <ListItem
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          <img src="../src/assets/supporticon/technical-support.png" alt="" />
          <Typography variant="body1" sx={{ fontFamily: "IRANYekan" }}>
            پشتیبان ها
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Support;
