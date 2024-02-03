import Image from "next/image";
import SideNav from "./components/SideNav";
import people from '../public/profile 1.png'
import lang from '../public/language.png'
import stack from '../public/stack.png'
import menu from '../public/54-menu-2.png'
import { IoSettingsSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      {/* <!-- component --> */}
      {/* <div>
        <div> */}

      {/* <SideNav /> */}
      {/* <!-- Content --> */}
      {/* <div className="flex-1 px-2 sm:px-0"> */}
      {/* Upper navigation */}
      <div className="flex justify-between items-center">

        <h3 className="text-xl font-semibold text-slate-400">Dua Page</h3>
        <div className="drawer-content flex flex-col items-center justify-center cursor-pointer">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className=" drawer-button lg:hidden text-xl">
            <FaBars />
          </label>

        </div>
        <div className="inline-flex items-center space-x-5">
          <a className="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </a>
          <Image src={people} />
          <div className="drawer-content flex flex-col items-center justify-center cursor-pointer">
            {/* Page content here */}
            <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden text-green text-xl">
              <IoSettingsSharp />
            </label>

          </div>

        </div>
      </div>
      {/* Body Cards */}
      <div className="flex">
        <div className="mb-10 sm:mb-0 mt-10 flex justify-center items-center gap-10 flex-3">
          <div className="drawer lg:drawer-open flex-1">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side z-10">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu w-80 min-h-full bg-white rounded-3xl">
                {/* Left Sidebar content here */}
                <div className="bg-green">
                  <h1 className="text-center text-xl mb-6">Categories</h1>
                </div>
                <div className="border-gray-200 py-5 px-3 w-72 h-10 border my-5 flex items-center justify-start gap-5 rounded-md">
                  <IoSearchOutline />
                  <input type="text" placeholder="Search Categories" className="text-md" />
                </div>
              </ul>
            </div>
          </div>
        </div>
        {/* Drawer */}
        <div className="drawer lg:drawer-open drawer-end flex-1">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side z-10">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu px-4 py-7 w-80 min-h-full bg-white rounded-3xl">
              {/* Sidebar content here */}
              <h1 className="text-center text-xl mb-6">Settings</h1>
              <div className="space-y-5">
                <div className="flex items-center gap-3 justify-center bg-ash py-3 rounded-md">
                  <div className='bg-gray-200 p-2 rounded-full '>
                    <Image src={lang} width={20} className="text-green" />
                  </div>
                  <h1 className="text-green text-lg">Language settings</h1>
                </div>
                <div className="flex items-center gap-3 justify-center bg-ash py-3 rounded-md">
                  <div className='bg-gray-200 p-2 rounded-full '>
                    <Image src={stack} width={20} className="text-green" />
                  </div>
                  <h1 className="text-green text-lg">General settings</h1>
                </div>
                <div className="flex items-center gap-3 justify-center bg-ash py-3 rounded-md">
                  <div className='bg-gray-200 p-2 rounded-full '>
                    <Image src={menu} width={20} className="text-green" />
                  </div>
                  <h1 className="text-green text-lg">Font settings</h1>
                </div>
                <div className="flex items-center gap-3 justify-center bg-ash py-3 rounded-md">
                  <div className='bg-gray-200 p-2 rounded-full '>
                    <Image src={menu} width={20} className="text-green" />
                  </div>
                  <h1 className="text-green text-lg">Appearance settings</h1>
                </div>
              </div>

            </ul>

          </div>
        </div>
      </div>
    </div>
    // </div>
    //   </div>
    // </div>
  );
}
