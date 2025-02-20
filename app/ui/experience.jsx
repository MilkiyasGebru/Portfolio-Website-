import Image from "next/image";

export default function  ExperienceDetails(props) {
    const {experience} = props;
    console.log("This is the ",experience.logo);
    return (
        <div>
            <div className="flex gap-2">
                <Image
                    className="border rounded-lg"
                    src={ "/"+experience.logo}
                    alt="Experience"
                    width={50}
                    height={50}
                />

                <div className="flex-col">
                    <p className="font-bold">{experience.role}</p>
                    <p>{experience.company}</p>

                </div>


            </div>
            <p className="mt-2">{experience.date + "   .   " + experience.duration}</p>
            <p className="font-light mt-2">{experience.description}</p>
        </div>
    )
}