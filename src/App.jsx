import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import image from "../images/background.webp";

// App will render header, footer and the main part using Outlet from React
function App() {
  return (
    <div style={{ 
      backgroundImage: `url(${image})`
    }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
