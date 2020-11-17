import React, { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { fetchOperationsAction } from "../../store/actions/operationsAction";
import {
  CLICKED,
  DELETE_OPERATION,
  SET_TARGET,
} from "../../store/actions/types";
import ListItem from "@material-ui/core/ListItem";

export const OperationsList = (props) => {
  const classes = props.styles();

  const dispatch = useDispatch();

  const [selectedIndex, setSelectedIndex] = useState(null);

  const allOperations = useSelector(
    (state) => state.operations.operationsArray
  );

  useEffect(() => {
    dispatch(fetchOperationsAction());
  }, [dispatch]);

  const handleEditOperation = (operation) => {
    dispatch({ type: SET_TARGET, payload: operation });
    dispatch({ type: CLICKED, payload: "editOperation" });
  };

  const handleDeleteOperation = (operation) => {
    if (window.confirm(`Are you sure you want to delete ${operation.name} ?`)) {
      return dispatch({ type: DELETE_OPERATION, payload: operation._id });
    }
  };

  const handleOnClickListItem = (operation, index) => {
    setSelectedIndex(index);
    dispatch({ type: SET_TARGET, payload: operation });
    dispatch({ type: CLICKED, payload: "" });
  };

  const renderList = () => {
    return allOperations.map((operation, index) => (
      <div className="li-buttons-wrapper" key={id()}>
        <ListItem
          button
          className={classes.root}
          selected={selectedIndex === index}
          classes={{ selected: classes.selected }}
          onClick={() => handleOnClickListItem(operation, index)}
        >
          {operation.name}
        </ListItem>

        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            onClick={() => handleEditOperation(operation)}
          />

          <FontAwesomeIcon
            className="icon"
            icon={faTrash}
            onClick={() => handleDeleteOperation(operation)}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="operationInfos">
      <div className="selected-item-header">
        <small>
          {allOperations.length > 0
            ? "All registered operations"
            : "No operations registered"}
        </small>
      </div>
      <ul>{renderList()}</ul>
    </div>
  );
};
