import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import wave from "../assets/waving.gif"

export default function Contact() {
  return (
    <div className='pt-3'>
      <div className="flex items-center justify-center">
        <img 
          src={wave} 
          alt="gif" 
          className="w-30 sm:w-38 mr-3 rounded-lg shadow-md shadow-sky-200/50" />
        <span className="text-[#e6e1da]">Thanks for visiting!</span>
      </div>
      <div className="flex space-x-6 justify-center pt-10">
        <a href="https://www.linkedin.com/in/hui-kuang-520b192b0/" target="_blank" rel="noopener noreferrer" className='z-1 text-[#e6e1da] hover:-translate-y-1 duration-500 hover:text-[#F3CD89]'>
          <FaLinkedin className="text-5xl" />
        </a>
        <a href="https://github.com/udnwim" target="_blank" rel="noopener noreferrer" 
        className='text-[#e6e1da] hover:-translate-y-1 duration-500 hover:text-[#F3CD89]'>
          <FaGithub className="text-5xl" />
        </a>
        <a href="mailto:huixiankuang4@gmail.com" className='text-[#e6e1da] hover:-translate-y-1 duration-500 hover:text-[#F3CD89]'>
          <FaEnvelope className="text-5xl" />
        </a>
      </div>
    </div>
  );
}
