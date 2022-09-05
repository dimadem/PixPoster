import { useRef, useState, useEffect } from "react";
import useFetch from "../../api/useFetch.hook";

export default function InputRequest({ props }) {
  // save input word not controlled
  const txtTitle = useRef();
  const [input, setInput] = useState();

  // array of data with
  const [data, setData] = useState([]);
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
    const title = txtTitle.current.value;
    setInput(title);
    txtTitle.current.value = "";
    get(requestUrl)
      .then((data) => {
        data = data.data;
        setData(data);
      })
      .catch((error) => console.log(error));
  }
  console.log("from input request:", data);

  return (
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
      <input onClick={() => this.props.updateData(data)} type="submit" />
    </form>
  );
}
