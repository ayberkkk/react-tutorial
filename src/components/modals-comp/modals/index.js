import modalData from "../modal";
import { useModals, destroyModal } from "../utils/modal";

export default function Modal() {
  const modals = useModals();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {modals.map((modal) => {
        const m = modalData.find((m) => m.name === modal.name);
        console.log(m);
        return (
          <div className="hidden last:block bg-white rounded text-center p-3">
            <m.element data={modal.data} close={destroyModal} />
          </div>
        );
      })}
    </div>
  );
}
