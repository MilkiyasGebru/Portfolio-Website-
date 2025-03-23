import Link from "next/link";

export default function Navbar(){

    return (
        <div className="bg-gray-100 sticky top-0">
            <div className="flex justify-between w-5/6 m-auto p-2">
            <div className="border border-gray-200 rounded-md  p-2 hover:cursor-pointer hover:font-bold">
                <Link href="/">
                    Home
                </Link>
            </div>
            <div className="flex gap-2 ">
                <div className=" p-2 border border-gray-200 rounded-md hover:cursor-pointer hover:font-bold ">
                    <Link href="/#Projects">Projects</Link>

                </div>
                <div className=" p-2 border border-gray-200 rounded-md  ">
                    <Link href="/contact" className="hover:cursor-pointer hover:font-bold">Contact</Link>

                </div>

            </div>
        </div>
        </div>
    )

}