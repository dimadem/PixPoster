export default function Welcome(props) {
  return (
    <>
      <div className="text-center">
        <div className="pb-8">
          <div className="pt-5 pb-24 font-sans hover:font-thin">
            <h1 className="m-auto text-3xl ">Welcome to PixPoster!</h1>
          </div>
          <div className="pb-4 font-sans">
            <h1 className=" m-auto text-2xl hover:font-thin">
              How create Poster:
            </h1>
            <h3 className="pb-20 text-2xl">
              Use mouse with green rectangle as a Stamp on a White paper.
              <br />
              Take a Stamp and it prints with purple rectangle on the right side
              PixPoster.
              <br />
              Dive into with search input - write some words that may inspire
              you,
              <br />
              If you want save your work - use button Save and wait a few
              seconds!
            </h3>
            <div className=" pb-2">
              <span className="text-3xl">
                here some keyboard shortcuts that will help you:
              </span>
            </div>
            <div className="grid grid-rows-4 grid-cols-2 pb-32">
              <span className="text-right text-lg">Change:</span>
              <h1 className="text-left pl-3">
                ALT + CTRL + 1,2,3,4,5,6,7,8,9,0
              </h1>
              <span className="text-right text-lg">Navigate:</span>
              <h1 className="text-left pl-3">
                SHIFT + ArrowUp, ArrowDown, ArrowLeft, ArrowRight
              </h1>
              <span className="text-right text-lg">Scale:</span>
              <h1 className="text-left pl-3">ALT + ArrowUp, ArrowDown</h1>
              <span className="text-right text-lg">Reset page:</span>
              <h1 className="text-left pl-3">CTRL + R</h1>
            </div>
          </div>
        </div>
        <div className="Button block">
          <button
            className="inline-flex justify-center rounded-none border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={props.onClick}
          >
            Create Pixel Art
          </button>
        </div>
      </div>
    </>
  );
}
