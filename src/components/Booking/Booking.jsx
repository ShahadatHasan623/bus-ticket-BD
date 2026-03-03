import React from "react";
import Task from "./Task";
import Resolved from "./Resolved";

const Booking = ({customers}) => {
  return (
    <div className="my-10 space-y-2">
      <Task customers={customers}></Task>
      <Resolved></Resolved>
    </div>
  );
};

export default Booking;
