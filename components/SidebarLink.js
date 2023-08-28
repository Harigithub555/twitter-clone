import React from 'react'

const SidebarLink = ({Icon, text, input ,onclick}) => {
  return (
    <div className='text-black flex items-center hover:bg-gray-200 rounded-3xl justify-center xl:justify-start text-2xl space-x-3 hoverEffect px-4 py-2 w-fit'>
        <Icon />
             <span className='hidden xl:inline'>{text}</span>
             
    </div>
  )
}

export default SidebarLink