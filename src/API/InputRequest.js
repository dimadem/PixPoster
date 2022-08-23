import { useState } from "react";

//request API

export default function InputRequest() {
  const [input, setInput] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  function handleFormSubmit(e) {
    e.preventDefault();

    const link = "https://api.giphy.com/v1/gifs/search?&q=",
      // search = prompt("Enter the word that you want to see", "coffee"),
      search = input,
      apiKey = "&api_key=nH3yJQf4ugZ49t2IblSy9XBRHZLRo9iP",
      requestUrl = link + search + apiKey;

    setIsLoaded(true);
    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        data = data.data[0].images.downsized.url;
        setItems(data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      })
      .finally(() => setIsLoaded(false));
    console.log("Error:", error);
    console.log("JsonRequest:", items);
  }

  function handleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleFormSubmit}>
        <label>
          Input_
          <input
            hidden={isLoaded}
            className="input"
            type="text"
            inputMode="latin"
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
}
