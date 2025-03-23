import Image from "next/image";
import Link from "next/link";
export default function ProjectDetail(props) {
    const {project} = props;
    return (
        <div className="flex flex-col h-80 justify-between items-center border border-gray-300 rounded-2xl overflow-hidden py-4 px-4 w-4/5 lg:w-1/3">
            <div className="max-h-14 overflow-hidden">
                <Image
                    src={"/" + project.logo}
                    alt="Project Image"
                    width={200}
                    height={150}
                    className="p-4"
                />
            </div>


            <p className="my-3 text-center font-semibold text-2xl">{project.title}</p>

            <p className="mb-3 font-light text-sm">{project.description}</p>
            <div className="self-start flex gap-4">
                <Link href={project.link} className="underline font-semibold mt-2 self-start">Github Link</Link>
                {project.website !== "" && <Link href={project.website} className="underline font-semibold mt-2 self-start">Website Link</Link>}
            </div>


        </div>
    )
}