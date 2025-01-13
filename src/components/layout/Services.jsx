import { Box, List, ListItem } from "@mui/material";
import React from "react";
import { services } from "../../data/services";
const Services = () => {
  return (
    <Box sx={{ maxWidth: "450px" }}>
      <Box sx={{ display: "flex" }}>
        <span className="abundent"> خدمات</span>
      </Box>
      <List
        sx={{
          display: "grid",
          gridTemplateColumns: " repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {services?.map((items) => {
          return (
            <ListItem
              key={items.id}
              sx={{
                backgroundColor: "white",
                fontSize: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <img src={items.img} alt="" />
              <p>{items.title}</p>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Services;
