import React, { use } from "react";
import Customer from "../Customer/Customer";

const Customers = ({ ticket,customers,setCustomers}) => {
  const busTicket = use(ticket);
  const handleAddTask =(customer)=>{
      const newCustomer =[...customers,customer]
      setCustomers(newCustomer)
  }
  return (
    <div className="my-10 md:px-0 px-5">
        <h1 className="mb-5 text-2xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {busTicket.map((ticket) => (
          <Customer key={ticket.id} handleAddTask={handleAddTask}  ticket={ticket}></Customer>
        ))}
      </div>
    </div>
  );
};

export default Customers;
