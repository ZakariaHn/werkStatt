import React, { useEffect } from "react";
import { fetchOperationsAction } from "../../store/actions/operationsAction";
import { useDispatch, useSelector } from "react-redux";
import {
  DELETE_OPERATION,
  EDIT_OPERATION,
  SET_TARGET,
} from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="li-buttons-wrapper" key={operation._id}>
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
            onClick={(_) =>
              dispatch({ type: EDIT_OPERATION, payload: operation })
            }
          />
          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={(_) =>
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
