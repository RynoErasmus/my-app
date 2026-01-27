import { useState } from "react";
import ImageModal from "../../components/modals/imageModal";

function Qualifications() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentAltText, setCurrentAltText] = useState("");

  const images = [
    { id: 1, url: "src/assets/NSC.jpg", alt: "NSC" },
    { id: 2, url: "src/assets/UI.jpg", alt: "UI-Certificate" },
    { id: 3, url: "src/assets/UX.jpg", alt: "UX-Certificate" },
  ];

  const openModal = (url: string, alt: string) => {
    setCurrentImage(url);
    setCurrentAltText(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col bg-[#1D1616] max-w-full py-3 px-3 text-shadow-lg/100">
        <h1 className="text-center text-white">Education and Qualifications</h1>

        <div className="flex-col bg-[#22177A] px-3 py-4 text-white text-xl rounded-2xl">
          <p>
            Further Education and Training Certificate: Information Technology:
            Systems Development (User-interface Development) CTU Training
            Solutions
            <span className="text-[#FF0000] text-xl font-semibold px-2">
              (2023)
            </span>
          </p>
          <p>
            National Certificate: Information Technology (Systems Development)
            (User-Experience Development) CTU Training Solutions
            <span className="text-[#FF0000] text-xl font-semibold px-2">
              (2024)
            </span>
          </p>
          <p>
            National Senior Certificate Hoerskool Florida
            <span className="text-[#FF0000] text-xl font-semibold px-2">
              (2017-2021)
            </span>
          </p>
        </div>
        <h3 className="text-center text-white py-3">Certifications</h3>
        <div className="grid grid-cols-3 gap-3 py-3 ">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt={image.alt}
              onClick={() => openModal(image.url, image.alt)}
              className="cursor-pointer hover:opacity-40 duration-300 rounded-lg shadow-md w-full h-78.5 object-cover"
            />
          ))}
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageUrl={currentImage}
          altText={currentAltText}
        />
      </div>
    </>
  );
}

export default Qualifications;
