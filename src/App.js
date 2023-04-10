import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyBlock from "./components/BodyBlock";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
        <Header />
        <BodyBlock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
