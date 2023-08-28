import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Carosual from "../components/Carosual";
import CardComponent from "../components/Products";
import { Container, Checkbox, Typography, Stack, Box } from "@mui/material";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("Selected Category:", selectedCategory);

  const categories = ["Bowl", "Thali", "Salad", "breakFast"];

  return (
    <Layout>
      <Carosual />
      <Container
        maxWidth="xl"
        sx={{ display: "flex", flexDirection: "row", marginBottom: "50px" }}
      >
        <Box
          sx={{
            width: "150px",
            overflowY: "auto",
            position: "sticky",
            top: "0",
            height: "calc(100vh - 100px)", // Adjust this value as needed
          }}
        >
          <Typography>Filter By Category</Typography>
          {categories?.map((category) => (
            <Stack key={category} direction="row" sx={{ alignItems: "center" }}>
              <Checkbox
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              <Typography>{category}</Typography>
            </Stack>
          ))}
        </Box>
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            All Day BREAKFAST -
          </Typography>
          <CardComponent filterType={selectedCategory} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;