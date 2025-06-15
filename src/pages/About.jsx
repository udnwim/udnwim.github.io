import profilePic from "../assets/profile1.jpg";
import campus from "../assets/umb.png";
import coding from "../assets/coding.png";
import up from "../assets/up.jpg";

export default function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className="aboutContainer px-10 max-w-3xl">
        <div className="background">
          <div className="text-center">
            <img
              src={profilePic}
              alt="img"
              className="mx-auto w-xs max-w-3xl md:w-md lg:w-lg mt-5"
            />
            <div className="flex justify-center w-full m-0">
              <p>Hi! I am Hui.</p>
            </div>
          </div>
          <p>
            Originally from China, I moved to the United States after completing
            junior high school. In 2024, I earned my bachelor's degree from the
            University of Massachusetts Boston — a beautiful campus by the sea.
            During my time there, I studied both Computer Science and Information
            Systems & Business Analytics, which provided me with a solid foundation
            in both technical and business disciplines.
          </p>
        </div>
        <img
          src={campus}
          alt="Sorry, this picture does not exist:("
          width="300"
        />
        <p>
          Throughout my academic journey, I completed challenging coursework in
          JavaScript, Python, C, Java, and more. Tackling these problem sets not
          only strengthened my understanding of each language's structure but also
          sharpened my ability to think critically and develop efficient
          solutions. Programming isn't always easy, but I find it incredibly
          rewarding and intellectually stimulating.
        </p>
        <img src={coding} alt="Image" width="300" />
        <p>
          After graduation, I worked as an Office Associate at a wholesale
          company. In this role, I managed bookkeeping tasks using QuickBooks
          while also providing IT support, ensuring smooth operation of all
          workstations to help maintain business productivity.
        </p>
        <p>
          Currently, I'm pursuing opportunities as a Front-End Developer. This
          website is one of the projects I've built using HTML, CSS, JavaScript,
          Tailwind CSS, and React. I'm also diving into backend development and
          have several ideas for future projects that combine both front-end and
          back-end technologies.
        </p>
        <img src={up} alt="Image" width="300" />
        <p>
          I'm excited to contribute to a team where I can grow, create meaningful
          user experiences, and continue learning in the ever-evolving tech
          industry.
        </p>
      </div>
    </>
  );
}
