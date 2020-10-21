import React, { useEffect } from "react";
import { fetchOperationsAction } from "../../store/actions/operationsAction";
import { useDispatch, useSelector } from "react-redux";
import { SET_TARGET } from "../../store/actions/types";

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
      <li
        key={operation._id}
        onClick={() => {
          dispatch({ type: SET_TARGET, payload: operation });
        }}
      >
        {operation.name}
      </li>
    ));
  };

  return (
    <div className="operationInfos">
      <ul>{renderList()}</ul>
    </div>
  );
};
