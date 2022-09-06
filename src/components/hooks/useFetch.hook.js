// useFetch hook

export default function useFetch() {
  function get(url) {
    return fetch(url)
      .then((responce) => responce.json())
      .catch((error) => console.log(error));
  }
  return { get };
}
