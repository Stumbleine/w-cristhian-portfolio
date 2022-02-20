import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import { CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
export default function App() {
  const mode = useSelector((state) => state.setting.theme.mode);
  console.log("asdasd", mode);
  return (
    <BrowserRouter>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline></CssBaseline>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
