import React from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRoutes } from "react-router-dom";
import { routes } from "./Route";

const theme = createTheme();

const App = () => {
  const elements = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {elements}
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
