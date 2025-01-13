import { Box, Container, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import api from "../api";
import Loader from "../components/ui/Loader";
import ListTransections from "../components/transectons/ListTransections";

const Transaction = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [transections, setTransections] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const data = {
    direction: "DESC",
    filter: { type: null, status: null },
    order: "",
    pageNumber: currentPage,
    pageSize: 20,
    sortClass: "",
    sortField: "createdDate",
  };
  const getData = async () => {
    setIsLoader(true);
    try {
      const response = await api.post(
        "/card/api/transaction-history/v1/user-history",
        data
      );
      if (response.status === 200) {
        const { content, totalElements } = response.data;
        setTransections((prevState) => [...prevState, ...content]);
        setPageCount(totalElements);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  const fetchNextPage = () => {
    if (transections.length < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <InfiniteScroll
      dataLength={transections.length}
      next={fetchNextPage}
      hasMore={transections.length < pageCount}
      loader={
        <div>
          <h1>loader..</h1>
        </div>
      }
    >
      <Container sx={{ mt: "50px", maxWidth: "420px" }}>
        <Box
          sx={{
            position: "fixed",
            width: "100px",
            height: "30px",
            backgroundColor: "#1DB5C8",
            borderRadius: "20px",
            left: "35%",
            bottom: "15%",
            zIndex: "10",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "white",
          }}
        >
          <Typography variant="body2" sx={{ fontFamily: "IRANYekan" }}>
            فیلتر
          </Typography>
        </Box>
        <Box>
          <Typography
            className="date-transaction"
            variant="body2"
            sx={{ fontFamily: "IRANYekan" }}
          >
            امروز
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              mb: "150px",
            }}
          >
            {isLoader && <Loader />}

            {transections.map((item) => (
              <ListTransections key={item.id} item={item} />
            ))}
          </List>
        </Box>
      </Container>
    </InfiniteScroll>
  );
};

export default Transaction;
