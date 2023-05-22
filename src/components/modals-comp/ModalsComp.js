import React from "react";
import { useModals, createModal } from "./utils/modal";
import Modal from "./modals/index"

const ModalsComp = () => {
  const modals = useModals();
  return (
    <div>
      {modals.length > 0 && <Modal />}
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          createModal("login");
        }}
      >
        Open Modal
      </button>
    </div>
  );
};

export default ModalsComp;
