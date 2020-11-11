import React from "react";
import { GetSelectedItem } from "./GetSelectedItem";
import { useDispatch, useSelector } from "react-redux";
import { CLICKED } from "../../store/actions/types";

export const SelectedItemWrapper = () => {
  const target = useSelector((state) => state.target.item);
  const dispatch = useDispatch();

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
      {Object.keys(target).length > 0 && <GetSelectedItem target={target} />}
      {handleAddButton()}
    </div>
  );
};
