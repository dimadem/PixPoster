import { useState, useRef, useEffect, useCallback } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import useFetch from "../hooks/useFetch.hook";
import PropTypes from "prop-types";
import Canvas from "../Canvas/Canvas";
import Header from "./Header";
import Shortcuts from "./Shortcuts";
import InputRequest from "./InputRequest";
import MainMenu from "./MainMenu";
import Slider from "./Slider";

export default function Create(props) {
  // search input not controlled (comp)
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // ui
  const [brightness, setBrightness] = useState(75); // slider component
  const [sizeRectangle, setSizeRectangle] = useState(-150);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(1);
  const [click, setClick] = useState(false); // save button (component)

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

  // key commands (comp)
  const handleKeyPress = useCallback(
    (event) => {
      // event key
      // console.log(event.key);

      //  10 images to ctrl + 0-9 keys
      if (event.altKey && event.key === "1") {
        let ev = json.data[0].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "2") {
        let ev = json.data[1].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "3") {
        let ev = json.data[2].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "4") {
        let ev = json.data[3].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "5") {
        let ev = json.data[4].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "6") {
        let ev = json.data[5].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "7") {
        let ev = json.data[6].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "8") {
        let ev = json.data[7].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "9") {
        let ev = json.data[8].images.preview_gif.url;
        setData(ev);
      }

      if (event.altKey && event.key === "0") {
        let ev = json.data[9].images.preview_gif.url;
        setData(ev);
      }

      // arrows goes to one pixel result
      if (event.shiftKey && event.key === "ArrowRight") {
        setOffsetX((prev) => prev + 5);
      }

      if (event.shiftKey && event.key === "ArrowLeft") {
        setOffsetX((prev) => prev - 5);
      }

      if (event.shiftKey && event.key === "ArrowUp") {
        setOffsetY((prev) => prev - 5);
      }

      if (event.shiftKey && event.key === "ArrowDown") {
        setOffsetY((prev) => prev + 5);
      }

      if (event.altKey && event.key === "ArrowUp") {
        setScale((prev) => prev + 0.1);
      }

      if (event.altKey && event.key === "ArrowDown") {
        setScale((prev) => prev - 0.1);
      }
    },
    [json]
  );

  useEffect(() => {
    // focus on input form
    // txtTitle.current.focus();

    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  function onHandleClick() {
    setClick((current) => !current);
    setTimeout(() => {
      setClick((current) => !current);
    }, 300);
  }

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
        console.log(json);
        setData(json.data[0].images.preview_gif.url);
      })

      .catch((error) => console.log(error));
  }
  // console.log("FETCH DATA:", `${keyWord}`, json);

  // PropTypes
  Create.propTypes = {
    data: PropTypes.string.isRequired,
  };

  return (
    <>
      <div className="min-h-full text-center bg-transparent">
        <Header
          shortCuts={<Shortcuts onClick={true} />}
          inputRequest={
            <InputRequest
              onTxtTitle={txtTitle}
              onClick={() => {
                setInput(txtTitle.current.value);
              }}
              onHandleFormSubmit={handleFormSubmit}
            />
          }
          mainMenu={<MainMenu clickSave={onHandleClick} />}
        />
        <div className="absolute top-1/2 right-1">
          <Slider
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
          <Slider
            min={35}
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
            offX={offsetX}
            offY={offsetY}
            scale={scale}
            onSave={click}
          />
        </div>
      </div>
    </>
  );
}
