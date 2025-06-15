import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <div className="iconContainer flex space-x-6 justify-center pt-10">
        <a href="https://www.linkedin.com/in/hui-kuang-520b192b0/" target="_blank" rel="noopener noreferrer" className='hover:-translate-y-1 duration-500'>
          <FaLinkedin className="text-5xl" />
        </a>
        <a href="https://github.com/udnwim" target="_blank" rel="noopener noreferrer" 
        className='hover:-translate-y-1 duration-500'>
          <FaGithub className="text-5xl" />
        </a>
        <a href="mailto:huixiankuang4@gmail.com" className='hover:-translate-y-1 duration-500'>
          <FaEnvelope className="text-5xl" />
        </a>
      </div>
    </div>
  );
}
