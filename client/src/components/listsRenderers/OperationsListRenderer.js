import React, { useEffect } from "react";
import { v4 as id } from "uuid"; // we should fix this
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchOperationsAction } from "../../store/actions/operationsAction";
import {
  DELETE_OPERATION,
  EDIT_OPERATION,
  SET_TARGET,
} from "../../store/actions/types";

export const OperationsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOperationsAction());
  }, [dispatch]);

  const allOperations = useSelector(
    (state) => state.operations.operationsArray
  );

  const renderList = () => {
    return allOperations.map((operation) => (
      <div className="li-buttons-wrapper" key={id()}>
        <li
          onClick={() => {
            dispatch({ type: SET_TARGET, payload: operation });
          }}
        >
          {operation.name}
        </li>
        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            onClick={() =>
              dispatch({ type: EDIT_OPERATION, payload: operation })
            }
          />
          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={() =>
              dispatch({ type: DELETE_OPERATION, payload: operation._id })
            }
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="operationInfos">
      <ul>{renderList()}</ul>
    </div>
  );
};
