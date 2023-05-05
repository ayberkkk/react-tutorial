import "./App.css";
import logo from "./logo.svg";
import Test from "./components/Test";
import { Title } from "./components/Styled";
import Bootstrap from "./components/Bootstrap";
import Tailwind from "./components/Tailwind";

function App() {
  return (
    <div className="App">
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
      <p>John Doe</p>
      <Test />
      <Title>Styled Title Component</Title>
      <Title theme="dark">Styled Dark Title Component</Title>
      <Bootstrap></Bootstrap>
      <Tailwind/>
    </div>
  );
}

export default App;
