import "./App.css";
import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/UI/Footer";
import useFetch from "./components/hooks/useFetch.hook.js";
import MainMenu from "./components/UI/MainMenu";

function App() {
  // input not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // sliders ui
  const [brightness, setBrightness] = useState(75);
  const [sizeRectangle, setSizeRectangle] = useState(-150);

  // data, json, get
  const [json, setJson] = useState([]);
  const [data, setData] = useState("");
  const { get } = useFetch();

  // request API
  const link = "https://api.giphy.com/v1/gifs/search?&q=",
    // search = prompt("Enter the word that you want to see", "coffee"),
    keyWord = input,
    apiKey = "&api_key=nH3yJQf4ugZ49t2IblSy9XBRHZLRo9iP",
    requestUrl = link + keyWord + apiKey;

  //  10 images to ctrl + 0-9 keys

  const handleKeyPress = useCallback(
    (event) => {
      if (event.ctrlKey && event.key === "1") {
        let ev = json.data[0].images.original.url;
        setData(ev);
      }

      if (event.ctrlKey && event.key === "2") {
        let ev = json.data[1].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "3") {
        let ev = json.data[2].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "4") {
        let ev = json.data[3].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "5") {
        let ev = json.data[4].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "6") {
        let ev = json.data[5].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "7") {
        let ev = json.data[6].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "8") {
        let ev = json.data[7].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "9") {
        let ev = json.data[8].images.original.url;
        setData(ev);
      }
      if (event.ctrlKey && event.key === "0") {
        let ev = json.data[9].images.original.url;
        setData(ev);
      }
    },
    [json]
  );

  useEffect(() => {
    // focus on input form
    txtTitle.current.focus();

    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // send request to API
  function handleFormSubmit(e) {
    e.preventDefault();
    txtTitle.current.value = "";
    get(requestUrl)
      .then((json) => {
        // data = data.data[0].images.original.url;
        // data = data.data[0].images.480w_still.url; // before 480??
        // json = json.data;
        setJson(json);
      })
      .catch((error) => console.log(error));
  }
  console.log("FETCH DATA:", `${keyWord}`, json);

  // PropTypes
  App.propTypes = {
    data: PropTypes.string.isRequired,
  };

  return (
    <div className="App">
      <div className="Header-container">
        <div className="form-container">
          <form className="inputForm" onSubmit={handleFormSubmit}>
            <label htmlFor="search" hidden="enabled">
              search
            </label>
            <input
              ref={txtTitle}
              className="search"
              type="text"
              inputMode="latin"
              required
            />
            <input
              hidden="enabled"
              type="submit"
              onClick={() => {
                setInput(txtTitle.current.value);
              }}
            />
          </form>
        </div>
        <div className="Slider-rectangle">
          <div className="Slider-wrapper">
            <input
              className="slider"
              type="range"
              min={-250}
              max={-20}
              step={5}
              value={sizeRectangle}
              onChange={(event) => {
                setSizeRectangle(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="Slider-brightness">
          <div className="Slider-wrapper">
            <input
              className="slider"
              type="range"
              min={25}
              max={100}
              step={1}
              value={brightness}
              onChange={(event) => {
                setBrightness(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="logo-container">
          <label>GifPoster</label>
        </div>
        <div className="main-button">
          <MainMenu />
        </div>
      </div>
      <div className="canvas-container">
        <ReactP5Wrapper
          sketch={Canvas}
          dataLink={data}
          brightness={brightness}
          sizeRectangle={sizeRectangle}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
