import React from "react";
import Modal from "./modal";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  altText,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <img
        src={imageUrl}
        alt={altText}
        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
      />
    </Modal>
  );
};

export default ImageModal;
