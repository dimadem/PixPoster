import { useRef, useEffect, useContext, useState } from "react";
import useFetch from "../hooks/useFetch.hook";
import { AppDispatchContext, AppStateContext } from "../redux/AppStateProvider";

export default function InputRequest() {
  const dispatch = useContext(AppDispatchContext);
  const { data } = useContext(AppStateContext);
  // save input word not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState("");

  // array of data with
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
      .then((json) => {
        // data = data.data[0].images.original.url;
        // data = data.data[0].images.480w_still.url; // before 480??
        // json = json.data;
        dispatch({
          type: "LOAD_JSON",
          payload: json,
        });
        console.log("JSON loaded:", json.data);

        dispatch({
          type: "SET_DATA",
          payload: json.data[0].images.original.url,
        });
      })

      .catch((error) => console.log(error));
  }
  console.log("from input request:", data);

  return (
    <form onSubmit={handleFormSubmit}>
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
  );
}
