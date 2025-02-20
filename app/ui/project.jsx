import Image from "next/image";
export default function ProjectDetail(props) {
    const {project} = props;
    return (
        <div className="border border-gray-300 rounded-2xl overflow-hidden p-2 w-1/3">
            <Image
                src={"/" + project.logo}
                alt="Project Image"
                width={300}
                height={50}
            />

            <p className="my-3 text-center font-semibold">{project.title}</p>

            <p className="mb-3">{project.description}</p>

            <a href={project.link} className="underline font-semibold mt-2">Github Link</a>

        </div>
    )
}