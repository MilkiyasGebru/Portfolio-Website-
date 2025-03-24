import Image from "next/image";
import TechStack from "@/app/ui/techstack";
import ExperienceDetails from "@/app/ui/experience";
import ProjectDetail from "@/app/ui/project";
import Link from "next/link";

export default function Home() {

    const expriences = [
        {
            logo: "img.png",
            role : "Software Engineer and Head of Education",
            company: "Africa to Silicon Valley",
            date: "Mar 2023 - Feb 2025",
            duration:"1 year 10 months",
            description:"I developed automation scripts using Apps Script and Python to streamline student progress tracking across various learning platforms, significantly reducing the process from hours to mere minutes.  Additionally, I trained over 30 backend development students in GoLang and clean architecture principles, and delivered more than 10 comprehensive lessons on data structures and algorithms to another group of 30+ students.",
            images: ["/python.png","/Golang.png"]
        },
        {
            logo: "holistic.png",
            role : "Python Developer",
            company: "Holistic Technologies",
            date: "Oct 2023 - Feb 2025",
            duration:"1 year 5 months",
            images:["/python.png", "/selenium.png"],
            description: "I automated Instagram and Threads posts using Selenium, developed a system to automate WordPress article publishing via CRON jobs, managed and maintained their VPS server, implemented the entire frontend for the company blog, and integrated a Stripe payment system for secure and efficient transaction processing on the blog website."
        }
    ]

    const techStack = ["Typescript", "JavaScript", "Git", "Next.js", "Node.js", "Express.js",
    "Python", "HTML", "CSS", "Tailwind", "SQL", "PostgreSQL", "MongoDB","React","FastAPI","Golang"
    ];

    const projects = [
        {
            title: "Mekdim Project",
            description:"Mekdim is a comprehensive software enterprise project designed to create a feature-rich school portal, encompassing functionalities such as student grade tracking, course registration, and other essential administrative and academic tools.",
            logo:"mekdim.png",
            link:"https://github.com/NathanZK/Mekdim",
            website:"",
            presentation_link:""
        },
        {
            title: "Simple Bookmark Manager",
            description:"This project showcases a beautifully crafted, responsive landing page designed to promote a browser bookmark manager extension. It prioritizes a clean, modern aesthetic and user-friendly interface to effectively communicate the extension's value.",
            logo:"logo-bookmark.svg",
            link:"https://github.com/MilkiyasGebru/Landing-Page",
            website:"https://milkiyasgebru.github.io/Landing-Page/",
            presentation_link:""
        },
        {
            title: "Benchmark Suite For Explainable AI",
            description: "Conducted a 3 month long research project focusing on finding different benchmark suits for comparing different explainable AI models under mentorship of Prof. Valeria Bertacco and P.H.D student Andrew McCrab.",
            logo:"michigan.png",
            link:"https://github.com/AURA2022-Valeria/BeXAI",
            presentation_link:"https://www.youtube.com/watch?v=RRyJ8oesyJU",
            website:""

        },
        {title: "RateEat",description:"RateEat is a platform specifically designed for Ethiopia, connecting diners with restaurants and food options across the country. Users can discover new eateries, read genuine reviews, and engage with a community of fellow food enthusiasts. ",
            logo: "rateeat.png",
            link:"",
            presentation_link:"https://www.youtube.com/watch?v=Z_ump3DCtAA&ab_channel=RateEat",
            website:"https://rateeat.app/en",
        }
    ];

    const interests = ["Anime", "Movies", "Football", "Traveling"]

  return (



      <div className="w-5/6 m-auto">
          <div className="flex flex-col-reverse items-center md:flex-row mb-8">
              <div className="w-full lg:w-4/5">
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
              <div className="w-3/5 lg:w-1/5 p-2">
                  <Image
                      src="/Miki Profile Picture.jpg"
                      alt="Miki Profile Picture"
                      width={200}
                      height={200}
                      className="border border-gray-100 shadow-2xl rounded-lg w-full h-full"
                  />

              </div>

           </div>


          <Link href="/MILKIYAS-GEBRU-RESUME.pdf" className="font-bold py-2 px-3 border rounded-md my-32 bg-black text-white" download="cv.pdf">Download Resume</Link>



          <div className="flex gap-8 mt-8 w-full flex-col-reverse lg:flex-row">

              <div className="w-full lg:w-2/3 flex-wrap">

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

          <p className="font-bold text-xl my-4" id="Projects">Projects</p>

          <div className="flex flex-col  md:flex-row gap-4 mb-4 items-center ">
              {projects.map((item,index)=>(<ProjectDetail project={item} key={index}/>))}
          </div>


      </div>
  );
}
