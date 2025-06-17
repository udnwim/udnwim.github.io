import profilePic from "../assets/profile1.jpg";
import campus from "../assets/umb.png";
import coding from "../assets/coding.png";
import up from "../assets/up.jpg";
import work from "../assets/work.jpg"

export default function About() {
  return (
    <>
      <div className="aboutContainer scrollbar-hide m-5 max-w-3xl indent-8 text-lg md:text-xl">
        <div className="intro flex items-center justify-center min-h-screen py-2">
          <div className="text-center">
            <img src={profilePic} alt="img"
              className="mx-auto w-full max-w-lg rounded-full shadow-lg shadow-[#EAC4C3]"
            />
            <div className="flex justify-center w-full m-0">
              <p>Hi! I am Hui.👋</p>
            </div>
          </div>
        </div>
        <div className="intro flex items-center my-10 py-10 px-10">
          <div className="">
            <img src={campus} alt="img"
              className="mx-auto mb-10 w-full max-w-lg rounded-lg shadow-lg shadow-[#EAC4C3]"
            />
            <p>
              Originally from China, I moved to the United States after completing
              junior high school. In 2024, I earned my bachelor's degree from the
              <a href="https://www.umb.edu/" className="text-[#6B8DAF]"> University of Massachusetts Boston</a> — a beautiful campus by the sea.
              During my time there, I studied both <span className="underline text-[#F3CD89]">Computer Science</span> and <span className="underline text-[#F3CD89]">Information Systems & Business Analytics</span>, which provided me with a solid foundation in both technical and business disciplines.
            </p>
          </div>
        </div>
        <div className="intro flex items-center my-10 py-15 px-10">
          <div className="">
            <img src={coding} alt="img"
              className="mx-auto w-full max-w-xl rounded-full"
            />
            <p>
              Throughout my academic journey, I completed challenging coursework in <span> </span>
              <span className="underline text-[#F3CD89]">JavaScript</span>, <span className="underline text-[#F3CD89]">Python</span>, <span className="underline text-[#F3CD89]">C</span>, <span className="underline text-[#F3CD89]">Java</span>, and more. Tackling these problem sets not
              only strengthened my understanding of each language's structure but also
              sharpened my ability to think critically and develop efficient
              solutions. Programming isn't always easy, but I find it incredibly
              rewarding and intellectually stimulating.
            </p>
          </div>
        </div>
        <div className="intro flex items-center my-10 py-15 px-10">
          <div className="">
            <img src={work} alt="img"
              className="mx-auto w-full max-w-xl rounded-full"
            />
            <p>
              After graduation, I worked as an Office Associate at a wholesale
              company. In this role, I managed bookkeeping tasks using <a href="https://quickbooks.intuit.com/" className="text-[#0a8543] font-bold">QuickBooks </a>
              while also providing <span> </span><span className="underline text-[#EAC4C3]">IT support</span>, ensuring smooth operation of all
              workstations to help maintain business productivity.
            </p>
          </div>
        </div>
        <div className="intro flex items-center my-10 py-15 px-10">
          <div className="">
            <img src={up} alt="img"
              className="mx-auto w-full max-w-xs rounded-full"
            />
            <p>
              Currently, I'm pursuing opportunities as a <span className="text-[#F3CD89] font-bold">Front-End Developer</span>. This
              website is one of the projects I've built using <span className="underline text-[#EAC4C3]">HTML</span>, <span className="underline text-[#EAC4C3]">CSS</span>, <span className="underline text-[#EAC4C3]">JavaScript</span>, <span> </span>
              <span className="underline text-[#EAC4C3]">Tailwind CSS</span>,<span> </span> and <span className="underline text-[#EAC4C3]">React</span>. I'm also diving into backend development and
              have several ideas for future projects that combine both <span className="font-bold text-[#6B8DAF]">front-end</span> and <span className="font-bold text-[#6B8DAF]">back-end </span>
              technologies. I'm excited to contribute to a team where I can grow, create meaningful user experiences, and continue learning in the ever-evolving tech industry.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

