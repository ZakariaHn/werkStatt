import React from "react";
import { CarsList } from "./CarsList";
import { ClientsList } from "./ClientsList";
import { OperationsList } from "./OperationsList";
import { useSelector } from "react-redux";

export const ListsWrapper = () => {
  const isClicked = useSelector((state) => state.target.isClicked);

  return (
    <div className="lists">
      {isClicked === "clientsList" && <ClientsList />}
      {isClicked === "carsList" && <CarsList />}
      {isClicked === "operationsList" && <OperationsList />}
    </div>
  );
};
