import React from "react";
import { BiCalendar } from "react-icons/bi";


const Customer = ({ ticket,handleAddTask }) => {
   const {id,title,description,customer,priority,status,createdAt}=ticket
   const priorityColor = ticket.priority === 'High' || ticket.priority === 'Critical' 
    ? 'text-red-500' 
    : 'text-gray-500';
  return (
    <div onClick={()=>handleAddTask(ticket)} className=" bg-white rounded-xl shadow-sm border border-gray-100 p-5 font-sans">
      {/* Header Section: Title and Status */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-slate-800 leading-tight">
          {title}
        </h3>
        <span className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-green-600 rounded-full"></span>
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mb-6 line-clamp-2">
        {description}
      </p>

      {/* Footer Section: ID, Priority, Customer, and Date */}
      <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">
        <div className="flex gap-4 items-center">
          <span className="font-medium">#{ticket.id.split('-')[1] || id}</span>
          <span className={`font-bold uppercase tracking-wide text-xs ${priorityColor}`}>
            {priority} PRIORITY
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-slate-700">{customer}</span>
          <div className="flex items-center gap-1.5">
            <BiCalendar size={16} />
            <span>{new Date(createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
