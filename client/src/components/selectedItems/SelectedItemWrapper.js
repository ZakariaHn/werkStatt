import React from "react";
import { GetSelectedItem } from "./GetSelectedItem";
import { useDispatch, useSelector } from "react-redux";
import { CLICKED } from "../../store/actions/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";

export const SelectedItemWrapper = () => {
  const target = useSelector((state) => state.target.item);
  const dispatch = useDispatch();

  const Transition = {
    pageVariants: {
      initial: {
        opacity: 0,
        x: "-100vw",
        scale: 0.8,
      },
      in: {
        opacity: 1,
        x: 0,
        scale: 1,
      },
      out: {
        opacity: 0,
        x: "100vw",
        scale: 1.2,
      },
    },
    pageTransition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
    pageStyle: {
      position: "absolute",
    },
  };

  /* Function determains which button should be rendered 
     upon the payload sent to the state as a strig      */

  const handleAddButton = () => (
    <div className="buttonWrapper">
      {target.hasOwnProperty("engine") && (
        <button
          onClick={() =>
            dispatch({
              type: CLICKED,
              payload: "addOperation",
            })
          }
        >
          Add Operation
        </button>
      )}

      {target.hasOwnProperty("address") && (
        <button
          onClick={() =>
            dispatch({
              type: CLICKED,
              payload: "addCar",
            })
          }
        >
          Add Car
        </button>
      )}
    </div>
  );

  return (
    <div className="details">
      {Object.keys(target).length === 0 && (
        <div className="logo">
          <FontAwesomeIcon icon={faLaravel} />
        </div>
      )}

      {Object.keys(target).length > 0 && (
        <GetSelectedItem target={target} Transition={Transition} />
      )}
      {handleAddButton()}
    </div>
  );
};
