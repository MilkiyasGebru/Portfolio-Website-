import Image from "next/image";
import TechStack from "@/app/ui/techstack";
import ExperienceDetails from "@/app/ui/experience";
import ProjectDetail from "@/app/ui/project";

export default function Home() {

    const expriences = [
        {
            logo: "img.png",
            role : "Software Engineer and Head of Education",
            company: "Africa to Silicon Valley",
            date: "Mar 2023 - Feb 2025",
            duration:"1 year 10 months",
            description:"I developed automation scripts using Apps Script and Python to streamline student progress tracking across various learning platforms, significantly reducing the process from hours to mere minutes.  Additionally, I trained over 30 backend development students in GoLang and clean architecture principles, and delivered more than 10 comprehensive lessons on data structures and algorithms to another group of 30+ students."
        },
        {
            logo: "holistic.png",
            role : "Python Developer",
            company: "Holistic Technologies",
            date: "Oct 2023 - Feb 2025",
            duration:"1 year 5 months",
            description: "I automated Instagram and Threads posts using Selenium, developed a system to automate WordPress article publishing via CRON jobs, managed and maintained their VPS server, implemented the entire frontend for the company blog, and integrated a Stripe payment system for secure and efficient transaction processing on the blog website."
        }
    ]

    const techStack = ["Typescript", "JavaScript", "Git", "Next.js", "Node.js", "Express.js",
    "Python", "HTML", "CSS", "Tailwind", "SQL", "PostgreSQL", "MongoDB","React"
    ];

    const projects = [
        {
            title: "Mekdim Project",
            description:"Mekdim is a comprehensive software enterprise project designed to create a feature-rich school portal, encompassing functionalities such as student grade tracking, course registration, and other essential administrative and academic tools.",
            logo:"mekdim.png",
            link:"https://github.com/NathanZK/Mekdim"
        }
    ];

    const interests = ["Anime", "Movies", "Football", "Traveling"]

    console.log(expriences);
  return (

      <div className="w-5/6 m-auto">

          <div className="flex">
              <div>
                <p className="text-4xl mb-3.5">About Me</p>
                <p className="text-4xl mb-3.5">I ❤️ to build things</p>
                <p className="text-lg font-light">
                  As an enthusiastic software developer, I have always been fascinated by how computers work, both from a
                  hardware and software perspective. My interest in the field began at an early age when I was first
                  introduced to computers, and since then, I’ve been determined to build a career in tech. This drive led me
                  to acquire skills in programming languages and technologies like Java, C++, HTML5, CSS, Python,
                  JavaScript, Node.js, and React.js, and to pursue opportunities to grow.
                </p>
              </div>
              <Image
              src="/Miki Profile Picture.jpg"
              alt="Miki Profile Picture"
              width={250}
              height={250}
              className="border border-gray-100 shadow-2xl rounded-lg"
              />

           </div>


          <a href="/MILKIYAS-GEBRU-RESUME.pdf" className="underline font-medium" download="cv.pdf">Download Resume</a>


          <p className="text-lg font-bold mt-4">Details</p>

          <div className="flex gap-8 w-full">

              <div className="w-2/3 flex-wrap">

                  <p className="text-xl font-bold">Stack</p>

                  <div className="flex mt-4 flex-wrap w-full gap-y-2">
                      {techStack.map((item, index) => (<TechStack key={index} tech={item}/>))}
                  </div>

                  <p className="text-xl font-bold mt-4">Interests</p>

                  <div className="flex mt-4 flex-wrap w-full gap-y-2">
                      {interests.map((item, index) => (<TechStack key={index} tech={item}/>))}
                  </div>


              </div>
              <div className="flex flex-col gap-8">
                  {/*    This is the experience part*/}

                  <p className="font-bold">Experience</p>

                  {expriences.map((item, index) => (<ExperienceDetails experience={item} key={index} />))}

              </div>
          </div>

          <p className="font-bold text-xl mb-3">Projects</p>

          <div className="flex gap-4">
              {projects.map((item,index)=>(<ProjectDetail project={item} key={index}/>))}
          </div>


      </div>
  );
}
