import Image from "next/image";

import { AiFillGitlab } from "react-icons/ai";
import { RiHome8Line } from "react-icons/ri";
import { BiHash, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
// import { BsBookmark } from "react-icons/bs";            //commas lgake bi hum ek se jyada import kr skte h

import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";



interface InTwikSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBarMenuItems: InTwikSideBarButton[] = [
  {
    title: "Home",
    icon: <RiHome8Line />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "InTwik Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
  
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 w-screen h-screen px-56" >
        <div className="col-span-3  justify-start pt-1 px-4 ml-28" >
          <div className="text-2xl hover:bg-gray-800 rounded-full p-4 h-fit w-fit cursor-pointer transition-all">
          <AiFillGitlab />
          </div>
          <div className="mt-1 text-xl pr-4"> 
            <ul>
              {sideBarMenuItems.map(item => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer" key={item.title} >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.title }</span>
              </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold py-2 px-4 text-lg rounded-full w-full">Twik</button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>

        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  ); 
}