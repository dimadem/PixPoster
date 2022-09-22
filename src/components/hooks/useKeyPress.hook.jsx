// https://devtrium.com/posts/how-keyboard-shortcut

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";
import { AppStateContext, AppDispatchContext } from "../redux/AppStateProvider";

export default function useKeyPress({ keys, callback, node = null }) {
  const { json } = useContext(AppStateContext);
  const dispatch = useContext(AppDispatchContext);
  // implement the callback ref pattern
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event) => {
      //  10 images to ctrl + 0-9 keys
      if (event.altKey && event.key === "1") {
        let ev = json.data[0].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "2") {
        let ev = json.data[1].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "3") {
        let ev = json.data[2].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "4") {
        let ev = json.data[3].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "5") {
        let ev = json.data[4].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "6") {
        let ev = json.data[5].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "7") {
        let ev = json.data[6].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "8") {
        let ev = json.data[7].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "9") {
        let ev = json.data[8].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      if (event.altKey && event.key === "0") {
        let ev = json.data[9].images.original.url;
        dispatch({ type: "SET_DATA", payload: ev });
      }

      // arrows goes to one pixel result
      if (event.shiftKey && event.key === "ArrowRight") {
        dispatch({ type: "SET+OFFSETX" });
      }

      if (event.shiftKey && event.key === "ArrowLeft") {
        dispatch({ type: "SET-OFFSETX" });
      }

      if (event.shiftKey && event.key === "ArrowUp") {
        dispatch({ type: "SET-OFFSETY" });
      }

      if (event.shiftKey && event.key === "ArrowDown") {
        dispatch({ type: "SET+OFFSETY" });
      }
      // scale picture
      if (event.altKey && event.key === "ArrowUp") {
        dispatch({ type: "SET+SCALE" });
      }

      if (event.altKey && event.key === "ArrowDown") {
        dispatch({ type: "SET-SCALE" });
      }
    },
    [dispatch, json]
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
