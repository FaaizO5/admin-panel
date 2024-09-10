import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function CustomCard(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          border: "1px solid black",
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>{props.title}</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          {props.content}
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "bold",
            mx: 0.5,
            fontSize: 14,
          }}
        >
          {props.increment}
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
          {props.week}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
