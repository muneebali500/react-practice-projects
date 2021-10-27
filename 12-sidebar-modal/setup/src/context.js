import React, {useState} from 'react';
const AppContext = React.createContext();

export default function AppProvider({children}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    console.log(`open modal`);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    console.log(`close modal`);
    setIsModalOpen(false);
  };

  return <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
}

export {AppContext};
