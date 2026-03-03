import React from "react";
import Task from "./Task";
import Resolved from "./Resolved";

const Booking = () => {
  return (
    <div className="my-10 space-y-2">
      <Task></Task>
      <Resolved></Resolved>
    </div>
  );
};

export default Booking;
