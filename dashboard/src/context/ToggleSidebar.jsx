import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleSidebar = ({ children }) => {
  const [open, setOpen] = useState(true);
  const setIcon = () => {
    setOpen((prev) => !prev);
  };
  const passing = {
    open,
    setIcon,
    setOpen,
  };
  return (
    <ToggleContext.Provider value={passing}>{children}</ToggleContext.Provider>
  );
};

