import React from "react";

const Task = ({ customers }) => {
  return (
    <div>
      <h1 className="text-xl font-bold">Task Status</h1>
      {customers.length === 0 ? (
        <p>Select a ticket to add to Task Status</p>
      ) : (
        <div>
          {customers.map((task) => (
            <div key={task.id} className="bg-[#FFFFFF] p-5 my-3 rounded-xl space-y-2">
              <p>{task.title}</p>
              <button className="btn btn-success w-full">Complete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Task;
