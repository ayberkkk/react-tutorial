import "./App.css";
import "./Sass.scss";
import { Container, Row } from "react-bootstrap";
import StylesComponent from "./components/Styles/StylesComponent";
import Button from "./components/Button";
import { createElement } from "react";
import CustomTab from "./components/CustomTab";

function App() {
  const todolist = ["todo-1", "todo-2", "todo-3"];
  const todolist2 = ["todo-1", "todo-2", "todo-3"];
  const ul = createElement(
    "ul",
    null,
    todolist2.map((todo) => createElement("li", null, todo))
  );
  const h1 = createElement("h1", null, "custom h1 element");

  // return createElement(
  //   "main",
  //   {
  //     id: "main",
  //     className: "App",
  //   },
  //   h1,
  //   ul
  // );

  const searchFunc = () => {
    alert("Search");
  };

  return (
    <main id="main" className="App">
      <Container>
        <Row>
          {/* 
      <h3>{process.env.NODE_ENV}</h3>
     development logo 
      {process.env.NODE_ENV === "development" && (
        <>
          <p>{process.env.REACT_APP_API_URL}</p>
          <img src={logo} alt="logo" title="logo" />
        </>
      )}
      */}
          <CustomTab activeTab={0}>
            <CustomTab.Panel title="Style">
              {" "}
              <StylesComponent />
            </CustomTab.Panel>
            <CustomTab.Panel title="Custom Elem">
              <p style={{ color: "pink" }}>Inline CSS</p>
              <label htmlFor="search" tabIndex={2}>
                Search
              </label>
              <input
                type="text"
                id="search"
                tabIndex={1}
                onClick={searchFunc}
              />{" "}
              <input
                type="text"
                id="search"
                tabIndex={1}
                onClick={() => alert("Search-2")}
              />
              <div className="flex align-baseline justify-center mt-1">
                <Button text="Custom Button " variant="success"></Button>
                <Button text="Custom Button " variant="danger"></Button>
                <Button text="Custom Button " variant="warning"></Button>
                <Button text="Custom Button "></Button>
              </div>
            </CustomTab.Panel>
            <CustomTab.Panel title="Test">
              {h1}
              <ul>
                {todolist.map((todo) => (
                  <li key={todo}>{todo}</li>
                ))}
              </ul>
            </CustomTab.Panel>
          </CustomTab>
        </Row>
      </Container>
    </main>
  );
}

export default App;
