import React from "react";
import { CarsList } from "./CarsList";
import { ClientsList } from "./ClientsList";
import { OperationsList } from "./OperationsList";
import { useSelector } from "react-redux";

export const ListsWrapper = () => {
  const clickedTab = useSelector((state) => state.target.clickedTab);

  return (
    <div className="lists">
      {clickedTab === "clientsList" && <ClientsList />}
      {clickedTab === "carsList" && <CarsList />}
      {clickedTab === "operationsList" && <OperationsList />}
    </div>
  );
};
