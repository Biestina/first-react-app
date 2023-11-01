import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../../index.scss";

type Props = {
  property1?: string
}

export const ButtonTw = ({ property1 = "primary" }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "primary",
  });

  return (
    <div
      className={`button ${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="div">
        {["primary-disabled", "primary-hover", "primary"].includes(
          state.property1
        ) && <>Primary</>}

        {["secondary-button", "secondary-disabled", "secondary-hover"].includes(
          state.property1
        ) && <>Secondary</>}
      </div>
    </div>
  );
};

function reducer(state: { property1: string; }, action: any) {
  if (state.property1 === "primary") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "primary-hover",
        };
    }
  }

  if (state.property1 === "primary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "primary",
        };
    }
  }

  if (state.property1 === "secondary-button") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "secondary-hover",
        };
    }
  }

  if (state.property1 === "secondary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "secondary-button",
        };
    }
  }

  return state;
}

ButtonTw.propTypes = {
  property1: PropTypes.oneOf([
    "primary-hover",
    "primary",
    "primary-disabled",
    "secondary-hover",
    "secondary-button",
    "secondary-disabled",
  ]),
};
