import { useState } from "react";
import { Contact } from "./Contact";

export function Hero() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Open the form
  const openForm = () => setIsFormOpen(true);

  // Close the form
  const closeForm = () => setIsFormOpen(false);

  return (
    <div className="ml-6 mt-10 md:ml-[90px] md:mt-32 flex md:flex-row flex-col">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl text-color2 font-bold leading-[3rem] md:leading-[4.5rem]">
          Superior Plastic <br /> Polymers for Durable,<br /> Lightweight Solutions
        </h1>
        <h4 className="text-slate-500 pt-6 md:pt-10">
          Engineered to Meet Your Toughest Manufacturing Needs
        </h4>
        
        {/* Button Section */}
        <div className="mt-6 flex  md:flex-row gap-6 md:gap-10">
          <button
            onClick={openForm}
            className="hover:text-black bg-btn1 text-white font-semibold w-40 md:w-48 h-10 rounded-sm"
          >
            Request a Quote
          </button>
          <button
            onClick={openForm}
            className="hover:bg-black hover:text-white bg-slate-100 text-gray-900 w-40 md:w-44 h-10 font-semibold rounded-sm"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section (Responsive) */}
      <div className="relative flex-1 mt-6 md:mt-0 mb-6 md:mb-0">
        <img
          className="rounded-xl w-full pr-3 h-auto md:h-[400px] object-cover"
          src="./phot.png"
          alt="Product Image"
        />
      </div>

      {/* Modal form */}
      <Contact isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
}
