import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Modal = forwardRef(function Modal({ children, actionName }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 ronded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right ">
        <Button>{actionName}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
