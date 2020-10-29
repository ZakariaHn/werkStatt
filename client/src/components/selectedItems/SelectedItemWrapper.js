import React from "react";
import { GetSelectedItem } from "./GetSelectedItem";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON_CLICKED } from "../../store/actions/types";

export const SelectedItemWrapper = () => {
  const target = useSelector((state) => state.target.item);
  const dispatch = useDispatch();

  const handleAddButton = () => (
    <div className="buttonWrapper">
      {target.hasOwnProperty("engine") && (
        <button
          onClick={() =>
            dispatch({
              type: BUTTON_CLICKED,
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
              type: BUTTON_CLICKED,
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
