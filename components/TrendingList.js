
import React from 'react'

const TrendingList = () => {
    return (
        <div className=' flex items-center hover:bg-gray-200 mx-[-15px] text-base p-2 text-gray-800'>
            <div>
                <p className='text-gray-500 text-[14px] mb-1'>Sports · LIVE</p>
                <h1 className='font-medium pr-2'>The official Twitter account of the International Cricket Council, world cricket's governing body.</h1>
            </div>

            <div>
                <img className='rounded-[20px]' src="/icc.jpg" height="120px" width="120px"></img>
            </div>
           
        </div>
        
    )
}

export default TrendingList