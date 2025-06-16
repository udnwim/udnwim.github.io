import profilePic from "../assets/profile1.jpg";
import campus from "../assets/umb.png";
import coding from "../assets/coding.png";
import up from "../assets/up.jpg";
import group from "../assets/group.jpg"

export default function About() {
  return (
    <>
      <div className="aboutContainer scrollbar-hide m-5 max-w-3xl indent-8">
        <div className="intro flex items-center justify-center min-h-screen sm:text-lg md:text-lg py-2">
          <div className="text-center">
            <img src={profilePic} alt="img"
              className="mx-auto w-full max-w-xl rounded-full"
            />
            <div className="flex justify-center w-full m-0">
              <p>Hi! I am Hui.👋</p>
            </div>
          </div>
        </div>
        <div className="intro my-2 flex items-center min-h-screen sm:text-lg md:text-lg">
          <div className="">
            <img src={campus} alt="img"
              className="mx-auto w-full max-w-xl rounded-lg"
            />
            <p>
              Originally from China, I moved to the United States after completing
              junior high school. In 2024, I earned my bachelor's degree from the
              University of Massachusetts Boston — a beautiful campus by the sea.
              During my time there, I studied both Computer Science and Information
              Systems & Business Analytics, which provided me with a solid foundation
              in both technical and business disciplines.
            </p>
          </div>
        </div>
        <div className="intro my-2 flex items-center min-h-screen sm:text-lg md:text-lg">
          <div className="">
            <img src={coding} alt="img"
              className="mx-auto w-full max-w-xl rounded-full"
            />
            <p>
              Throughout my academic journey, I completed challenging coursework in
              JavaScript, Python, C, Java, and more. Tackling these problem sets not
              only strengthened my understanding of each language's structure but also
              sharpened my ability to think critically and develop efficient
              solutions. Programming isn't always easy, but I find it incredibly
              rewarding and intellectually stimulating.
            </p>
          </div>
        </div>
        <div className="intro flex items-center min-h-screen sm:text-lg md:text-lg">
          <div className="">
            <img src={group} alt="img"
              className="mx-auto w-full max-w-xl rounded-full"
            />
            <p>
              After graduation, I worked as an Office Associate at a wholesale
              company. In this role, I managed bookkeeping tasks using QuickBooks
              while also providing IT support, ensuring smooth operation of all
              workstations to help maintain business productivity.
            </p>
          </div>
        </div>
        <div className="intro flex items-center min-h-screen sm:text-lg md:text-lg">
          <div className="">
            <p>
              Currently, I'm pursuing opportunities as a Front-End Developer. This
              website is one of the projects I've built using HTML, CSS, JavaScript,
              Tailwind CSS, and React. I'm also diving into backend development and
              have several ideas for future projects that combine both front-end and
              back-end technologies. I'm excited to contribute to a team where I can grow, create meaningful user experiences, and continue learning in the ever-evolving tech industry.
            </p>
            <img src={up} alt="img"
              className="mx-auto w-sm max-w-xl rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  )
}

