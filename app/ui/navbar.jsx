export default function Navbar(){

    return (

        <div className="flex justify-between w-5/6 m-auto">
            <div className="border border-gray-200 rounded-md mt-2 p-2 hover:cursor-pointer hover:font-bold">
                Home
            </div>
            <div className="flex  ">
                <div className="m-2 p-2 border border-gray-200 rounded-md hover:cursor-pointer hover:font-bold ">
                    Projects
                </div>
                <div className="m-2 p-2 border border-gray-200 rounded-md hover:cursor-pointer hover:font-bold ">
                    Contact
                </div>

            </div>
        </div>
    )

}