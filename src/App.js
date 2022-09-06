import "./App.css";
import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/UI/Footer";
import useFetch from "./components/hooks/useFetch.hook.js";

function App() {
  // save input word not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // array of data
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
      <form className="inputForm" onSubmit={handleFormSubmit}>
        <label>
          Input_
          <input
            ref={txtTitle}
            className="input"
            type="text"
            inputMode="latin"
            required
          />
        </label>
        <input
          type="submit"
          onClick={() => {
            setInput(txtTitle.current.value);
          }}
        />
      </form>
      <div className="Canvas">
        <ReactP5Wrapper sketch={Canvas} dataLink={data} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
