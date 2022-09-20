//https://devtrium.com/posts/how-keyboard-shortcut

// key commands (comp)
// const handleKeyPress = useCallback(
//   (event) => {
//     // event key
//     // console.log(event.key);

//     //  10 images to ctrl + 0-9 keys
//     if (event.altKey && event.key === "1") {
//       let ev = json.data[0].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "2") {
//       let ev = json.data[1].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "3") {
//       let ev = json.data[2].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "4") {
//       let ev = json.data[3].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "5") {
//       let ev = json.data[4].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "6") {
//       let ev = json.data[5].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "7") {
//       let ev = json.data[6].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "8") {
//       let ev = json.data[7].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "9") {
//       let ev = json.data[8].images.preview_gif.url;
//       setData(ev);
//     }

//     if (event.altKey && event.key === "0") {
//       let ev = json.data[9].images.preview_gif.url;
//       setData(ev);
//     }

//     // arrows goes to one pixel result
//     if (event.shiftKey && event.key === "ArrowRight") {
//       setOffsetX((prev) => prev + 5);
//     }

//     if (event.shiftKey && event.key === "ArrowLeft") {
//       setOffsetX((prev) => prev - 5);
//     }

//     if (event.shiftKey && event.key === "ArrowUp") {
//       setOffsetY((prev) => prev - 5);
//     }

//     if (event.shiftKey && event.key === "ArrowDown") {
//       setOffsetY((prev) => prev + 5);
//     }

//     if (event.altKey && event.key === "ArrowUp") {
//       setScale((prev) => prev + 0.1);
//     }

//     if (event.altKey && event.key === "ArrowDown") {
//       setScale((prev) => prev - 0.1);
//     }
//   },
//   [json]
// );

// useEffect(() => {
//   // focus on input form
//   // txtTitle.current.focus();

//   // attach the event listener
//   document.addEventListener("keydown", handleKeyPress);

//   // remove the event listener
//   return () => {
//     document.removeEventListener("keydown", handleKeyPress);
//   };
// }, [handleKeyPress]);

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export default function useKeyPress({ keys, callback, node = null }) {
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event) => {
      // check if one of the key is part of the ones we want
      if (keys.some((key) => event.key === key)) {
        callbackRef.current(event);
      }
    },
    [keys]
  );

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document;
    // attach the event listener
    targetNode && targetNode.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () =>
      targetNode && targetNode.removeEventListener("keydown", handleKeyPress);
  }, [handleKeyPress, node]);
}
