import { useTheme } from "../hooks/useTheme";

export default function Header({ theme }) {
  const [isDark, setIsDark] = useTheme();

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            document.body.classList.toggle("dark");
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-regular fa-${isDark ? "sun" : "moon"}`} />
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}
