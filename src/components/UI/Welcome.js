export default function Welcome(params) {
  return (
    <>
      <h1>Welcome to PixPoster!</h1>
      <button className="btn" onClick={() => setLogin(true)}>
        Create PixelArt
      </button>
    </>
  );
}
