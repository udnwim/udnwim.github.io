import { useEffect, useState } from "react";

export default function AnimatedSentence() {
  const sentence = "Welcome to My Site !";
  const words = sentence.split(" ");

  const [visible, setVisible] = useState(Array(words.length).fill(false))
  const [bounce, setBounce] = useState(Array(words.length).fill(false))
  const [highlighted, setHighlighted] = useState(Array(words.length).fill(false))

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setVisible(prev => {
          const updated = [...prev]
          updated[i] = true
          return updated
        })

      
      setHighlighted(prev => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      });

    // After 1 seconds, remove the highlight
      setTimeout(() => {
        setHighlighted(prev => {
          const updated = [...prev]
          updated[i] = false
          return updated
        })
      }, 500)

        setBounce(prev => {
          const updated = [...prev]
          updated[i] = true
          return updated
        })

        setTimeout(() => {
          setBounce(prev => {
            const updated = [...prev]
            updated[i] = false; // stop bouncing after animation duration
            return updated
          });
        }, 1500) // bounce duration
      }, i * 300)
    })
  }, [])

  return (
    <div className="flex flex-wrap justify-center mt-10 text-5xl font-bold">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block mx-1 transition-all duration-500 
            ${visible[i] ? "text-[#D29F54]" : "opacity-0"} 
            ${bounce[i] ? "animate-bounce" : ""}
            ${highlighted[i] ? "text-[#DBB169]" : "text-[#D29F54]"}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

