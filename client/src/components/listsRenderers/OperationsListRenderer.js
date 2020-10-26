import React, { useEffect } from "react";
import { fetchOperationsAction } from "../../store/actions/operationsAction";
import { useDispatch, useSelector } from "react-redux";
import { SET_TARGET } from "../../store/actions/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { helpDeleteOperation } from "../../store/helpers/index";

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
          <FontAwesomeIcon className="icon" icon={faEdit} />
          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={helpDeleteOperation(operation.name)}
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
