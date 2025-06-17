import { useState } from 'react'
import CollapsibleSection from './CollapsibleSection'
import idea from "../assets/thought.png"
import thinking from "../assets/Disney Think GIF by Mickey Mouse.gif"
import pearl from "../assets/pearl.png"

export default function Thoughts() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => setVisible(false), 300) // duration matches the CSS transition
  };
  
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
      <div className="pContainer sm:text-base md:text-lg">
        <CollapsibleSection title="Webpage Color Inspiration">
          <div className="flex justify-center relative group">
            <img src={pearl} alt="img" className='w-full max-w-xs' />
          </div>
        </CollapsibleSection>
        <CollapsibleSection title="Personal Experience Using ChatGPT and Similar AI Tools" >
          <p>As technology advances, AI has become a close companion in my daily life. I use it every day — not only to answer questions when I'm stuck studying, but also to get tons of helpful life tips. </p>
          <p>However, there's one thing that bothers me. If you've had the same experience, you might relate to this:</p>
          <p>Let's say you suddenly wonder what happened 50 years ago today. You open ChatGPT and type in your question. It gives you a list of historical events—then something catches your eye: The Beatles released an album exactly 50 years ago. Curious, you ask, "Tell me more about The Beatles."</p>
          <p>The moment you hit "Enter," the screen jumps to the bottom, cutting off the flow of what you were just reading. You have not finished exploring the other events from that time, and now you have to scroll all the way back up to find where you left off.</p>
          <p>Personally, I find that a little frustrating. Back in the day, before AI became popular, I used Google for everything. If I had a random thought, I'd open a new tab, search, and still keep my original search in another tab. But with chatbots like ChatGPT, this kind of spontaneous exploration doesn't feel as smooth. So here's something I've been thinking about:</p>
          <div className="container flex justify-center pt-6 pb-6">
            <img src={idea} alt="Image" width="500" className='outline rounded-lg' />
          </div>
          <p>Imagine if, while reading, you could simply tap on a word or phrase — or even just touch anywhere on the screen — to bring up a <span className='font-bold'>small pop-up chat box</span>? You could ask your question right there without losing your place. No more endless scrolling or switching between apps. Some AI-enabled smartphones already offer similar features. I believe this kind of functionality has great potential to enhance productivity.</p>
        </CollapsibleSection>

      </div>
    </>
      
  )
}