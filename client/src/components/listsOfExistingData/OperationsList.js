import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { fetchOperationsAction } from "../../store/actions/operationAction";
import { useDispatch, useSelector } from "react-redux";
import { SET_OPERATION } from "../../store/actions/types";

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
      <Link
        to="operationInfos"
        key={operation._id}
        onClick={() => {
          dispatch({ type: SET_OPERATION, payload: operation });
        }}
      >
        <li>{operation.name}</li>
      </Link>
    ));
  };

  return (
    <div className="operationInfos">
      <ul>{renderList()}</ul>
    </div>
  );
};
