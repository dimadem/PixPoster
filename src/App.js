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
    <div className="min-h-full text-center bg-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between pt-5 pb-4 md:justify-start md:space-x-10">
          <div className="grid grid-cols-3 lg:w-0 lg:flex-1">
            <form className="m-auto border-2" onSubmit={handleFormSubmit}>
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
            <div className="m-auto text-4xl text-slate-900">
              <label>PixPoster</label>
            </div>
            <div className="m-auto main-button">
              <MainMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 left-1">
        <input
          className="w-30 h-20 m-0 origin-center rotate-90"
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
      <div className="absolute top-1/3 right-1">
        <input
          className="w-30 h-20 m-0 origin-center rotate-90"
          type="range"
          min={55}
          max={90}
          step={1}
          value={brightness}
          onChange={(event) => {
            setBrightness(event.target.value);
          }}
        />
      </div>
      <div className="inline-block">
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
