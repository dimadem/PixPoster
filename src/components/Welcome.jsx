import Header from "./Header";

export default function Welcome(props) {
  return (
    <>
      <Header />
      <div className="text-center">
        <div className="mx-auto sm:px-10 text-2xl font-mono">
          <div className="text-gray-400 ">
            It's weird, but it can be hard to start building something from
            scratch.
            <br />
            We need abstraction as a starting point, which is inspired by what
            we see.
            <br />
            Pixel abstraction is far from artwork, <br />
            but minimalism will allow you to concentrate on your own feelings
            <br /> and use the saved drawing as a stencil for a future work.
          </div>

          <h1 className="m-auto pt-14 pb-4 text-3xl">How create Poster:</h1>
          <h3 className="pb-20 text-2xl font-mono text-gray-500">
            Use mouse with white rectangle as a Stamp-style paint tool.
            <br />
            Print with black rectangle on the right side PixPoster.
            <br />
            Dive into with search picture
            <br />
            If you want save your work - use button Save and wait a few seconds
          </h3>
        </div>
      </div>
      <div className="text-center pb-8">
        <button
          className="inline-flex justify-center rounded-none border border-gray-300 bg-white px-2 py-4 text-lg font-mono font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={props.onClick}
        >
          Create Pixel Art
        </button>
      </div>
    </>
  );
}
