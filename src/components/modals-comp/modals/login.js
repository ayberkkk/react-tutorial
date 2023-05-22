import React, { useState } from "react";
import { createModal } from "../utils/modal";
import Header from "./components/Header";

export default function LoginModal({ data, close }) {
  const [search, setSearch] = useState("");

  return (
    <div className="w-[500px]">
      <Header title="Login" />
      <input
        className="form-control"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Search : {search}</p>
      <p>Login Modal</p>
      <button
        className="btn btn-outline-info mr-2"
        onClick={() =>
          createModal("register", {
            name: "John",
            surname: "Doe",
            search,
            setSearch
          })
        }
      >
        Register Modal
      </button>
      <button className="btn btn-outline-danger" onClick={close}>
        Close
      </button>
    </div>
  );
}
