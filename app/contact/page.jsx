"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


export default function ContactPage(){
    return (
        <div className="container flex flex-col justify-center items-center mt-4">

            <p>Hi 👋 , Let's get this conversation started.</p>
            <form action="" className="flex flex-col justify-around  gap-4 w-5/6 md:w-3/5 overflow-hidden border rounded-md p-4 bg-gray-50 mt-4 ">

                <p className="font-semibold">Name</p>
                <div className="flex gap-2 flex-col md:flex-row">
                    <input type="text" className="border py-2 px-4 rounded-md" placeholder="Your First Name"/>
                    <input type="text" className="border py-2 px-4 rounded-md" placeholder="Your Last Name"/>
                </div>
                <p className="font-semibold">Email</p>
                <input type="email" className="border py-2 px-4 rounded-md w-1/2" placeholder="Your Email"/>
                <p className="font-semibold">Message</p>
                <textarea name="" id="" cols="20" rows="10" className="border rounded-md p-4  outline-none resize-none" placeholder="Hi There" value="" onChange={()=>console.log("HI")}></textarea>
                <button className="border rounded-md bg-white w-1/6 px-3 py-2 font-semibold w-fit">
                    <div className="flex gap-4 items-center">
                        <p>Send</p>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </div>

                </button>
            </form>
        </div>
    )
}

