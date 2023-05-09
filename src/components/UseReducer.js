import React, {useReducer } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todo: "",
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
}

const UseReducer = () => {
  const initialState = {
    todos: [],
    todo: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submitHandler = (e) => {
    e.preventDefault(); // formun submit işlemini engellemek için
    if (state.todo) {
      dispatch({ type: "ADD_TODO", payload: state.todo }); /* todo ekleme işlemi için action dispatch ediyoruz */
    }
  };

  const deleteHandler = (index) => {
    dispatch({ type: "DELETE_TODO", payload: index });  /* todo silme işlemi için action dispatch ediyoruz */
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg={6}>
            <Form onSubmit={submitHandler}>
              <div className="flex justify-center align-items-center">
                <Input
                  className="w-35"
                  value={state.todo}
                  onChange={(e) =>
                    dispatch({ type: "UPDATE_TODO", payload: e.target.value })
                  } /* todo güncelleme işlemi için action dispatch ediyoruz */
                />
                <Button disabled={!state.todo} type="submit" variant="success">
                  Add
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={6}>
            <ul>
              {state.todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <Button className="justify-end" onClick={() => deleteHandler(index)} variant="danger">
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UseReducer;
