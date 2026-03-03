import React from "react";
const Home = ({customers}) => {
  return (
    <div className="flex md:flex-row flex-col max-w-7xl mx-auto gap-5 my-10 md:px-0 px-5">
      <div className="card bg-linear-to-br from-[#632EE3] to-[#9F62F2] h-56 flex-1 flex justify-center items-center p-10">
        <h1 className="text-2xl font-semibold text-[#FFFF]">In-Progress</h1>
        <span className="text-xl text-[#FFF] font-semibold">{customers.length}</span>
      </div>
      <div className="card bg-linear-to-br from-[#54CF68] to-[#00827A] h-56 flex-1 flex justify-center items-center p-10">
        <h1 className="text-2xl font-semibold text-[#FFF]">Resolved</h1>
        <span className="text-xl text-[#FFF] font-semibold">0</span>
      </div>
    </div>
  );
};

export default Home;
