import Image from "next/image";
export default function  ExperienceDetails(props) {
    const {experience} = props;
    console.log("This is the ",experience.logo);
    return (
        <div>
            <div className="flex gap-2">
                <Image
                    className="border rounded-lg"
                    src={"/" + experience.logo}
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
            {experience.images.length > 0 && <div className="flex mt-2 items-center">
                <p className="font-semibold">Technologies Used:</p>
                <div className="flex p-2 gap-4 items-center">
                    {experience.images.map((image, index) => (
                        <Image src={image} alt="" width={50} height={50} key={index} className="w-12 h-12 object-contain" />
                    ))}
                </div>
            </div>}
        </div>
    )
}