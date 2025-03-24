import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
export default function ProjectDetail(props) {
    const {project} = props;
    return (
        <div className="flex flex-col h-96 justify-between items-center border border-gray-300 rounded-2xl overflow-hidden py-1 px-2 w-4/5 lg:w-1/3">
            <div className="max-h-18 overflow-hidden">
                <Image
                    src={"/" + project.logo}
                    alt="Project Image"
                    width={200}
                    height={150}
                    className="p-4 object-contain w-full h-full"
                />
            </div>

            <p className="my-1 text-center font-semibold text-xl">{project.title}</p>

            <p className="mb-3 font-light text-sm">{project.description}</p>
            <div className="self-start flex gap-1 items-center flex-wrap" >
                <Link href={project.link} className="border rounded-md font-semibold mt-2  px-2 py-1">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/>
                        <p>Github</p>
                    </div>
                </Link>
                {project.website !== "" &&
                    <Link href={project.website} className="border rounded-md font-semibold mt-2  px-2 py-1">
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faGlobe} className="w-6 h-6"/>
                            <p>Website</p>
                        </div>
                    </Link>}
                {project.presentation_link !== "" && <Link href={project.presentation_link}
                                                           className="border rounded-md font-semibold mt-2 px-2 py-1">
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faYoutube} className="w-6 h-6"/>
                        <p>Presentation</p>
                    </div>
                </Link>}
            </div>


        </div>
    )
}