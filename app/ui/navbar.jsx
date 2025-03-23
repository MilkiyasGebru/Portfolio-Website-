import Link from "next/link";

export default function Navbar(){

    return (

        <div className="flex justify-between w-5/6 m-auto p-2">
            <div className="border border-gray-200 rounded-md  p-2 hover:cursor-pointer hover:font-bold">
                Home
            </div>
            <div className="flex gap-2 ">
                <div className=" p-2 border border-gray-200 rounded-md hover:cursor-pointer hover:font-bold ">
                    Projects
                </div>
                <div className=" p-2 border border-gray-200 rounded-md hover:cursor-pointer hover:font-bold ">
                    <Link href="/contact">Contact</Link>

                </div>

            </div>
        </div>
    )

}