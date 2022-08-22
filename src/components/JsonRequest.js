import { useState, useEffect } from "react";

//request API
const link = "https://api.giphy.com/v1/gifs/search?&q=",
  search = prompt("Enter the word that you want to see", "coffee"),
  //   search = "flex",
  apiKey = "&api_key=nH3yJQf4ugZ49t2IblSy9XBRHZLRo9iP",
  requestUrl = link + search + apiKey;

export default function JsonRequest() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(requestUrl)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          data = data.data;
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);
  //   return null;

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.embed_url} URL: {item.images.downsized.url}
          </li>
        ))}
      </ul>
    );
  }
}
