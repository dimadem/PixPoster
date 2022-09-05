import "./App.css";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/UI/Footer";
import useFetch from "./components/api/useFetch.hook.js";

function App() {
  // save input word not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // array of data
  const [data, setData] = useState("");
  const { get } = useFetch();

  // request API
  const link = "https://api.giphy.com/v1/gifs/search?&q=",
    // search = prompt("Enter the word that you want to see", "coffee"),
    keyWord = input,
    apiKey = "&api_key=nH3yJQf4ugZ49t2IblSy9XBRHZLRo9iP",
    requestUrl = link + keyWord + apiKey;

  // focus on form input
  useEffect(() => {
    txtTitle.current.focus();
  }, []);

  // send request to API
  function handleFormSubmit(e) {
    e.preventDefault();
    txtTitle.current.value = "";
    get(requestUrl)
      .then((data) => {
        data = data.data[0].images.original.url;
        // data = data.data[0].embed_url;
        setData(data);
      })
      .catch((error) => console.log(error));
  }
  console.log("FETCH DATA:", `${keyWord}`, data);

  // PropTypes
  App.propTypes = {
    data: PropTypes.string.isRequired,
  };

  // create image array with 10 images
  // set 10 images to keys 1-0

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
