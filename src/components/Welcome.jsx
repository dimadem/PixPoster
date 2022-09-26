import Header from "./Header";

export default function Welcome(props) {
  return (
    <>
      <Header />
      <div className="dark:bg-black">
        <div className="mx-auto sm:px-10 text-2xl font-mono">
          <div className=" px-10 text-justify text-gray-400  dark:text-gray-50">
            It's weird, but it might be hard to start building something from
            scratch. What if we use abstraction as starting point, which
            inspired by imagine and compiling. <br />
            Pixel abstraction is far from artwork, but minimalism will allow us
            to concentrate on feelings and use saved posters as a stencil for a
            future work.
          </div>

          <h1 className="text-center m-auto pt-14 pb-4 text-3xl dark:text-white">
            How to create a PixPoster:
          </h1>
          <h3 className="px-10 pb-20 text-2xl font-mono text-gray-500 dark:text-gray-50">
            (1) Use white rectangle as a Stamp-style paint tool
            <br />
            (2) Print with black rectangle on the right side PixPoster
            <br />
            (3) Dive into with search picture
            <br />
            (4) Save your work - use button Save and wait a few seconds
          </h3>
        </div>
      </div>
      <div className="text-center pb-40 dark:bg-black">
        <button
          className="inline-flex justify-center rounded-none border border-gray-300 bg-white px-2 py-4 text-lg font-mono font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-white dark:bg-black dark:border-black dark:hover:border-white"
          onClick={props.onClick}
        >
          Create PixPoster
        </button>
      </div>
    </>
  );
}
