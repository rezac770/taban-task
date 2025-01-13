import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px",
        margin: "0 auto",
        backgroundColor: "#0D808B",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <MenuIcon sx={{ color: "white", fontSize: "30px", cursor: "pointer" }} />
      <Box sx={{ maxWidth: "150px", height: "30px", display: "flex" }}>
        <img className="logo-app" src="../src/assets/images/logo.png" alt="" />

        <img className="name-app" src="../src/assets/text/bit.png" alt="" />
      </Box>
      <NotificationsNoneIcon sx={{ color: "white", fontSize: "30px" }} />
    </Box>
  );
};

export default Header;
