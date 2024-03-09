import React from "react";
import Image from 'next/image'
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


const FeedCard : React.FC = () => {
    return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12 gap-2" >
            <div className="col-span-1" >
                <Image src="https://avatars.githubusercontent.com/u/98755637?s=400&u=ddc84586c6c284eaedc1a4fde13707ca1b207ea6&v=4" alt="user-image" height={50} width={50}/>
            </div>
            <div className="col-span-11" >
                <h5>Himanshu</h5>
                <p>
                    Is it just me or everyone else? Do you feel the code quality
                    decrease as the project size increases? Just refactored a lot of bad 
                    code 💫 #codinglife
                </p>
                <div className="flex justify-between mt-5 items-center text-xl w-[90%]" >
                    <div>
                        <BiMessageRounded/>
                    </div>
                    <div>
                        <FaRetweet/>
                    </div>
                    <div>
                        <AiOutlineHeart/>
                    </div>
                    <div>
                        <BiUpload/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);}


export default FeedCard;

