
import React, { useState } from 'react';
import time from "./time.svg"
import flash from "./flash.svg"
import Et from "./ET.svg"

function ProfileMap() {

  const username = "Esrom sharew";
  const firstLetter = username.charAt(0);
  const joinedMonth= "February 2024";
  const email ="Eesromsharew1";
  const xp ="112";



  return (
    <div>
      <div className='md:hidden ml-[24px] mt-[30px]'>
        <div className="line w-[307.75px]  border-[0.93px] "></div>
      </div>

      <div className='flex mt-[] md:mt-[10px]'>
        <div>
          <div className='ml-[26px] mt-[36px]'>
            <p className='text-[18px] font-bold font-inter'>{username}</p>
          </div>
          <div className='ml-[26px] mt-[2px]'>
            <p className='text-[14px]  font-inter'>{email}</p>
          </div>
        <div className='ml-[26px] mt-[2px] flex'>
          <img className="w-[14px] h-[14px] " src={time}/>
          <p className='text-[12px] font-inter ml-0.5'>time joined {joinedMonth}</p>
        </div>
        </div>

        <div className='ml-[110px] md:ml-[340px] mt-[28px] md:mt-[32px]'>
          <div className="w-16 h-16 rounded-full bg-blue-500 relative"></div>
          <div className='absolute mt-[-68px] ml-[20px]'>
            <p className='text-[44px] text-white'>{firstLetter}</p>
          </div>
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg w-[100px] h-[30px] ml-[-27px] mt-1">
            <p className='text-white text-[10px] font-semibold'>Change Password</p>
          </button>
        </div>

        <div className="hidden md:flex ml-[50px] mt-[46px]">
          <img className="w-[40px] h-[40px] " src={flash} alt="Flash Icon" />
          <p className=" mt-[-20px] font-bold text-[26px] ml-[20px]"> {xp} <br/> <p className='font-normal text-[20px]'>Totals XP</p> </p>
          <img className="w-[33px] h-[33px] ml-[30px] " src={Et}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileMap;