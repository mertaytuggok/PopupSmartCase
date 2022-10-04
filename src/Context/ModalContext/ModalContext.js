import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [modalName, setModalName] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [position, setPosition] = useState();

  const data = {
    modalName,
    setModalName,
    size,
    setSize,
    color,
    setColor,
    position,
    setPosition
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useModal = () => useContext(Context);
export default Provider;
