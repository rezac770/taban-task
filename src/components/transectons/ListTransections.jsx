import React from "react";
import { Box, ListItem } from "@mui/material";
const ListTransections = ({ item }) => {
  return (
    <ListItem
      key={item.id}
      sx={{
        backgroundColor: "white",
        borderRadius: "30px",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "10px",
      }}
    >
      <Box className="icons-status">
        <img
          src={`../src/assets/status/${
            item.paymentType === "WALLET"
              ? "down.png"
              : item.status === "FAIL"
              ? "Path 6586.png"
              : "up.png"
          }`}
          alt=""
        />
        <img
          src={`../src/assets/status/${
            item.transactionType === "CARD_TO_CARD"
              ? "carttocart.png"
              : item.transactionType === "ACTIVE_PLATE_INQUIRY_PAYMENT"
              ? "love.png"
              : item.transactionType === "PASSPORT_INQUIRY_PAYMENT"
              ? "2514082.png"
              : item.transactionType === "CHARITY"
              ? "love.png"
              : item.transactionType === "CARD_BALANCE"
              ? "12528564.png"
              : item.transactionType === "INTERNET_PACKAGE"
              ? "sim.png"
              : "debit-card.png"
          }`}
          alt=""
        />
      </Box>
      <Box className="text-status">
        <span>{item.transactionType}</span>
        <p>{item.date}</p>
      </Box>

      <Box className="last-status">
        <p>{item.amount}ريال</p>
        <span className={item.status === "SUCCESS" ? "success" : "faill"}>
          {item.status === "SUCCESS" ? "موفق" : "ناموفق"}
        </span>
      </Box>
    </ListItem>
  );
};

export default ListTransections;
