import React from "react";
import { useTransition, useSpring, animated } from "react-spring";

import { Background, ExitButton, ModalWrapper } from "./styles";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const Modal: React.FC<Props> = ({ showModal, setShowModal }) => {
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
    onRest: () => setShowModal((prev) => !prev),
  });

  const { x } = useSpring({
    from: { x: 0 },
    x: showModal ? 1 : 0,
    config: { duration: 300 },
  });

  const easeOut = x.to({
    range: [0, 0.5, 1],
    output: [0.5, 0.875, 1],
  });

  const closeModal = () => {
    setShowModal(false);
  };

  // const onScroll: React.UIEventHandler<HTMLDivElement> = (e) => {
  //   console.log('hi');

  //   e.preventDefault();
  // }

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={{ ...styles, position: "absolute" }}>
          <Background onClick={closeModal}>
            <animated.div
              style={{
                scale: easeOut,
              }}
            >
              <ModalWrapper
                onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                  e.stopPropagation();
                }}
              >
                <ExitButton onClick={closeModal}>Close</ExitButton>
                {/* modal content */}
              </ModalWrapper>
            </animated.div>
          </Background>
        </animated.div>
      )
  );
};

export default Modal;
