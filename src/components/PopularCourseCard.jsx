"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PopularCourseCard = ({ course, showBadge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative group w-full h-full flex flex-col bg-white border border-gray-100 rounded-[28px] p-5 shadow-sm hover:shadow-2xl transition-all duration-300"
    >

      {/* Badge */}
      {showBadge && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
          High Rated
        </div>
      )}

      {/* Image */}
      <div className="relative h-40 sm:h-44 md:h-48 w-full bg-gray-50 rounded-2xl overflow-hidden mb-4">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow space-y-4">

        {/* Title */}
        <div>
          <h3 className="text-gray-800 font-bold text-lg sm:text-xl leading-tight line-clamp-1">
            {course.title}
          </h3>

          <p className="text-gray-400 text-xs mt-1 font-medium">
            Instructor:{" "}
            <span className="text-gray-600">
              {course.instructor}
            </span>
          </p>
        </div>

        {/* Info */}
        <div className="flex justify-between py-3 border-y border-gray-100 text-center">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Duration
            </span>
            <span className="text-gray-800 text-xs font-extrabold">
              {course.duration}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Level
            </span>
            <span className="text-gray-800 text-xs font-extrabold">
              {course.level}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 font-bold uppercase">
              Category
            </span>
            <span className="text-violet-600 text-xs font-black uppercase">
              {course.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2 italic">
          {course.description}
        </p>

        {/* Buttons (always bottom aligned) */}
        <div className="mt-auto flex gap-2">
          <button className="flex-1 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-violet-600 transition-all active:scale-95">
            Buy Now
          </button>

          <Link href={`/courses/${course.id}`} className="flex-1">
            <button className="w-full bg-gray-50 text-gray-700 py-3 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all border">
              Details
            </button>
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

export default PopularCourseCard;