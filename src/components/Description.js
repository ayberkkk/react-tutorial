import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import useStateImg from "../assets/images/useState.png";
import useReducerImg from "../assets/images/useReducer.png";
import useCallbackImg from "../assets/images/useCallback.png";
import useEffectImg from "../assets/images/useEffect.png";
import useRefImg from "../assets/images/useRef.png";
import memoImg from "../assets/images/memo.png";
import { DescTitle } from "./Styles/Styled";

const Description = () => {
  const descriptions = [
    {
      title: "useState",
      description:
        "useState is used to manage the state of the component. Returns a state variable and a function to update that variable.",
      image: useStateImg,
    },
    {
      title: "useReducer",
      description:
        "useReducer is used for complex state management. It takes a state and an action reducer function.",
      image: useReducerImg,
    },
    {
      title: "useCallback",
      description:
        "useCallback is used to hold a function in memory. Functions in components are rendered every time it renders, so useCallback can be used to prevent it from being constantly rebuilt in memory.",
      image: useCallbackImg,
    },
    {
      title: "useEffect",
      description:
        "useEffect is used to perform side effects (retrieve data, update data, listen for events, etc.) in response to the component's lifecycle.",
      image: useEffectImg,
    },
    {
      title: "useRef",
      description:
        "useRef is used to hold a value and updating the value does not affect the state of the component even if the component is re-rendered.",
      image: useRefImg,
    },
    {
      title: "React.memo()",
      description:
        "React.memo is a React optimization used to prevent unnecessary re-rendering of a component. It prevents the component from being re-rendered unless its props are changed. By using React.memo, you can improve the performance of components and make your application run more efficiently.",
      image: memoImg,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mx-auto">
      <Row>
        {descriptions.map((item, index) => (
          <Col lg="6" key={index} className="d-lg-flex mt-2 align-items-center">
            <div>
              <DescTitle className="title">{item.title}</DescTitle>
              <article>
                <p>{item.description}</p>
              </article>
            </div>
            <div className="image-container">
                <img
                  className="img-fluid  object-contain h-64 w-full cursor-pointer"
                  src={item.image}
                  title={item.title}
                  alt={item.title}
                  onClick={() => handleImageClick(item.image)}
                />
              </div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={modalImage} alt="Modal" className="img-fluid" />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Description;
