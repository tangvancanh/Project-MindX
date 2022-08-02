import "./App.css";
import { ThemeContext } from "./Components/ThemeContext/ThemeContext";
import { useContext } from "react";
import Contents from "./Components/Contents/Contents";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Menus from "./Components/Menus/Menus";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className={themeContext.theme}>
      <Navbar />
      <Intro />
      <Contents />
      <Menus />
    </div>
  );
}

export default App;
