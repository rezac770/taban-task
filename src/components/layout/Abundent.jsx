import { Box, List, ListItem } from "@mui/material";
import React from "react";
import { abundent } from "../../data/abundent";
const Abundent = () => {
  return (
    <Box sx={{ mt: "10px", maxWidth: "420px" }}>
      <Box sx={{ display: "flex" }}>
        <span className="abundent">پرتکرار ترین ها</span>
      </Box>

      <List
        sx={{
          display: "flex",
          gap: "2px",
          justifyContent: "start",
          overflow: "auto",
          margin: "0 auto",
        }}
      >
        {abundent?.map((item) => {
          return (
            <ListItem
              key={item.id}
              sx={{
                backgroundColor: "white",
                width: "22%",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                fontSize: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "70px",
                  textAlign: "center",
                }}
              >
                {item.title}
              </span>
              <p>{item.type}</p>
              <img src={item.img} alt="" />
              <p> {item.amount}ریال </p>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Abundent;
