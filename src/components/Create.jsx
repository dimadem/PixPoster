// import PropTypes from "prop-types";
import Header from "./UI/Header";
import UiFrame from "./UiFrame";

export default function Create() {
  // // PropTypes
  // Create.propTypes = {
  //   data: PropTypes.string.isRequired,
  // };

  return (
    <>
      <div className="min-h-full text-center bg-transparent">
        <Header />
        <UiFrame />
      </div>
    </>
  );
}
