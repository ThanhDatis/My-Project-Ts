import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import AppRouter from "./routes/AppRouter";
import "./App.css";

// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f44336",
    },
  },
  // typography: {
  //   fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
