import React from "react";
import { useSelector } from "react-redux";
import { CarsList } from "./CarsList";
import { ClientsList } from "./ClientsList";
import { OperationsList } from "./OperationsList";
import { makeStyles } from "@material-ui/core/styles";

export const ListsWrapper = () => {
  const styles = makeStyles(() => ({
    root: {
      maxWidth: "100%",
      borderRadius: "1rem",
    },
    selected: {
      color: "#b8632b",
    },
  }));

  const clickedTab = useSelector((state) => state.target.clickedTab);

  return (
    <div className="lists">
      {clickedTab === "clientsList" && <ClientsList styles={styles} />}
      {clickedTab === "carsList" && <CarsList styles={styles} />}
      {clickedTab === "operationsList" && <OperationsList styles={styles} />}
    </div>
  );
};
