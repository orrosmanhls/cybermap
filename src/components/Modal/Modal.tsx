import React from "react";
import { useTransition, useSpring, animated } from "react-spring";

import { useModal, useModalUpdate } from "../../contexts/ModalContext";
import { Background, Exit, ExitContainer, ModalWrapper } from "./styles";
import ModalTabContent from "./ModalTabContent";
import ModalCompanyContent from "./ModalCompanyContent";

interface Props {}

const Modal: React.FC<Props> = () => {
  const { toggleModal } = useModalUpdate();
  const { showModal, modalType } = useModal();
  const { type, company, tab } = modalType;

  // opacity transition
  const transitions = useTransition(showModal, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    initial: {
      position: "absolute",
    },
    reverse: showModal,
    config: {
      duration: 300,
    },
    onRest: toggleModal,
  });

  // modal grow animation
  const { x } = useSpring({
    from: { x: 0 },
    x: showModal ? 1 : 0,
    config: { duration: 300 },
  });

  // grow animation easing
  const easeOut = x.to({
    range: [0, 0.5, 1],
    output: [0.5, 0.875, 1],
  });

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={{ ...styles, position: "absolute", zIndex: 9999 }}>
          <Background onClick={toggleModal}>
            <animated.div style={{ scale: easeOut }}>
              <ModalWrapper onClick={stopPropagation}>
                <Exit onClick={toggleModal}>X</Exit>
                {/* <ExitContainer><Exit onClick={toggleModal}>X</Exit></ExitContainer> */}
                {type === "tab" && <ModalTabContent tab={tab} />}
                {type === "company" && (
                  <ModalCompanyContent company={company} />
                )}
              </ModalWrapper>
            </animated.div>
          </Background>
        </animated.div>
      )
  );
};

export default Modal;
