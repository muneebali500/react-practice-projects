import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const { openModal, openSidebar } = useContext(AppContext);

  return (
    <main>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </div>
      <div className="btn" onClick={openModal}>
        show modal
      </div>
    </main>
  );
};

export default Home;
