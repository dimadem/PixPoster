import { useRef } from "react";

//do slider
export default function Slider(props) {
  const slider = useRef();
  console.log("Slider: ", slider);
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.stepRange}
      value={props.defaultValue}
      className="w-30 h-20 m-0 origin-center rotate-90"
      onChange={props.onChange}
    />
  );
}
