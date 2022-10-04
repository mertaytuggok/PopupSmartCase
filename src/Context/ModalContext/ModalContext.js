import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [modalName, setModalName] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [position, setPosition] = useState();
  const [title, setTitle] = useState();
  const [input, setInput] = useState();
  const [button, setButton] = useState();
  const [comment, setComment] = useState();

  const data = {
    modalName,
    setModalName,
    size,
    setSize,
    color,
    setColor,
    position,
    setPosition,
    title,
    setTitle,
    input,
    setInput,
    button,
    setButton,
    comment,
    setComment,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useModal = () => useContext(Context);
export default Provider;
