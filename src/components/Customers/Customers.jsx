import React, { use } from "react";
import Customer from "../Customer/Customer";

const Customers = ({ ticket }) => {
  const busTicket = use(ticket);
  console.log(busTicket);
  return (
    <div className="my-10">
        <h1 className="mb-5 text-2xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {busTicket.map((ticket) => (
          <Customer key={ticket.id} ticket={ticket}></Customer>
        ))}
      </div>
    </div>
  );
};

export default Customers;
