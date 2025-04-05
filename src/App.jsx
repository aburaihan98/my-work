import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="bg-[#fafafa] py-10 ">
      <div className="w-11/12 mx-auto">
        <Header />
        <div className="py-10">
          <Users />
        </div>
      </div>
    </div>
  );
};

export default App;
