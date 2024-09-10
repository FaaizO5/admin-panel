import { Grid } from "@mui/material";
import Sidebar, { SIDEBAR_WIDTH } from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          minHeight: "100vh",
        }}
      >
        <Grid item>
          <Sidebar />
        </Grid>
        <Grid item sx={{ width: `calc(100% - ${SIDEBAR_WIDTH}px)`, p: 2 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}
