import React, { useState, useContext, createContext } from "react";
import { ICompany } from "../features/map/map.types";

type ModalType = {
  type?: "tab" | "company";
  company?: ICompany;
  tab?: string;
} | null;

const ModalContext = createContext(null);
const ModalUpdateContext = createContext(null);

export const useModal = () => useContext(ModalContext);
export const useModalUpdate = () => useContext(ModalUpdateContext);

export const ModalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>({ type: null });
  const toggleModal = () => {
    // TODO: Find a better way to implement the line below
    document.body.style.overflow = showModal ? "hidden" : "unset";
    setShowModal((prevState) => !prevState);
  };

  const updateModalType = (modalType: ModalType = null) => {
    setModalType(modalType);
  };

  const useModalValue = {
    showModal,
    modalType,
  };

  const useModalUpdateValue = {
    updateModalType,
    toggleModal,
  };

  return (
    <ModalContext.Provider value={useModalValue}>
      <ModalUpdateContext.Provider value={useModalUpdateValue}>
        {children}
      </ModalUpdateContext.Provider>
    </ModalContext.Provider>
  );
};
