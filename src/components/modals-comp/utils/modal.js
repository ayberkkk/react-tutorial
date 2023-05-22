import store from "../stores";
import { append, destroy, destroyAll } from "../stores/modal";
import { useSelector } from "react-redux";

export const useModals = () => useSelector((state) => state.modal.modals);

export const createModal = (name,data =false) => store.dispatch(append({
    name,
    data
}))

export const destroyModal = () => store.dispatch(destroy());

export const destroyAllModal = () => store.dispatch(destroyAll());
