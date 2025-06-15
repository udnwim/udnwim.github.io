import React, { useState } from 'react';

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border py-4 px-6 rounded-md max-w-2xl mx-auto my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-semibold text-xl flex justify-between items-center focus:outline-none"
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>

      {isOpen && (
        <div className="mt-3">
          {children}
        </div>
      )}
    </section>
  );
}
