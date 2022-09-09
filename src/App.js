import { useState, useRef, useEffect, useCallback } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas/Canvas";
import Footer from "./components/UI/Footer";
import useFetch from "./components/hooks/useFetch.hook.js";

function App() {
  // login page
  const [login, setLogin] = useState(false);

  // search input not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // ui
  const [brightness, setBrightness] = useState(75);
  const [sizeRectangle, setSizeRectangle] = useState(-150);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(1);
  const [click, setClick] = useState(false);

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

  const handleKeyPress = useCallback(
    (event) => {
      // event key
      // console.log(event.key);

      //  10 images to ctrl + 0-9 keys
      if (event.altKey && event.key === "1") {
        let ev = json.data[0].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "2") {
        let ev = json.data[1].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "3") {
        let ev = json.data[2].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "4") {
        let ev = json.data[3].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "5") {
        let ev = json.data[4].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "6") {
        let ev = json.data[5].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "7") {
        let ev = json.data[6].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "8") {
        let ev = json.data[7].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "9") {
        let ev = json.data[8].images.original.url;
        setData(ev);
      }

      if (event.altKey && event.key === "0") {
        let ev = json.data[9].images.original.url;
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

    console.log(click);
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, click]);

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

  if (login) {
    return (
      <div className="min-h-full text-center bg-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between pt-5 pb-4 md:justify-start md:space-x-10">
            <div className="grid grid-cols-3 lg:w-0 lg:flex-1">
              <form className="m-auto" onSubmit={handleFormSubmit}>
                <label htmlFor="search" hidden="enabled">
                  search
                </label>
                <input
                  className="border-2"
                  ref={txtTitle}
                  placeholder=" search picture"
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
              <div className="mainMenu">
                <button
                  className="rounded-none bg-transparent hover:bg-slate-200 font-bold text-slate-200 hover:text-slate-600 py-2 px-8"
                  onClick={() => {
                    setClick((current) => !current);
                    setTimeout(() => {
                      setClick((current) => !current);
                    }, 300);
                  }}
                >
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-1">
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
            offX={offsetX}
            offY={offsetY}
            scale={scale}
            onSave={click}
          />
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <>
        <div className="inline-block">
          <div className="">
            <h2 className="">Нужно залогиниться!</h2>
          </div>
          <div className="">
            <button
              className="inline-flex w-full justify-center rounded-none border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              onClick={() => setLogin(true)}
            >
              Войти
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
