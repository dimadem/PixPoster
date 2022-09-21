export default function Slider(props) {
  return (
    <input
      type="range"
      min={props.min}
      max={props.max}
      step={props.stepRange}
      value={props.defaultValue}
      onChange={props.onChange}
      className="grayscale contrast-200 brightness-90"
    />
  );
}
