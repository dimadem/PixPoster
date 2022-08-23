import "./App.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/UI/Footer";
import InputRequest from "./API/InputRequest";

function App() {
  return (
    <div className="App">
      <InputRequest />
      {/* <Header /> */}
      <div className="Canvas">
        <ReactP5Wrapper sketch={Canvas} items={items} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
