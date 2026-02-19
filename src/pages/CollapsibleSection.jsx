// import { useRef, useEffect, useState } from "react";

// function CollapsibleSection({ title, children }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (isOpen && sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [isOpen]);

//   return (
//     <section ref={sectionRef} className="border border-[#e6e1da] py-4 px-6 mx-2 rounded-lg max-w-2xl my-4">
//       <button
//         className="w-full text-left font-semibold text-xl flex justify-between items-center focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span>{title}</span>
//         <span>{isOpen ? '▲' : '▼'}</span>
//       </button>
//       {isOpen && <div className="mt-3">{children}</div>}
//     </section>
//   );
// }

// export default CollapsibleSection;

import { useRef, useEffect, useState } from "react";

function CollapsibleSection({ title, children, navbarRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isOpen && sectionRef.current) {
      // Get navbar height if navbarRef is passed
      const navHeight = navbarRef?.current?.offsetHeight || 0;

      // Get the Y position of the section relative to the page
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY - navHeight;

      // Scroll to sectionTop minus navHeight so section is visible below navbar
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  }, [isOpen, navbarRef]);

  return (
    <section
      ref={sectionRef}
      className="
      border border-[#e6e1da] rounded-lg
      py-4 px-3 mx-2 my-4
      sm:w-sm md:w-md lg:w-2xl"
    >
      <button
        className="w-full text-left font-semibold text-xl flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className="mt-3">{children}</div>}
    </section>
  );
}

export default CollapsibleSection;
