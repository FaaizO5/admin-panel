import { Grid } from "@mui/material";
import React from "react";
import CustomCard from "./Card";

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CustomCard
          title="Products"
          content="89"
          increment="32.4%"
          week=".vs last two year"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Sales"
          content="1000"
          increment="32.4%"
          week=".vs last year"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Customers"
          content="93"
          increment="32.4%"
          week=".vs last four weeks"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Last Sales"
          content="$500"
          increment="32.4%"
          week=".vs last three days"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Active Customers"
          content="200"
          increment="32.4%"
          week=".vs last few months"
        />
      </Grid>
      <Grid item xs={4}>
        <CustomCard
          title="Inactive Customers"
          content="99"
          increment="32.4%"
          week=".vs last 7 days"
        />
      </Grid>
    </Grid>
  );
};

export default Home;
