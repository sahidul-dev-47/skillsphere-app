"use client";
import Image from "next/image";
import Link from "next/link";
import image from '@/assests/logo.png'

const Navbar = () => {


  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={image}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/courses"}>Courses</Link>
          </li>
          <li>
            <Link href={"/ my-profile"}> My Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;