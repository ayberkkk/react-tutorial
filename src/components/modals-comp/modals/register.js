import { destroyModal } from "../utils/modal";
import Header from "./components/Header";

export default function registerModal({ data, close }) {
  return (
    <div className="w-[700px]">
      <Header title="Register" />
      <p>Register Modal</p>
      <p>Name: {data.name}</p>
      <p>SurName: {data.surname}</p>
      <p>Search: {data.search}</p>
      <button
        className="btn btn-outline-primary mr-2"
        onClick={() => {
          data.setSearch("New Search Word");
          close();
        }}
      >
        Update Search
      </button>
      <button className="btn btn-outline-danger" onClick={destroyModal}>
        Close
      </button>
    </div>
  );
}
