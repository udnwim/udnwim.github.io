// import { useState } from 'react'
import CollapsibleSection from './CollapsibleSection'
import idea from "../assets/thought.png"
// import thinking from "../assets/Disney Think GIF by Mickey Mouse.gif"
import pearl from "../assets/pearl.png"

export default function Thoughts({ navbarRef }) {
  // const [visible, setVisible] = useState(true)
  // const [fadeOut, setFadeOut] = useState(false)

  // const handleClick = () => {
  //   setFadeOut(true)
  //   setTimeout(() => setVisible(false), 300) // duration matches the CSS transition
  // };
  
  return (
    <>
      {/* <div className="flex items-center justify-center font-mono">
        {visible && (
          <img 
            src={thinking} 
            alt="gif" 
            onClick={handleClick} 
            className={`cursor-pointer w-30 sm:w-38 md:w-48 mx-2 rounded-lg shadow-md shadow-sky-200/50 transition-opacity duration-300 ${fadeOut ? "opacity-0" : "opacity-100"}`} />
        )}
      </div> */}
      <div className="text-left sm:text-base md:text-lg px-8 pb-15">
        <CollapsibleSection title="Webpage Color Inspiration" navbarRef={navbarRef}>
          <div className="flex justify-center relative group">
            <img src={pearl} alt="img" className='w-60 sm:w-xs max-w-xs' />
          </div>
        </CollapsibleSection>
        <CollapsibleSection title="Personal Experience Using ChatGPT and Similar AI Tools"  navbarRef={navbarRef}>
          <p>As technology advances, AI has become a close companion in my daily life. I use it every day — not only to answer questions when I'm stuck studying, but also to get tons of helpful life tips. </p>
          <p>However, there's one thing that bothers me. If you've had the same experience, you might relate to this:</p>
          <p>Let's say you suddenly wonder what happened 50 years ago today. You open ChatGPT and type in the question, and it returns a list of historical events, one says The Beatles released an album exactly 50 years ago. Out of curiousity, you ask, "Tell me more about The Beatles."</p>
          <p>The moment you hit "Enter," the screen jumps to the bottom, cutting off the flow of what you were just reading, and now you have to scroll all the way back up to find where you left off.</p>
          <p>Personally, I find that a little frustrating. Back in the day, before AI became popular, I used Google for everything. If I had a random thought, I'd open a new tab, search, and still keep my original search in another tab. But with chatbots like ChatGPT, this kind of spontaneous exploration doesn't feel as smooth. So here's something I've been thinking about:</p>
          <div className="container flex justify-center pt-6">
            <img src={idea} alt="Image" className='outline rounded-lg w-full max-w-lg' />
          </div>
          <p>Imagine if, while reading, you could simply tap on a word or phrase — or even just touch anywhere on the screen — to bring up a <span className='font-bold'>small pop-up chat box</span>? You could ask your question right there without losing your place. No more endless scrolling or switching between apps. However, this can lead to a recursive issue if new questions arise while researching. Anyway, pop-up boxes like this has been around for a while, and I believe this kind of functionality has great potential to enhance user experience.</p>
          <p className='text-right'> - May 2025</p>
        </CollapsibleSection>
      </div>
    </>
      
  )
}