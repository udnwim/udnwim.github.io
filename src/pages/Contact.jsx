import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <div>
      <h1>Feel Free to Connect!</h1>
      <div className="iconContainer flex space-x-6 justify-center pt-15">
        <a href="https://www.linkedin.com/in/hui-kuang-520b192b0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-5xl" />
        </a>
        <a href="https://github.com/udnwim" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-5xl" />
        </a>
        <a href="mailto:huixiankuang4@gmail.com">
          <FaEnvelope className="text-5xl" />
        </a>
      </div>
    </div>
  );
}
