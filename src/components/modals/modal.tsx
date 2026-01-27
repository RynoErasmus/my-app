import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div
          className="relative max-w-3xl max-h-full overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 p-2 rounded-full hover:bg-gray-700 z-10"
            aria-label="Close Modal"
          >
            &times;
          </button>

          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
