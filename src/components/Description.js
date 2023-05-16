import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DescTitle } from "./Styles/Styled";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import useStateImg from "../assets/images/useState.png";
import useReducerImg from "../assets/images/useReducer.png";
import useCallbackImg from "../assets/images/useCallback.png";
import useEffectImg from "../assets/images/useEffect.png";
import useRefImg from "../assets/images/useRef.png";
import useContextImg from "../assets/images/useContext.png";
import memoImg from "../assets/images/memo.png";
import rrDomImg from "../assets/images/rrDom.png";
import useParamsImg from "../assets/images/useParams.png";
import outletImg from "../assets/images/outlet.png";
import useSearchParamsImg from "../assets/images/useSearchParams.png";
import useNavigateImg from "../assets/images/useNavigate.png";
import useLocationImg from "../assets/images/useLocation.png";
import useRoutersImg from "../assets/images/useRouters.png";

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
      title: "useContext",
      description:
        "useContext is a hook used to access a context object in React. Context allows values to be passed from a component to child components so you don't have to pass data via props. The useContext hook is used to easily access the values in the context object.A context object is typically created with a createContext function and creates a field where values are supplied through the Provider component. These values are passed to the context object as values and become accessible to child components.",
      image: useContextImg,
    },
    {
      title: "React.memo()",
      description:
        "React.memo is a React optimization used to prevent unnecessary re-rendering of a component. It prevents the component from being re-rendered unless its props are changed. By using React.memo, you can improve the performance of components and make your application run more efficiently.",
      image: memoImg,
    },
    {
      title: "react-router-dom",
      description:
        "react-router-dom is a library that facilitates routing operations in React applications. This library is the browser side package of the React Router project designed for web applications. React Router provides the ability to navigate between different pages and URLs in web applications. react-router-dom is a customized version of React Router for web projects and handles browser-based routing.",
      image: rrDomImg,
    },
    {
      title: "useParams",
      description:
        "It's a hook provided by the React Router. Allows you to get dynamic route parameters. For example, when you define a route like /users/:id, you can access this dynamic parameter with the useParams hook.",
      image: useParamsImg,
    },
    {
      title: "Outlet",
      description:
        "It is a component provided by React Router. It is used as a placeholder component and represents the content displayed within the <Switch> component used in route definitions. Used to map different components to different URLs when defining multiple routes.",
      image: outletImg,
    },
    {
      title: "useSearchParams",
      description:
        "It's a hook provided by the React Router. It gives you access to the search parameters in the URL. Search parameters are in the URL in query string format.",
      image: useSearchParamsImg,
    },
    {
      title: "useNavigate",
      description:
        "It's a hook provided by the React Router. It allows you to programmatically do page redirects. It can be used to redirect to a specific URL or leave the current page.",
      image: useNavigateImg,
    },
    {
      title: "useLocation",
      description:
        "It's a hook provided by the React Router. Allows you to access the information of the current URL. You can access the path, search and hash information of the URL.",
      image: useLocationImg,
    },
    {
      title: "useRoutes",
      description:
        "It's a hook provided by the React Router. It allows you to define routes and use URLs to map to components. It can be used to manage multiple routes and assign different components to different URLs.",
      image: useRoutersImg,
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
      <Helmet>
        <title>React Tutorial | Description</title>
      </Helmet>
      <h3 className="text-center mb-4">
        Bu projede kullanılan React bileşenleri
      </h3>
      <Row>
        {descriptions.map((item, index) => (
          <Col lg="6" key={index} className="d-lg-flex mt-2 align-items-center">
            <div className="p-4">
              <DescTitle className="text-xl font-bold">{item.title}</DescTitle>
              <article>
                <p>{item.description}</p>
              </article>
            </div>
            <div className="image-container">
              <LazyLoadImage
                effect="blur" // Add a blur effect while loading
                className="img-fluid object-contain h-64 w-full cursor-pointer"
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
