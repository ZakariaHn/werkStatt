import React, { useEffect, useState } from "react";
import { v4 as id } from "uuid"; // we should fix this
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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "50%",
    borderRadius: "1rem",
  },
  selected: {
    color: "#b8632b",
  },
}));
export const OperationsList = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

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
