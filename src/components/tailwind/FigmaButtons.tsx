import React from "react";
import { ButtonTw } from "./ButtonTw";
// import "../../index.scss";
// import "../../App.scss";

const FigmaButtons = () => {
  return (
    <>
      <div className="w-1/2 mx-auto my-20">
        <h4 className="text-orange-500">Figma code</h4>
        <ButtonTw />
        <ButtonTw property1="secondary-button" />
        <ButtonTw property1="secondary-disabled" />
        <h4 className="bg-proba">Own logix</h4>
        <button className="button secondary-button">Hover us :)</button>
        <button disabled className="button secondary-button">
          Disabled
        </button>
      </div>
    </>
  );
};

export default FigmaButtons;