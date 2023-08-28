import React from 'react'
import SidebarLink from './SidebarLink'
import { AiOutlineInbox, AiOutlineUser } from 'react-icons/ai'
import { BiSearch, BiSolidHomeCircle } from "react-icons/bi"
import { BsBell, BsThreeDots } from "react-icons/bs"
import { HiOutlineClipboardList, HiOutlineDotsCircleHorizontal, HiOutlineUsers } from "react-icons/hi"
import { LuVerified } from "react-icons/lu"
import { signOut, useSession } from 'next-auth/react'



const Sidebar = () => {

    const {data: session} = useSession()

  return (
    <div className='hidden sm:flex flex-col items-center  xl:items-start xl:w-[300px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8'>
            <div className='flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:ml-10'>
            <img className='h-[30px] w-[40px] hover:bg-gray-200 rounded-[20px] m-5 text-sky-600'src="./twitterwx.png " alt=''></img>
            </div>

            <div className='space-y- mt- mb-2.5 xl:ml-10'>

            <SidebarLink text="Home" Icon={BiSolidHomeCircle} />
            <SidebarLink text="Explore" Icon={BiSearch} />
            <SidebarLink text="Notifications" Icon={BsBell} />
            <SidebarLink text="Messages" Icon={AiOutlineInbox} />
            <SidebarLink text="Lists" Icon={HiOutlineClipboardList} />
            <SidebarLink text="Communities" Icon={HiOutlineUsers} />
            <SidebarLink text="Verified" Icon={LuVerified} />
            <SidebarLink text="Profile" Icon={AiOutlineUser} />
            <SidebarLink text="More" Icon={HiOutlineDotsCircleHorizontal} />

            </div>
            <button className="hidden xl:inline ml-10 mt-4 bg-[#1d9bf0] text-white rounded-full w-52 h-[70px] text-lg font-bold hover:bg-[#1a8cd8]">
                Tweet
            </button>

            <div
                className="text-black flex items-center justify-center mt-2 hoverEffect xl:ml-10 xl:-mr-5 px-4 py-2"
                onClick={signOut}
            >
                <img
                    src={session?.user?.image}
                    alt=""
                    className="h-10 w-10 rounded-full xl:mr-2.5"
                />
                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">{session?.user?.name}</h4>
                    <p className="text-[#6e767d]">@{session?.user?.tag}</p>
                </div>
                <BsThreeDots className="h-5 hidden xl:inline ml-10" />
            </div>


    </div>
  )
}

export default Sidebar