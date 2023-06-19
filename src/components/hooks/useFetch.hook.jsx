// useFetch hook

export default function useFetch() {
  async function get(url) {
    try {
      const responce = await fetch(url);
      return await responce.json();
    } catch (error) {
      return console.log(error);
    }
  }
  return { get };
}
