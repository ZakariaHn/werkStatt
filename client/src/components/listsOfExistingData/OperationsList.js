import React, { useState, useEffect } from "react";
import axios from "axios";

export const OperationsList = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get("http://localhost:5000/api/operations");
      setOperations(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="operationsList">
      <ul>
        {operations.map((operation) => (
          <li key={operation._id}>{operation.name}</li>
        ))}
      </ul>
    </div>
  );
};
