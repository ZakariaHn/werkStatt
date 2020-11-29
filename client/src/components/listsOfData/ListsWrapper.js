import React from "react";
import { useSelector } from "react-redux";
import { CarsList } from "./CarsList";
import { ClientsList } from "./ClientsList";
import { OperationsList } from "./OperationsList";
import { makeStyles } from "@material-ui/core/styles";

export const ListsWrapper = () => {
  let hover = { backgroundColor: "#303030" };
  let backgroundColor = "#303030";
  const styles = makeStyles(() => ({
    root: {
      maxWidth: "100%",
      borderRadius: "1rem",
      "&:hover": hover,
      "&$selected": {
        backgroundColor: backgroundColor,
        "&:hover": hover,
      },
    },
    selected: {
      backgroundColor: backgroundColor,
      border: "1px solid #d8a461",
      color: "#d8a461",
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
