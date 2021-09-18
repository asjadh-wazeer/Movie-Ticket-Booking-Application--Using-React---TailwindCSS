import React from "react";
import {BsChevronRight} from "react-icons/bs";
import {BiSearchAlt,BiChevronDown,BiMenu} from "react-icons/bi";
const NavSm=()=>{
return (
<>
<div className="text-white flex items-center justify-between">
   <div>
      <h3 className="text-xl font-bold">It All Starts Here!</h3>
      <span className="text-gray-400 text-xs flex items-center">
         Bhubanesar 
         <BsChevronRight />
      </span>
   </div>
   <div className="w-8 h-8">
      <BiChevronDown className="w-full h-full" />
   </div>
</div>
</>
)
};
const NavMd=()=>{
return (
<div class="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
   <BiSearchAlt />
   <input type="search" class="w-full focus:outline-none" placeholder="Search for movies.events,plays,sports and activites"/>
</div>
)
};
const NavLg=()=>{
return (
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-12 h-12"><img src="" 
         alt="logo" className="w-full h-full"/></div>
      <div class="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
         <BiSearchAlt />
         <input type="search" class="w-full focus:outline-none" placeholder="Search for movies.events,plays,sports and activites"/>
      </div>
   </div>


   <div className="flex items-center gap-3">
        <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
         Bhubanesar 
         <BsChevronRight />
        </span>
        <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
            Sign in
        </button>
        <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full"/>
        </div>
   </div>
</div>
</>
)
};
const Navbar=()=>{
return (
<>
<nav className="bg-navColor-900 px-4 py-2">
   <div className="md:hidden">
      {
      <NavSm />
      }
   </div>
   <div className="hidden lg:hidden md:flex">
      {
      <NavMd />
      //inga anda componenta rendar pannanum
      }
   </div>
   <div className="hidden lg:flex">
      {
      <NavLg />
      }
   </div>
</nav>
</>
)
};

export default Navbar;