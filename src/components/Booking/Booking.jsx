import React from "react";
import Task from "./Task";
import Resolved from "./Resolved";

const Booking = ({customers,handleResolvedTask,resolved}) => {
  return (
    <div className="my-10 space-y-2">
      <Task customers={customers} handleResolvedTask={handleResolvedTask}></Task>
      <Resolved resolved={resolved}></Resolved>
    </div>
  );
};

export default Booking;
