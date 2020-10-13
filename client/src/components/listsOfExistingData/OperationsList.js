import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const OperationsList = (props) => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/operations");
      setOperations(res.data);
    };
    fetchdata();
  }, []);

  const renderLists = () => {
    return operations.map((operation) => (
      <Link
        to="operationInfos"
        key={operation._id}
        onClick={() => {
          props.getSelectedOperation(operation);
        }}
      >
        <li>{operation.name}</li>
      </Link>
    ));
  };

  return (
    <div className="operationInfos">
      <ul>{renderLists()}</ul>
    </div>
  );
};
