import { Suspense, useState } from "react";
import "./App.css";
import Booking from "./components/Booking/Booking";
import Customers from "./components/Customers/Customers";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const busTicketFetch = async()=>{
  const res = await fetch('../public/bus_ticket.json')
  return res.json()
}

const ticket =busTicketFetch()
function App() {

  const [customers,setCustomers] =useState([])
  const [resolved,setResolved] =useState([])

 const handleResolvedTask = (task) => {

  const remainingCustomers = customers.filter(
    (item) => item.id !== task.id
  );
  setCustomers(remainingCustomers);
  const newResolved = [...resolved, task];
  setResolved(newResolved);
};
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar></Navbar>
      <Home customers={customers} resolved={resolved}></Home>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-7xl mx-auto">
        <div className="md:col-span-9 ">
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
             <Customers customers={customers} setCustomers={setCustomers} ticket={ticket}></Customers>
          </Suspense>
        </div>
        <div className="md:col-span-3">
          <Booking handleResolvedTask={handleResolvedTask} customers={customers} resolved={resolved}></Booking>
        </div>
      </div>
    </div>
  );
}

export default App;
