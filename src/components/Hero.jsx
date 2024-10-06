import { useState } from "react";
import { Contact } from "./Contact";
export function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Open the form
    const openForm = () => setIsFormOpen(true);
  
    // Close the form
    const closeForm = () => setIsFormOpen(false);
  return (
    <div className="ml-[90px] mt-32 flex">
      <div>
        <h1 className="text-6xl text-color2 font-bold leading-[4.5rem]">
          Superior Plastic <br /> Polymers for Durable,<br /> Lightweight Solutions
        </h1>
        <h4 className="text-slate-500 pt-10">
          Engineered to Meet Your Toughest Manufacturing Needs
        </h4>
        <div className="mt-10 flex gap-10">
          <button
            onClick={() => setIsFormOpen(true)}
            className="hover:text-black bg-btn1 text-white font-semibold w-40 h-10 rounded-sm"
          >
            Request a Quote
          </button>
          <button
          onClick={() => setIsFormOpen(true)}
          className="hover:bg-black hover:text-white bg-slate-100 text-gray-900 w-40 h-10 font-semibold rounded-sm">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="relative w-[700px] bottom-10 left-20">
        <img className="rounded-2xl" height={400} src="./phot.png" alt="Product Image" />
        
        {/* Modal form */}
        <Contact isOpen={isFormOpen} onClose={closeForm} />
      </div>
    </div>
  );
}
