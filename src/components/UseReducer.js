import React, { useReducer, useCallback, memo, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Input } from "reactstrap";
import ReactMemo from "./ReactMemo";
import { BiLink } from "react-icons/bi";

// Reducer: Durum güncelleme işlemlerini gerçekleştiren fonksiyon
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
    case "SEARCH_TODO":
      return {
        ...state,
        search: action.value,
      };
    default:
      return state;
  }
}

const UseReducer = () => {
  const initialState = {
    todos: [],
    todo: "",
    search: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // submitHandler: Form gönderme işlemini gerçekleştirir
  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (state.todo) {
        dispatch({
          type: "ADD_TODO",
          payload: state.todo,
        }); 
      }
    },
    [state.todo, dispatch]
  );

  // handleInputChange: Input alanı değeri değiştiğinde çağrılır
  const handleInputChange = useCallback(
    (e) => {
      dispatch({ type: "UPDATE_TODO", payload: e.target.value });
    },
    [dispatch]
  );

  // deleteHandler: Bir todo öğesini siler
  const deleteHandler = (index) => {
    dispatch({
      type: "DELETE_TODO",
      payload: index,
    });
  };

  // searchHandler: Arama işlemini gerçekleştirir
  const searchHandler = (e) => {
    dispatch({
      type: "SEARCH_TODO",
      value: e.target.value,
    });
  };

  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [state.todos]);

  const handleScroll = useCallback(() => {
    if (listRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("Daha fazla öğe yükle!");
      }
    }
  }, []);

  useEffect(() => {
    let currentListRef = listRef.current; // listRef.current değerini kopyalıyoruz

    if (currentListRef) {
      currentListRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <section>
      <Container>
        <Row>
          <ReactMemo />
          <Col lg={12} className="mb-3">
            <Input
              type="text"
              placeholder="Search in Todo"
              value={state.search}
              onChange={searchHandler}
            />
          </Col>
          <Col lg={6}>
            <Form onSubmit={submitHandler}>
              <div className="flex justify-center align-items-center">
                <Input
                  className="todoInput"
                  value={state.todo}
                  onChange={handleInputChange}
                />
                <Button
                  disabled={!state.todo}
                  type="submit"
                  variant="success"
                  className="addBtn"
                >
                  Add
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={6}>
            <div
              className="overflow-auto"
              style={{ maxHeight: "400px" }}
              ref={listRef}
            >
              <ul>
                {state.todos
                  .filter((todo) =>
                    todo.toLowerCase().includes(state.search.toLowerCase())
                  )
                  .map((todo, index) => (
                    <li
                      className="flex justify-around align-items-center mt-1 w-100"
                      key={index}
                    >
                      <BiLink className="text-blue-900" style={{fontSize:"24px"}} />
                      <span className="font-semibold todo-items">{todo}</span>
                      <Button
                        onClick={() => deleteHandler(index)}
                        variant="danger"
                        className="deleteBtn"
                      >
                        Delete
                      </Button>
                    </li>
                  ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default memo(UseReducer);
