import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import "./app.css";

const App = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
