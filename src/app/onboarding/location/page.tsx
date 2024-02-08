'use client'
import { ArrowLeft, MapPinIcon, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
const [location, setLocation] = useState('')
  return (
    <div className=" z-10 md:px-[70px] px-4  py-[50px] max-w-[560px] w-full  text-white bg-white flex items-center flex-col rounded-lg gap-7 border-white border">
        <Link href={'/onboarding/industry'} className=' flex items-center gap-1 text-[#0030AD] self-start' >
            <ArrowLeft className=' w-4 h-4 stroke-2' />
            <span  className=' font-bold text-xs'>Back</span>
        </Link>
    <Image src={"/icon.svg"} alt="icon" width={100} height={100} />
    <div className=" text-center">
    <p className=" text-[#000103] font-bold text-[31px] leading-tight">Where is your business located ?</p>

    </div>
    <form className=" flex flex-col w-full text-[#8f8f8f] gap-9">

        <div className=" flex items-center gap-2 border px-[20px] py-3 overflow-hidden text-[#8f8f8f] rounded-[8px] border-[#8F8F8F]">
          <MapPinIcon className=' w-4 h-4' />
            <input type="text" className=" border-none outline-none shadow-none w-full h-full" placeholder="United Kingdom, Dubai, London" />
        </div>
        <button disabled={location.length < 1} className={` ${location.length > 1 ? 'bg-[#0030AD] text-white' : 'bg-[#D5D9EA] text-[rgba(0,1,3,0.39)]'}  rounded-[8px] py-3 font-bold `}>Next</button>
       
    </form>
    <div className="flex gap-1">
        <p className=" text-[#8F8F8F] text-sm">Website language English,</p><Link href={'/onboarding/language'} className="text-[#0030AD] font-bold text-sm underline">Change</Link>

        </div>
  </div>
  )
}

export default page